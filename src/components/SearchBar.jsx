import { useRef, useEffect } from "react";

export default function SearchBar({ query, setQuery, onSearch, loading, placeholder, autoFocus = false }) {
  const inputRef = useRef(null);
  useEffect(() => { if (autoFocus) inputRef.current?.focus(); }, [autoFocus]);

  return (
    <div className="flex items-center gap-2 glass border border-blue-900/40 border-blue-glow rounded-xl px-4 py-3 transition-all duration-300">
      <svg className="w-4 h-4 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => e.key === "Enter" && !loading && onSearch()}
        placeholder={placeholder || "Search any disease, condition, or clinical topic..."}
        className="flex-1 bg-transparent outline-none text-white placeholder-slate-700 text-sm"
      />
      {query && (
        <button onClick={() => setQuery("")} className="text-slate-700 hover:text-slate-500 transition-colors text-lg leading-none">x</button>
      )}
      <button
        onClick={() => onSearch()}
        disabled={loading || !query.trim()}
        className="bg-blue-700 hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-2 flex-shrink-0"
      >
        {loading
          ? <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          : <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        }
        Search
      </button>
    </div>
  );
}
