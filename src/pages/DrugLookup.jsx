import { useState, useRef } from "react";
import { fetchDrugInfo, DRUG_CLASSES } from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultRenderer from "../components/ResultRenderer";
import DiagramCard from "../components/DiagramCard";


const COMMON_DRUGS = [
  "Metformin","Amlodipine","Lisinopril","Atorvastatin","Omeprazole",
  "Amoxicillin","Furosemide","Metoprolol","Warfarin","Insulin Glargine",
  "Morphine","Ceftriaxone","Dexamethasone","Heparin","Salbutamol",
  "Paracetamol","Diazepam","Digoxin","Metronidazole","Ciprofloxacin",
  "Artemether-Lumefantrine","Oxytocin","Magnesium Sulfate","Hydralazine",
  "Phenytoin","Haloperidol","Amitriptyline","Spironolactone","Nifedipine",
];

export default function DrugLookup() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentDrug, setCurrentDrug] = useState("");
  const resultsRef = useRef(null);


  const handleSearch = async (drug = query) => {
    const d = drug.trim();
    if (!d) return;
    setLoading(true); setError(null); setResult(null); setCurrentDrug(d);
    try {
      const data = await fetchDrugInfo(d);
      setResult(data);
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch {
      setError("Unable to retrieve drug information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-4xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-10 animate-slide-up">
          {!currentDrug && (
            <>
              <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">
                Drug Reference
              </div>
              <h1 className="font-display text-4xl font-bold text-white mb-3">
                Pharmacological<br /><span className="text-blue-400 text-glow">Monographs</span>
              </h1>
              <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
                Complete drug monographs — mechanisms, dosages, contraindications, interactions, and nursing implications for any medication.
              </p>
            </>
          )}
          {currentDrug && (
            <div className="mb-4">
              <span className="text-slate-500 text-sm">Drug monograph — </span>
              <span className="text-blue-400 font-display italic font-semibold">{currentDrug}</span>
            </div>
          )}

          <div className="flex gap-2 mt-6">
            <div className="flex-1 flex items-center gap-2 glass border border-blue-900/40 border-blue-glow rounded-xl px-4 py-3">
              <svg className="w-4 h-4 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <input type="text" value={query} onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSearch()}
                placeholder="Generic or brand name (e.g. Furosemide, Lasix)..."
                className="flex-1 bg-transparent outline-none text-white placeholder-slate-700 text-sm" />
            </div>
            <button onClick={() => handleSearch()} disabled={loading || !query.trim()}
              className="bg-blue-700 hover:bg-blue-600 disabled:opacity-30 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-colors">
              Look Up
            </button>
          </div>
        </div>

        {!currentDrug && !loading && (
          <>
            <div className="mb-8 animate-slide-up stagger-2">
              <p className="text-[11px] text-slate-700 mb-4 uppercase tracking-widest font-mono">Browse by Drug Class</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {DRUG_CLASSES.map(cls => (
                  <div key={cls.name} className="glass glass-hover border border-blue-900/20 rounded-xl p-4">
                    <div className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider font-mono">{cls.name}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cls.drugs.map(d => (
                        <button key={d} onClick={() => { setQuery(d); handleSearch(d); }}
                          className="text-[11px] px-2.5 py-1 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-600/40 hover:text-blue-300 hover:bg-blue-900/15 transition-all">
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up stagger-3">
              <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Frequently Referenced</p>
              <div className="flex flex-wrap gap-2">
                {COMMON_DRUGS.map(d => (
                  <button key={d} onClick={() => { setQuery(d); handleSearch(d); }}
                    className="text-xs px-3 py-1.5 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-700/40 hover:text-slate-300 hover:bg-blue-900/15 transition-all">
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {loading && <LoadingSpinner message="Compiling drug monograph..." />}

        {error && (
          <div className="glass border border-red-900/30 rounded-xl p-5 text-center">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {result && !loading && (
          <div ref={resultsRef} className="animate-slide-up">
            <DiagramCard query={currentDrug} />
            <div className="glass border border-blue-900/30 rounded-2xl overflow-hidden glow-blue">
              <div className="border-b border-blue-900/20 px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="font-mono text-blue-600 text-[10px] uppercase tracking-widest mb-0.5">Drug Monograph</div>
                  <div className="text-white font-display italic font-semibold">{currentDrug}</div>
                </div>
                <button onClick={() => { setResult(null); setCurrentDrug(""); setQuery(""); }}
                  className="text-xs text-slate-600 border border-blue-900/30 hover:border-blue-700/40 hover:text-slate-400 rounded-lg px-3 py-1.5 transition-colors font-mono">
                  New Search
                </button>
              </div>
              <div className="p-6"><ResultRenderer text={result} /></div>
            </div>
            <p className="text-center text-[11px] text-slate-700 font-mono mt-4">
              Verify all dosages with current BNF, MIMS, or institutional protocols before clinical application.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
