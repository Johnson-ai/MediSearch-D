import { useState, useMemo } from "react";
import { LAB_VALUES, LAB_CATEGORIES } from "../data/labValues";

export default function LabValues() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => LAB_VALUES.filter(l => {
    if (category !== "All" && l.category !== category) return false;
    if (search && !l.test.toLowerCase().includes(search.toLowerCase()) && !l.abbr.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [search, category]);

  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach(l => { if (!g[l.category]) g[l.category] = []; g[l.category].push(l); });
    return g;
  }, [filtered]);

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-4xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-8 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">Reference</div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Normal Lab<br /><span className="text-blue-400 text-glow">Values</span></h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">Complete reference ranges for 63 common investigations — with clinical significance of low and high results.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 mb-6 animate-slide-up stagger-2">
          <div className="flex items-center gap-2 glass border border-blue-900/30 rounded-xl px-4 py-3">
            <svg className="w-4 h-4 text-blue-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by test name or abbreviation..."
              className="flex-1 bg-transparent outline-none text-white placeholder-slate-700 text-sm" />
            {search && <button onClick={() => setSearch("")} className="text-slate-700 hover:text-slate-500 text-lg">x</button>}
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...LAB_CATEGORIES].map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all font-mono ${category === c ? "bg-blue-700/20 border-blue-600/40 text-blue-300" : "border-blue-900/25 text-slate-600 hover:border-blue-800/40 hover:text-slate-400"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6 animate-slide-up stagger-3">
          {Object.entries(grouped).map(([cat, vals]) => (
            <div key={cat}>
              <div className="text-[11px] font-mono text-blue-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-blue-900" />{cat}<span className="flex-1 h-px bg-blue-900/30" />
              </div>
              <div className="space-y-1">
                {vals.map((lab, i) => (
                  <div key={i} className={`glass border rounded-xl overflow-hidden transition-all duration-200 cursor-pointer ${expanded === `${cat}-${i}` ? "border-blue-600/40" : "border-blue-900/20 hover:border-blue-800/40"}`}
                    onClick={() => setExpanded(expanded === `${cat}-${i}` ? null : `${cat}-${i}`)}>
                    <div className="px-4 py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-[10px] text-blue-600 bg-blue-900/30 border border-blue-900/40 rounded px-2 py-0.5 flex-shrink-0 w-16 text-center">{lab.abbr}</span>
                        <span className="text-sm text-slate-300 truncate">{lab.test}</span>
                      </div>
                      <span className="font-mono text-xs text-emerald-400 flex-shrink-0">{lab.normal}</span>
                    </div>
                    {expanded === `${cat}-${i}` && (
                      <div className="border-t border-blue-900/20 px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in">
                        <div className="bg-blue-900/10 rounded-lg p-3">
                          <div className="text-[10px] font-mono text-blue-600 uppercase tracking-wider mb-1">Low — causes</div>
                          <p className="text-xs text-slate-400 leading-relaxed">{lab.low}</p>
                        </div>
                        <div className="bg-red-900/10 rounded-lg p-3">
                          <div className="text-[10px] font-mono text-red-600 uppercase tracking-wider mb-1">High — causes</div>
                          <p className="text-xs text-slate-400 leading-relaxed">{lab.high}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="glass border border-blue-900/20 rounded-xl p-10 text-center">
              <p className="text-slate-600 text-sm font-mono">No results found.</p>
            </div>
          )}
        </div>
        <p className="text-center text-[11px] text-slate-700 font-mono mt-6">Reference ranges may vary by laboratory. Always use institution-specific reference ranges in clinical practice.</p>
      </div>
    </div>
  );
}
