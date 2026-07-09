import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultRenderer from "../components/ResultRenderer";

const GROQ_API = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

function VitalField({ label, value, onChange, placeholder, unit, normal }) {
  return (
    <div>
      <label className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
        {label} <span className="text-blue-800">({unit})</span>
      </label>
      <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full glass border border-blue-900/30 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-600/50 placeholder-slate-700 mb-1" />
      {normal && <div className="text-[10px] text-slate-700 font-mono ml-1">Normal: {normal}</div>}
    </div>
  );
}

export default function VitalsInterpreter() {
  const [vitals, setVitals] = useState({ temp: "", hr: "", rr: "", sbp: "", dbp: "", spo2: "", gcs: "", urine: "", pain: "" });
  const [context, setContext] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const set = (key) => (val) => setVitals(p => ({ ...p, [key]: val }));
  const hasVitals = Object.values(vitals).some(v => v.trim());

  const handleInterpret = async () => {
    if (!hasVitals) return;
    setLoading(true); setError(null); setResult(null);

    const vitalsList = [
      vitals.temp && `Temperature: ${vitals.temp}°C`,
      vitals.hr && `Heart Rate: ${vitals.hr} bpm`,
      vitals.rr && `Respiratory Rate: ${vitals.rr} breaths/min`,
      (vitals.sbp || vitals.dbp) && `Blood Pressure: ${vitals.sbp}/${vitals.dbp} mmHg`,
      vitals.spo2 && `SpO2: ${vitals.spo2}%`,
      vitals.gcs && `GCS: ${vitals.gcs}/15`,
      vitals.urine && `Urine Output: ${vitals.urine} ml/hr`,
      vitals.pain && `Pain Score: ${vitals.pain}/10`,
    ].filter(Boolean).join("\n");

    const prompt = `You are a senior clinical nurse educator. Interpret these vital signs for a final-year nursing student:

${vitalsList}
${context ? `\nClinical context: ${context}` : ""}

Provide:
## Vital Signs Assessment
For each provided vital, state: Normal/Abnormal, degree of abnormality, and clinical significance

## Overall Clinical Picture
What pattern do these vitals suggest? Are there early warning signs?

## NEWS2 Score Estimate
Calculate approximate NEWS2 score if possible and interpret it

## Priority Nursing Concerns
List in order of clinical priority

## Immediate Nursing Actions
What should the nurse do right now? Step by step

## When to Escalate
Specific thresholds that require immediate medical review

Be specific, clinical, and practical.`;

    try {
      const res = await fetch(GROQ_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
        body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "user", content: prompt }], max_tokens: 1500, temperature: 0.2 }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setResult(data.choices?.[0]?.message?.content || "");
    } catch {
      setError("Unable to interpret vitals. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scenarios = [
    { label: "Sepsis", vals: { temp: "38.9", hr: "118", rr: "24", sbp: "88", dbp: "54", spo2: "94", gcs: "14", urine: "15", pain: "7" }},
    { label: "Heart Failure", vals: { temp: "36.8", hr: "102", rr: "26", sbp: "160", dbp: "98", spo2: "89", gcs: "15", urine: "20", pain: "4" }},
    { label: "Hypovolaemia", vals: { temp: "36.2", hr: "128", rr: "22", sbp: "90", dbp: "60", spo2: "97", gcs: "14", urine: "12", pain: "6" }},
    { label: "Normal Adult", vals: { temp: "36.8", hr: "76", rr: "16", sbp: "118", dbp: "76", spo2: "98", gcs: "15", urine: "55", pain: "2" }},
  ];

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-3xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-8 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">Clinical Assessment</div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Vital Signs<br /><span className="text-blue-400 text-glow">Interpreter</span></h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">Enter a patient's vital signs and get a full clinical interpretation with NEWS2 scoring and priority nursing actions.</p>
        </div>

        {/* Scenario presets */}
        <div className="mb-6 animate-slide-up stagger-2">
          <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Load a clinical scenario</p>
          <div className="flex flex-wrap gap-2">
            {scenarios.map(s => (
              <button key={s.label} onClick={() => setVitals(s.vals)}
                className="text-xs px-3 py-1.5 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-700/40 hover:text-slate-300 hover:bg-blue-900/15 transition-all">
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="glass border border-blue-900/30 rounded-2xl p-6 mb-6 animate-slide-up stagger-3">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <VitalField label="Temperature"      value={vitals.temp}  onChange={set("temp")}  placeholder="36.8"  unit="°C"         normal="36.0–37.5°C" />
            <VitalField label="Heart Rate"       value={vitals.hr}    onChange={set("hr")}    placeholder="72"    unit="bpm"        normal="60–100 bpm" />
            <VitalField label="Resp Rate"        value={vitals.rr}    onChange={set("rr")}    placeholder="16"    unit="breaths/min" normal="12–20 /min" />
            <VitalField label="SpO₂"             value={vitals.spo2}  onChange={set("spo2")}  placeholder="98"    unit="%"          normal="≥95%" />
            <VitalField label="Systolic BP"      value={vitals.sbp}   onChange={set("sbp")}   placeholder="120"   unit="mmHg"       normal="90–140 mmHg" />
            <VitalField label="Diastolic BP"     value={vitals.dbp}   onChange={set("dbp")}   placeholder="80"    unit="mmHg"       normal="60–90 mmHg" />
            <VitalField label="GCS"              value={vitals.gcs}   onChange={set("gcs")}   placeholder="15"    unit="/15"        normal="15" />
            <VitalField label="Urine Output"     value={vitals.urine} onChange={set("urine")} placeholder="50"    unit="ml/hr"      normal="≥0.5 ml/kg/hr" />
          </div>
          <VitalField label="Pain Score" value={vitals.pain} onChange={set("pain")} placeholder="3" unit="/10" normal="0 = no pain" />
          <div className="mt-4">
            <label className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Clinical Context (optional)</label>
            <input type="text" value={context} onChange={e => setContext(e.target.value)} placeholder="e.g. Post-operative day 1, 65-year-old female, known heart failure..."
              className="w-full glass border border-blue-900/30 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-600/50 placeholder-slate-700" />
          </div>
          <button onClick={handleInterpret} disabled={loading || !hasVitals}
            className="w-full mt-4 bg-blue-700 hover:bg-blue-600 disabled:opacity-30 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
            Interpret Vital Signs
          </button>
        </div>

        {loading && <LoadingSpinner message="Interpreting clinical picture..." />}
        {error && <div className="glass border border-red-900/30 rounded-xl p-5 text-center"><p className="text-red-400 text-sm">{error}</p></div>}

        {result && !loading && (
          <div className="animate-slide-up">
            <div className="glass border border-blue-900/30 rounded-2xl overflow-hidden glow-blue">
              <div className="border-b border-blue-900/20 px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="font-mono text-blue-600 text-[10px] uppercase tracking-widest mb-0.5">Clinical Interpretation</div>
                  <div className="text-white font-semibold text-sm">Vital Signs Assessment Report</div>
                </div>
                <button onClick={() => { setResult(null); setVitals({ temp:"",hr:"",rr:"",sbp:"",dbp:"",spo2:"",gcs:"",urine:"",pain:"" }); setContext(""); }}
                  className="text-xs text-slate-600 border border-blue-900/30 hover:border-blue-700/40 rounded-lg px-3 py-1.5 transition-colors font-mono">Reset</button>
              </div>
              <div className="p-6"><ResultRenderer text={result} /></div>
            </div>
            <p className="text-center text-[11px] text-slate-700 font-mono mt-4">For educational purposes. Clinical decisions must always involve direct patient assessment by a qualified professional.</p>
          </div>
        )}
      </div>
    </div>
  );
}
