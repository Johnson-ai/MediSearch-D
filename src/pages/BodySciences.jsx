import { useRef, useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import { BODY_CATEGORIES, BODY_SEARCHES, BODY_SYSTEMS } from "../utils/api";

import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultRenderer from "../components/ResultRenderer";
import DiagramCard from "../components/DiagramCard";

export default function BodySciences() {
  const { query, setQuery, activeCategory, results, loading, error, currentSearch, search, switchCategory } = useSearch();
  const resultsRef = useRef(null);

  useEffect(() => {
    if (results) resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [results]);

  const doSearch = (q, cat) => {
    const c = cat || (activeCategory === "overview" ? "anatomy" : activeCategory);
    search(q || query, c, true);
  };

  const activeCat = activeCategory === "overview" ? "anatomy" : activeCategory;


  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-4xl mx-auto px-4 pt-14 pb-20">

        {!currentSearch && (
          <div className="mb-10 animate-slide-up">
            <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">
              Human Body Sciences
            </div>
            <h1 className="font-display text-4xl font-bold text-white mb-3">
              Anatomy, Physiology<br /><span className="text-blue-400 text-glow">& Beyond</span>
            </h1>
            <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
              Search any structure, process, or mechanism of the human body. Covers anatomy, physiology, biochemistry, histology, embryology, and pathophysiology.
            </p>
          </div>
        )}

        {currentSearch && (
          <div className="mb-5 animate-slide-up">
            <span className="text-slate-500 text-sm">Results for </span>
            <span className="text-blue-400 font-display italic font-semibold">"{currentSearch}"</span>
          </div>
        )}

        <div className="mb-4">
          <SearchBar query={query} setQuery={setQuery} onSearch={() => doSearch(query, activeCat)} loading={loading}
            placeholder="Search any body structure, process, or mechanism..." autoFocus />
        </div>

        {currentSearch && (
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
            {BODY_CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => { switchCategory(cat.id); if (currentSearch) search(currentSearch, cat.id, true); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 font-mono ${
                  activeCat === cat.id
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
              <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Common Topics</p>
              <div className="flex flex-wrap gap-2">
                {BODY_SEARCHES.slice(0, 20).map(s => (
                  <button key={s} onClick={() => { setQuery(s); doSearch(s, "anatomy"); }}
                    className="text-xs px-3 py-1.5 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-700/40 hover:text-slate-300 hover:bg-blue-900/15 transition-all">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8 animate-slide-up stagger-3">
              <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Browse by System</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {BODY_SYSTEMS.map(sys => (
                  <div key={sys.name} className="glass glass-hover border border-blue-900/20 rounded-xl p-4 transition-all">
                    <div className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider font-mono">{sys.name}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {sys.topics.map(t => (
                        <button key={t} onClick={() => { setQuery(t); doSearch(t, "anatomy"); }}
                          className="text-[11px] px-2.5 py-1 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-600/40 hover:text-blue-300 hover:bg-blue-900/15 transition-all">
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-slide-up stagger-4">
              {BODY_CATEGORIES.map(cat => (
                <div key={cat.id} className="glass glass-hover border border-blue-900/20 rounded-xl p-4 cursor-default">
                  <div className="font-mono text-blue-700 text-xs mb-2">{cat.short}</div>
                  <div className="text-sm font-medium text-slate-300">{cat.label}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {loading && <LoadingSpinner message="Retrieving body science data..." />}

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
                  <div className="font-mono text-blue-600 text-[10px] uppercase tracking-widest mb-0.5">{BODY_CATEGORIES.find(c => c.id === activeCat)?.short}</div>
                  <div className="text-white font-semibold text-sm">{BODY_CATEGORIES.find(c => c.id === activeCat)?.label}</div>
                </div>
                <div className="text-[10px] font-mono text-slate-700">MediSearch AI · Body Sciences</div>
              </div>
              <div className="p-6"><ResultRenderer text={results} /></div>
            </div>
            <p className="text-center text-[11px] text-slate-700 font-mono mt-4">
              For educational use only. Verify with authoritative anatomical and physiological references.
            </p>
            <div className="mt-8">
              <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Related Topics</p>
              <div className="flex flex-wrap gap-2">
                {BODY_SEARCHES.filter(s => s.toLowerCase() !== currentSearch?.toLowerCase()).slice(0, 10).map(s => (
                  <button key={s} onClick={() => { setQuery(s); doSearch(s, activeCat); }}
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
