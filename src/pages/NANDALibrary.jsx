import { useState, useMemo } from "react";
import { NANDA_DIAGNOSES, NANDA_DOMAINS, NANDA_SOURCE } from "../data/nandaDiagnoses";

export default function NANDALibrary() {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => NANDA_DIAGNOSES.filter(d => {
    if (domain !== "All" && d.domain !== domain) return false;
    if (search && !d.label.toLowerCase().includes(search.toLowerCase()) &&
        !d.code.includes(search) &&
        !d.defining_characteristics.some(c => c.toLowerCase().includes(search.toLowerCase()))) return false;
    return true;
  }), [search, domain]);

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-4xl mx-auto px-4 pt-14 pb-20">

        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">Nursing Diagnoses</div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">NANDA-I<br /><span className="text-blue-400 text-glow">Diagnosis Library</span></h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed mb-4">
            27 core NANDA-I nursing diagnoses with definitions, related factors, and defining characteristics. Searchable by label, code, or characteristic.
          </p>
          {/* Source citation */}
          <div className="glass border border-blue-900/30 rounded-xl px-4 py-3 inline-block">
            <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-1">Source</div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">{NANDA_SOURCE.citation}</p>
            <p className="text-[10px] text-slate-600 font-mono mt-1">ISBN {NANDA_SOURCE.isbn} · {NANDA_SOURCE.edition}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 mb-6 animate-slide-up stagger-2">
          <div className="flex items-center gap-2 glass border border-blue-900/30 rounded-xl px-4 py-3">
            <svg className="w-4 h-4 text-blue-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by label, NANDA code, or defining characteristic..."
              className="flex-1 bg-transparent outline-none text-white placeholder-slate-700 text-sm" />
            {search && <button onClick={() => setSearch("")} className="text-slate-700 hover:text-slate-500 text-lg">x</button>}
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...NANDA_DOMAINS].map(d => (
              <button key={d} onClick={() => setDomain(d)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all font-mono ${domain === d ? "bg-blue-700/20 border-blue-600/40 text-blue-300" : "border-blue-900/25 text-slate-600 hover:border-blue-800/40 hover:text-slate-400"}`}>
                {d}
              </button>
            ))}
          </div>
          <div className="text-[11px] font-mono text-slate-700">{filtered.length} diagnoses shown</div>
        </div>

        {/* NANDA Format reminder */}
        <div className="glass border border-blue-900/25 rounded-xl px-4 py-3 mb-6 animate-slide-up stagger-3">
          <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-2">NANDA-I Diagnostic Statement Format</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="text-white font-semibold">[Nursing Diagnosis]</span>
            <span className="text-blue-500"> related to </span>
            <span className="text-white font-semibold">[Related Factors/Aetiology]</span>
            <span className="text-blue-500"> as evidenced by </span>
            <span className="text-white font-semibold">[Defining Characteristics/Cues]</span>
          </p>
          <p className="text-[10px] text-slate-600 font-mono mt-2">Example: Acute pain related to surgical incision as evidenced by patient reports pain 8/10, guarding behaviour, and diaphoresis.</p>
        </div>

        {/* Diagnoses list */}
        <div className="space-y-2 animate-slide-up stagger-4">
          {filtered.map((d, i) => (
            <div key={d.code} onClick={() => setExpanded(expanded === i ? null : i)}
              className={`glass border rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 ${expanded === i ? "border-blue-600/40 glow-blue" : "border-blue-900/20 hover:border-blue-800/40"}`}>
              <div className="px-5 py-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="font-mono text-[10px] text-blue-600 bg-blue-900/30 border border-blue-900/40 rounded px-2 py-1 flex-shrink-0">{d.code}</span>
                  <div className="min-w-0">
                    <div className="text-white text-sm font-medium capitalize">{d.label}</div>
                    <div className="text-[10px] text-slate-600 font-mono">{d.domain}</div>
                  </div>
                </div>
                <svg className={`w-4 h-4 text-slate-600 flex-shrink-0 transition-transform duration-200 ${expanded === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {expanded === i && (
                <div className="border-t border-blue-900/20 px-5 pb-5 pt-4 animate-fade-in space-y-4">
                  <div>
                    <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-2">Definition</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{d.definition}</p>
                  </div>

                  {d.related_factors.length > 0 && (
                    <div>
                      <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-2">Related Factors (r/t)</div>
                      <div className="flex flex-wrap gap-1.5">
                        {d.related_factors.map((rf, j) => (
                          <span key={j} className="text-[11px] px-2.5 py-1 rounded-full bg-blue-900/20 border border-blue-900/30 text-slate-400">{rf}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {d.defining_characteristics.length > 0 && (
                    <div>
                      <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-2">Defining Characteristics (AEB)</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {d.defining_characteristics.map((dc, j) => (
                          <div key={j} className="flex gap-2 items-start">
                            <span className="text-blue-700 font-mono text-xs mt-0.5 flex-shrink-0">--</span>
                            <span className="text-xs text-slate-400">{dc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {d.defining_characteristics.length === 0 && (
                    <div className="text-[11px] text-slate-700 font-mono italic">Risk diagnosis — no defining characteristics (no evidence needed; susceptibility is the diagnosis)</div>
                  )}

                  {/* Example statement */}
                  <div className="bg-blue-900/15 border border-blue-900/30 rounded-xl p-3">
                    <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-1">Example Diagnostic Statement</div>
                    <p className="text-xs text-slate-400 italic leading-relaxed">
                      <span className="text-blue-300 capitalize not-italic font-medium">{d.label}</span>
                      <span className="text-slate-500"> related to </span>
                      <span className="text-slate-300">{d.related_factors[0] || "[related factor]"}</span>
                      {d.defining_characteristics.length > 0 && <>
                        <span className="text-slate-500"> as evidenced by </span>
                        <span className="text-slate-300">{d.defining_characteristics[0]}{d.defining_characteristics[1] ? ` and ${d.defining_characteristics[1].toLowerCase()}` : ""}</span>
                      </>}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="glass border border-blue-900/20 rounded-xl p-10 text-center">
              <p className="text-slate-600 text-sm font-mono">No diagnoses match your search.</p>
            </div>
          )}
        </div>

        {/* Footer citation */}
        <div className="mt-10 glass border border-blue-900/20 rounded-xl p-5 animate-slide-up">
          <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-2">Full Citation</div>
          <p className="text-xs text-slate-500 leading-relaxed">{NANDA_SOURCE.citation}</p>
          <p className="text-[10px] text-slate-700 font-mono mt-2">
            Content adapted for educational use. All nursing diagnoses are copyright NANDA International.
            For complete diagnoses including all NOC and NIC linkages, refer to the full textbook.
          </p>
        </div>

        <p className="text-center text-[11px] text-slate-700 font-mono mt-4">
          For clinical practice, always use the current edition of NANDA-I Nursing Diagnoses with NOC and NIC linkages.
        </p>
      </div>
    </div>
  );
}
