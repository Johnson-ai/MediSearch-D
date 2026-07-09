import { useState, useCallback, useRef } from "react";
import { fetchMedicalData } from "../utils/api";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("overview");
  const [isBodyMode, setIsBodyMode] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSearch, setCurrentSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("medisearch_history") || "[]"); } catch { return []; }
  });
  const cacheRef = useRef({});

  const search = useCallback(async (searchQuery, category, bodyMode) => {
    const q = (searchQuery ?? query).trim();
    const cat = category ?? activeCategory;
    const bm = bodyMode ?? isBodyMode;
    if (!q) return;

    const cacheKey = `${bm ? "body" : "clinical"}::${q}::${cat}`;
    if (cacheRef.current[cacheKey]) {
      setResults(cacheRef.current[cacheKey]);
      setCurrentSearch(q);
      setActiveCategory(cat);
      setIsBodyMode(bm);
      return;
    }

    setLoading(true);
    setError(null);
    setCurrentSearch(q);
    setActiveCategory(cat);
    setIsBodyMode(bm);

    const newHistory = [q, ...searchHistory.filter(h => h !== q)].slice(0, 12);
    setSearchHistory(newHistory);
    try { localStorage.setItem("medisearch_history", JSON.stringify(newHistory)); } catch {}

    try {
      const data = await fetchMedicalData(q, cat, bm);
      cacheRef.current[cacheKey] = data;
      setResults(data);
    } catch {
      setError("Unable to retrieve clinical data. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }, [query, activeCategory, isBodyMode, searchHistory]);

  const switchCategory = useCallback((cat) => {
    setActiveCategory(cat);
    if (currentSearch) search(currentSearch, cat, isBodyMode);
  }, [currentSearch, isBodyMode, search]);

  const switchMode = useCallback((bm) => {
    const defaultCat = bm ? "anatomy" : "overview";
    setIsBodyMode(bm);
    setActiveCategory(defaultCat);
    setResults(null);
    setCurrentSearch("");
  }, []);

  const clearHistory = useCallback(() => {
    setSearchHistory([]);
    try { localStorage.removeItem("medisearch_history"); } catch {}
  }, []);

  return {
    query, setQuery,
    activeCategory, isBodyMode,
    results, loading, error,
    currentSearch, searchHistory,
    search, switchCategory, switchMode, clearHistory,
  };
}
