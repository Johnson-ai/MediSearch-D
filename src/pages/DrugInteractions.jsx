import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultRenderer from "../components/ResultRenderer";

const GROQ_API = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const COMMON_DRUGS = [
  "Warfarin","Aspirin","Heparin","Metformin","Insulin","Digoxin",
  "Furosemide","Amlodipine","Lisinopril","Atorvastatin","Omeprazole",
  "Ciprofloxacin","Metronidazole","Amoxicillin","Ceftriaxone",
  "Morphine","Paracetamol","Ibuprofen","Diazepam","Phenytoin",
  "Carbamazepine","Rifampicin","Fluconazole","Erythromycin","Metoprolol",
];

export default function DrugInteractions() {
  const [drugs, setDrugs] = useState(["", ""]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addDrug = () => { if (drugs.length < 5) setDrugs([...drugs, ""]); };
  const removeDrug = (i) => { if (drugs.length > 2) setDrugs(drugs.filter((_, idx) => idx !== i)); };
  const updateDrug = (i, val) => setDrugs(drugs.map((d, idx) => idx === i ? val : d));

  const handleCheck = async () => {
    const filled = drugs.filter(d => d.trim());
    if (filled.length < 2) return;
    setLoading(true); setError(null); setResult(null);
    try {
      const prompt = `You are a clinical pharmacology expert for nursing students.
Analyse drug interactions between: ${filled.join(", ")}

Provide:
## Interaction Summary
For each drug pair, state: Severity (Major / Moderate / Minor / None), Mechanism, Clinical Effect, Management

## Major Interactions (if any)
Detail any serious or contraindicated combinations

## Monitoring Requirements
What to monitor if these drugs must be co-administered

## Nursing Actions
Specific nursing interventions and patient education for these combinations

## Overall Risk Assessment
Combined risk rating and clinical recommendation

Be specific with severity ratings, timelines, and clinical values.`;

      const res = await fetch(GROQ_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
        body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "user", content: prompt }], max_tokens: 1500, temperature: 0.2 }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setResult(data.choices?.[0]?.message?.content || "");
    } catch {
      setError("Unable to check interactions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-3xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-8 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">Pharmacology Tool</div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Drug Interaction<br /><span className="text-blue-400 text-glow">Checker</span></h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">Enter 2–5 drugs to check for clinically significant interactions, severity ratings, and nursing management.</p>
        </div>

        <div className="glass border border-blue-900/30 rounded-2xl p-6 mb-6 animate-slide-up stagger-2">
          <div className="space-y-3 mb-4">
            {drugs.map((drug, i) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="flex-1 flex items-center gap-2 bg-white/[0.03] border border-blue-900/30 rounded-xl px-4 py-3">
                  <span className="font-mono text-blue-800 text-[10px] w-4 flex-shrink-0">{i + 1}</span>
                  <input type="text" value={drug} onChange={e => updateDrug(i, e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleCheck()}
                    placeholder={`Drug ${i + 1} name...`}
                    list="drug-list"
                    className="flex-1 bg-transparent outline-none text-white placeholder-slate-700 text-sm" />
                </div>
                {drugs.length > 2 && (
                  <button onClick={() => removeDrug(i)} className="text-slate-700 hover:text-red-500 transition-colors text-lg w-8 flex-shrink-0">x</button>
                )}
              </div>
            ))}
            <datalist id="drug-list">
              {COMMON_DRUGS.map(d => <option key={d} value={d} />)}
            </datalist>
          </div>

          <div className="flex gap-3">
            {drugs.length < 5 && (
              <button onClick={addDrug} className="flex-1 border border-blue-900/30 text-slate-600 hover:text-slate-400 hover:border-blue-800/40 rounded-xl py-2.5 text-xs font-mono transition-colors">
                + Add Drug
              </button>
            )}
            <button onClick={handleCheck} disabled={loading || drugs.filter(d => d.trim()).length < 2}
              className="flex-1 bg-blue-700 hover:bg-blue-600 disabled:opacity-30 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors">
              Check Interactions
            </button>
          </div>
        </div>

        {/* Quick combos */}
        {!result && !loading && (
          <div className="mb-8 animate-slide-up stagger-3">
            <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Common Combinations to Check</p>
            <div className="flex flex-wrap gap-2">
              {[["Warfarin","Aspirin"],["Metformin","Contrast dye"],["Digoxin","Furosemide"],["ACE inhibitor","Potassium"],["Heparin","Warfarin"],["Ciprofloxacin","Warfarin"],["Phenytoin","Oral contraceptive"],["Morphine","Diazepam"]].map(combo => (
                <button key={combo.join()} onClick={() => { setDrugs([...combo, ...Array(Math.max(0, drugs.length - combo.length)).fill("")]); }}
                  className="text-xs px-3 py-1.5 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-700/40 hover:text-slate-300 hover:bg-blue-900/15 transition-all">
                  {combo.join(" + ")}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && <LoadingSpinner message="Analysing drug interactions..." />}
        {error && <div className="glass border border-red-900/30 rounded-xl p-5 text-center"><p className="text-red-400 text-sm">{error}</p></div>}

        {result && !loading && (
          <div className="animate-slide-up">
            <div className="glass border border-blue-900/30 rounded-2xl overflow-hidden glow-blue">
              <div className="border-b border-blue-900/20 px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="font-mono text-blue-600 text-[10px] uppercase tracking-widest mb-0.5">Interaction Report</div>
                  <div className="text-white font-semibold text-sm">{drugs.filter(d => d.trim()).join(" + ")}</div>
                </div>
                <button onClick={() => { setResult(null); setDrugs(["",""]); }}
                  className="text-xs text-slate-600 border border-blue-900/30 hover:border-blue-700/40 hover:text-slate-400 rounded-lg px-3 py-1.5 transition-colors font-mono">New Check</button>
              </div>
              <div className="p-6"><ResultRenderer text={result} /></div>
            </div>
            <p className="text-center text-[11px] text-slate-700 font-mono mt-4">Always verify interactions with BNF, Stockley's Drug Interactions, or a clinical pharmacist.</p>
          </div>
        )}
      </div>
    </div>
  );
}
