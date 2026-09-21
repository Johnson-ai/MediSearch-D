import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const GROQ_API = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const SECTIONS = [
  {
    key: "situation",
    letter: "S",
    label: "Situation",
    hint: "Patient name/ID, age, current location, and the reason you're calling or handing off right now.",
    placeholder: "e.g. Mrs. Adeyemi, 68F, Bed 4, Ward 3. Calling because her BP has dropped to 82/50 in the last 20 minutes...",
  },
  {
    key: "background",
    letter: "B",
    label: "Background",
    hint: "Admitting diagnosis, relevant medical history, current medications, allergies, date of admission.",
    placeholder: "e.g. Admitted 3 days ago for community-acquired pneumonia. PMHx: Type 2 diabetes, hypertension. On IV ceftriaxone, allergic to penicillin...",
  },
  {
    key: "assessment",
    letter: "A",
    label: "Assessment",
    hint: "Current vital signs, what you're seeing clinically, your working impression of what's going on.",
    placeholder: "e.g. HR 118, RR 26, SpO2 91% on room air, temp 38.9°C, patient diaphoretic and confused. Suspect sepsis secondary to pneumonia...",
  },
  {
    key: "recommendation",
    letter: "R",
    label: "Recommendation",
    hint: "What you want done, how urgently, and any specific orders or follow-up you're requesting.",
    placeholder: "e.g. Requesting immediate physician review, would like blood cultures and lactate drawn, consider fluid bolus and O2...",
  },
];

function buildRawText(fields) {
  const now = new Date().toLocaleString();
  return SECTIONS.map(s => `${s.letter} — ${s.label.toUpperCase()}\n${fields[s.key]?.trim() || "(not provided)"}`).join("\n\n");
}

export default function SBARBuilder() {
  const [fields, setFields] = useState({ situation: "", background: "", assessment: "", recommendation: "" });
  const [output, setOutput] = useState(null);
  const [polishing, setPolishing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const update = (key, value) => setFields(prev => ({ ...prev, [key]: value }));

  const hasContent = Object.values(fields).some(v => v.trim());

  const generate = () => {
    setOutput(buildRawText(fields));
    setError(null);
  };

  const polishWithAI = async () => {
    setPolishing(true);
    setError(null);
    try {
      const raw = buildRawText(fields);
      const prompt = `You are a senior nurse helping tidy up a handoff report into clean, professional SBAR format for a real clinical handoff.

Rewrite the following into a clear, concise, professional SBAR report. Keep every clinical fact and number exactly as given — do not invent or omit any clinical detail. Just improve clarity, grammar, and professional phrasing. Keep the S/B/A/R headers.

${raw}`;

      const res = await fetch(GROQ_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 700,
          temperature: 0.3,
        }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setOutput(data.choices?.[0]?.message?.content || buildRawText(fields));
    } catch {
      setError("Couldn't reach the AI polish service. Your plain handoff is still available below.");
      setOutput(buildRawText(fields));
    } finally {
      setPolishing(false);
    }
  };

  const copyToClipboard = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Couldn't copy automatically — select and copy the text manually.");
    }
  };

  const clearAll = () => {
    setFields({ situation: "", background: "", assessment: "", recommendation: "" });
    setOutput(null);
    setError(null);
  };

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-3xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-8 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">
            Clinical Communication
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">
            SBAR<br /><span className="text-blue-400 text-glow">Handoff Builder</span>
          </h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Turn rough notes into a clear, structured Situation-Background-Assessment-Recommendation handoff — for ward handovers, doctor calls, or exam practice.
          </p>
        </div>

        <div className="space-y-4 mb-6 animate-slide-up stagger-2">
          {SECTIONS.map(s => (
            <div key={s.key} className="glass border border-blue-900/25 rounded-2xl overflow-hidden">
              <div className="border-b border-blue-900/20 px-5 py-3 flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-900/40 border border-blue-800/40 flex items-center justify-center text-xs font-mono font-bold text-blue-400">
                  {s.letter}
                </span>
                <div>
                  <div className="text-white text-sm font-semibold">{s.label}</div>
                  <div className="text-[11px] text-slate-600 leading-relaxed mt-0.5">{s.hint}</div>
                </div>
              </div>
              <div className="p-4">
                <textarea
                  value={fields[s.key]}
                  onChange={e => update(s.key, e.target.value)}
                  rows={3}
                  placeholder={s.placeholder}
                  className="w-full glass border border-blue-900/30 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-600/50 placeholder-slate-700 resize-none"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-8 animate-slide-up stagger-3">
          <button onClick={generate} disabled={!hasContent}
            className="bg-blue-700 hover:bg-blue-600 disabled:opacity-30 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors">
            Generate Handoff
          </button>
          <button onClick={polishWithAI} disabled={!hasContent || polishing}
            className="bg-blue-900/40 hover:bg-blue-800/50 disabled:opacity-30 border border-blue-800/40 text-blue-300 text-sm px-5 py-3 rounded-xl transition-colors font-mono">
            {polishing ? "Polishing..." : "Generate + AI Polish"}
          </button>
          {hasContent && (
            <button onClick={clearAll}
              className="text-sm text-slate-600 border border-blue-900/30 hover:border-blue-700/40 hover:text-slate-400 rounded-xl px-5 py-3 transition-colors font-mono">
              Clear All
            </button>
          )}
        </div>

        {polishing && <LoadingSpinner message="Polishing your handoff..." />}

        {error && (
          <div className="glass border border-red-900/30 rounded-xl p-4 text-center mb-6">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {output && !polishing && (
          <div className="glass border border-blue-900/30 rounded-2xl overflow-hidden glow-blue animate-slide-up">
            <div className="border-b border-blue-900/20 px-6 py-4 flex items-center justify-between">
              <div className="text-white font-semibold text-sm">Handoff Report</div>
              <button onClick={copyToClipboard}
                className="text-xs font-mono px-3 py-1.5 rounded-lg border border-blue-800/40 text-blue-300 hover:bg-blue-900/20 transition-colors">
                {copied ? "Copied" : "Copy Text"}
              </button>
            </div>
            <div className="p-6">
              <pre className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">{output}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
