import { useRef, useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import { CLINICAL_CATEGORIES, CLINICAL_SEARCHES } from "../utils/api";

import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultRenderer from "../components/ResultRenderer";
import DiagramCard from "../components/DiagramCard";

export default function Home() {
  const { query, setQuery, activeCategory, results, loading, error, currentSearch, searchHistory, search, switchCategory, clearHistory } = useSearch();
  const resultsRef = useRef(null);

  useEffect(() => {
    if (results) resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [results]);



  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-4xl mx-auto px-4 pt-14 pb-20">

        {!currentSearch && (
          <div className="mb-10 animate-slide-up">
            <div className="mb-8">
              <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">
                Clinical Search Engine
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                Medical Knowledge<br />
                <span className="text-blue-400 text-glow">On Demand</span>
              </h1>
              <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
                Search any disease, condition, or clinical topic. Structured, evidence-based answers across seven clinical domains — built for final-year nursing practice.
              </p>
            </div>
            <div className="inline-flex items-center gap-3 glass border border-blue-900/30 rounded-xl px-4 py-3 mb-8">
              <div className="w-px h-8 bg-blue-800" />
              <div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">Prepared for</div>
                <div className="text-sm text-white font-display font-semibold">Damilare Akossou</div>
                <div className="text-[11px] text-slate-600 font-mono">Nursing Final Year · 2026</div>
              </div>
            </div>
          </div>
        )}

        {currentSearch && (
          <div className="mb-5 animate-slide-up">
            <span className="text-slate-500 text-sm">Results for </span>
            <span className="text-blue-400 font-display italic font-semibold">"{currentSearch}"</span>
          </div>
        )}

        <div className="mb-4">
          <SearchBar query={query} setQuery={setQuery} onSearch={() => search(query, activeCategory, false)} loading={loading} autoFocus />
        </div>

        {currentSearch && (
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
            {CLINICAL_CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => switchCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 font-mono ${
                  activeCategory === cat.id
                    ? "bg-blue-700/20 border-blue-600/40 text-blue-300"
                    : "border-blue-900/25 text-slate-600 hover:border-blue-800/40 hover:text-slate-400"
                }`}>
                {cat.short} <span className="hidden sm:inline text-[10px] opacity-60 ml-1">{cat.label}</span>
              </button>
            ))}
          </div>
        )}

        {!currentSearch && (
          <>
            <div className="mb-6 animate-slide-up stagger-2">
              <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Common Conditions</p>
              <div className="flex flex-wrap gap-2">
                {CLINICAL_SEARCHES.map(s => (
                  <button key={s} onClick={() => { setQuery(s); search(s, "overview", false); }}
                    className="text-xs px-3 py-1.5 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-700/40 hover:text-slate-300 hover:bg-blue-900/15 transition-all">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {searchHistory.length > 0 && (
              <div className="mb-8 animate-slide-up stagger-3">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] text-slate-700 uppercase tracking-widest font-mono">Recent</p>
                  <button onClick={clearHistory} className="text-xs text-slate-700 hover:text-slate-500 transition-colors">Clear</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map(h => (
                    <button key={h} onClick={() => { setQuery(h); search(h, "overview", false); }}
                      className="text-xs px-3 py-1.5 rounded-full border border-blue-900/20 text-slate-700 hover:text-slate-400 hover:border-blue-800/30 transition-all flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-slide-up stagger-4">
              {CLINICAL_CATEGORIES.map(cat => (
                <div key={cat.id} className="glass glass-hover border border-blue-900/20 rounded-xl p-4 cursor-default">
                  <div className="font-mono text-blue-700 text-xs mb-2">{cat.short}</div>
                  <div className="text-sm font-medium text-slate-300">{cat.label}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {loading && <LoadingSpinner />}

        {error && (
          <div className="glass border border-red-900/30 rounded-xl p-5 text-center mt-4">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {results && !loading && (
          <div ref={resultsRef} className="animate-slide-up mt-2">
            <DiagramCard query={currentSearch} />
            <div className="glass border border-blue-900/30 rounded-2xl overflow-hidden glow-blue">
              <div className="border-b border-blue-900/20 px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="font-mono text-blue-600 text-[10px] uppercase tracking-widest mb-0.5">{CLINICAL_CATEGORIES.find(c => c.id === activeCategory)?.short}</div>
                  <div className="text-white font-semibold text-sm">{CLINICAL_CATEGORIES.find(c => c.id === activeCategory)?.label}</div>
                </div>
                <div className="text-[10px] font-mono text-slate-700">MediSearch AI · Evidence-based</div>
              </div>
              <div className="p-6"><ResultRenderer text={results} /></div>
            </div>
            <p className="text-center text-[11px] text-slate-700 font-mono mt-4">
              For educational use only. Always verify with BNF, WHO guidelines, or a licensed clinician.
            </p>
            <div className="mt-8">
              <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Related Topics</p>
              <div className="flex flex-wrap gap-2">
                {CLINICAL_SEARCHES.filter(s => s.toLowerCase() !== currentSearch.toLowerCase()).slice(0, 8).map(s => (
                  <button key={s} onClick={() => { setQuery(s); search(s, activeCategory, false); }}
                    className="text-xs px-3 py-1.5 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-700/40 hover:text-slate-300 hover:bg-blue-900/15 transition-all">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
