import { useState, useMemo } from "react";
import { MNEMONICS, MNEMONIC_CATEGORIES } from "../data/mnemonics";

export default function Mnemonics() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => MNEMONICS.filter(m => {
    if (category !== "All" && m.category !== category) return false;
    if (search && !m.mnemonic.toLowerCase().includes(search.toLowerCase()) &&
        !m.title.toLowerCase().includes(search.toLowerCase()) &&
        !m.category.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [search, category]);

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-4xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-8 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">Study Tools</div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Mnemonics<br /><span className="text-blue-400 text-glow">Library</span></h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">21 essential nursing mnemonics — assessment tools, pharmacology, emergency protocols, and clinical frameworks. Click any card to expand.</p>
        </div>

        <div className="flex flex-col gap-3 mb-6 animate-slide-up stagger-2">
          <div className="flex items-center gap-2 glass border border-blue-900/30 rounded-xl px-4 py-3">
            <svg className="w-4 h-4 text-blue-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search mnemonics..." className="flex-1 bg-transparent outline-none text-white placeholder-slate-700 text-sm" />
            {search && <button onClick={() => setSearch("")} className="text-slate-700 hover:text-slate-500 text-lg">x</button>}
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...MNEMONIC_CATEGORIES].map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all font-mono ${category === c ? "bg-blue-700/20 border-blue-600/40 text-blue-300" : "border-blue-900/25 text-slate-600 hover:border-blue-800/40 hover:text-slate-400"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-slide-up stagger-3">
          {filtered.map((m, i) => (
            <div key={i} onClick={() => setExpanded(expanded === i ? null : i)}
              className={`glass border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${expanded === i ? "border-blue-600/40 glow-blue md:col-span-2" : "border-blue-900/20 hover:border-blue-800/40"}`}>
              <div className="px-5 py-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-blue-400 text-sm bg-blue-900/30 border border-blue-800/40 rounded-lg px-3 py-1.5 flex-shrink-0">{m.mnemonic}</span>
                  <div>
                    <div className="text-white text-sm font-medium">{m.title}</div>
                    <div className="text-[10px] font-mono text-slate-600">{m.category}</div>
                  </div>
                </div>
                <svg className={`w-4 h-4 text-slate-600 flex-shrink-0 transition-transform duration-200 ${expanded === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {expanded === i && (
                <div className="border-t border-blue-900/20 px-5 pb-5 pt-4 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-3">Stands For</div>
                      <div className="space-y-2">
                        {m.stands_for.map((line, j) => (
                          <div key={j} className="flex gap-2">
                            <span className="text-blue-600 font-mono text-xs mt-0.5 flex-shrink-0">--</span>
                            <span className="text-sm text-slate-300 leading-relaxed">{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-3">Clinical Detail</div>
                      <p className="text-xs text-slate-400 leading-relaxed">{m.detail}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass border border-blue-900/20 rounded-xl p-10 text-center">
            <p className="text-slate-600 text-sm font-mono">No mnemonics match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
