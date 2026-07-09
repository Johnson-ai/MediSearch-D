import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultRenderer from "../components/ResultRenderer";

const GROQ_API = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const CASE_TOPICS = [
  "Acute MI","Septic Shock","Diabetic Ketoacidosis","Preeclampsia","Stroke",
  "Heart Failure","Pulmonary Embolism","Meningitis","Sickle Cell Crisis",
  "Asthma Attack","Hypertensive Emergency","Postpartum Haemorrhage",
  "Acute Kidney Injury","Liver Failure","Malaria Complicated",
];

const STAGES = ["presentation","assessment","diagnosis","intervention","evaluation"];

export default function CaseStudies() {
  const [topic, setTopic] = useState("");
  const [caseData, setCaseData] = useState(null);
  const [stage, setStage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateCase = async (t = topic) => {
    const tp = t.trim();
    if (!tp) return;
    setLoading(true); setError(null); setCaseData(null); setStage(0); setAnswers({}); setFeedback({});
    try {
      const prompt = `Generate a realistic clinical case study for a final-year nursing student on: "${tp}"

Return ONLY valid JSON, no markdown:
{
  "title": "Case title",
  "presentation": {
    "scenario": "Detailed patient presentation paragraph — age, sex, presenting complaint, history, relevant background",
    "vitals": "Full vital signs as a formatted string",
    "question": "What is your initial nursing assessment priority and why?"
  },
  "assessment": {
    "findings": "Additional clinical findings — physical exam, initial investigations",
    "question": "Based on these findings, what are your top 3 nursing diagnoses in NANDA format?"
  },
  "diagnosis": {
    "results": "Investigation results — bloods, imaging, ECG etc",
    "question": "What is the confirmed diagnosis and what is the pathophysiology explaining this patient's presentation?"
  },
  "intervention": {
    "orders": "Medical orders and nursing interventions required",
    "question": "List your priority nursing interventions in order, with rationale for each"
  },
  "evaluation": {
    "progress": "Patient's response after 4 hours of treatment",
    "question": "How would you evaluate the effectiveness of your interventions? What are the expected outcomes?",
    "teaching": "Key learning points from this case"
  }
}`;

      const res = await fetch(GROQ_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
        body: JSON.stringify({ model: "llama-3.3-70b-versatile", messages: [{ role: "user", content: prompt }], max_tokens: 1500, temperature: 0.5 }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const text = data.choices?.[0]?.message?.content || "";
      const clean = text.replace(/```json|```/g, "").trim();
      setCaseData(JSON.parse(clean));
    } catch {
      setError("Unable to generate case study. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getFeedback = async (stageKey, question, answer) => {
    if (!answer?.trim()) return;
    setFeedback(p => ({ ...p, [stageKey]: "loading" }));
    try {
      const prompt = `You are a senior nursing educator marking a final-year student's answer.

Question: ${question}
Student's answer: ${answer}

Provide brief, constructive feedback:
## What was correct
## What was missing or incorrect  
## Model answer (concise)
## Mark: X/10

Be encouraging but clinically accurate.`;
      const res = await fetch(GROQ_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
        body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "user", content: prompt }], max_tokens: 600, temperature: 0.3 }),
      });
      const data = await res.json();
      setFeedback(p => ({ ...p, [stageKey]: data.choices?.[0]?.message?.content || "" }));
    } catch {
      setFeedback(p => ({ ...p, [stageKey]: "Unable to get feedback." }));
    }
  };

  const stageData = caseData ? [
    { key: "presentation", label: "Presentation", data: caseData.presentation, fields: ["scenario","vitals"] },
    { key: "assessment",   label: "Assessment",   data: caseData.assessment,   fields: ["findings"] },
    { key: "diagnosis",    label: "Diagnosis",    data: caseData.diagnosis,    fields: ["results"] },
    { key: "intervention", label: "Intervention", data: caseData.intervention, fields: ["orders"] },
    { key: "evaluation",   label: "Evaluation",   data: caseData.evaluation,   fields: ["progress","teaching"] },
  ] : [];

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-3xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-8 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">Clinical Simulation</div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Clinical<br /><span className="text-blue-400 text-glow">Case Studies</span></h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">AI-generated realistic patient scenarios. Work through assessment, diagnosis, and nursing interventions step by step — with feedback on your answers.</p>
        </div>

        {!caseData && (
          <>
            <div className="flex gap-2 mb-6 animate-slide-up stagger-2">
              <input type="text" value={topic} onChange={e => setTopic(e.target.value)}
                onKeyDown={e => e.key === "Enter" && generateCase()}
                placeholder="Enter condition (e.g. Septic Shock, Preeclampsia)..."
                className="flex-1 glass border border-blue-900/30 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-600/50 placeholder-slate-700" />
              <button onClick={() => generateCase()} disabled={loading || !topic.trim()}
                className="bg-blue-700 hover:bg-blue-600 disabled:opacity-30 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors">
                Generate
              </button>
            </div>
            <div className="animate-slide-up stagger-3">
              <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Clinical Scenarios</p>
              <div className="flex flex-wrap gap-2">
                {CASE_TOPICS.map(t => (
                  <button key={t} onClick={() => { setTopic(t); generateCase(t); }}
                    className="text-xs px-3 py-1.5 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-700/40 hover:text-slate-300 hover:bg-blue-900/15 transition-all">
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {loading && <LoadingSpinner message="Generating clinical case..." />}
        {error && <div className="glass border border-red-900/30 rounded-xl p-5 text-center"><p className="text-red-400 text-sm">{error}</p></div>}

        {caseData && !loading && (
          <div className="animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-mono text-blue-600 text-[10px] uppercase tracking-widest mb-0.5">Case Study</div>
                <div className="text-white font-display italic font-semibold">{caseData.title}</div>
              </div>
              <button onClick={() => { setCaseData(null); setTopic(""); }}
                className="text-xs text-slate-600 border border-blue-900/30 hover:border-blue-700/40 rounded-lg px-3 py-1.5 transition-colors font-mono">New Case</button>
            </div>

            {/* Stage tabs */}
            <div className="flex gap-1 mb-6 glass border border-blue-900/30 rounded-xl p-1">
              {stageData.map((s, i) => (
                <button key={s.key} onClick={() => setStage(i)}
                  className={`flex-1 py-2 rounded-lg text-xs font-mono transition-all ${stage === i ? "bg-blue-700/30 text-blue-300 border border-blue-600/30" : "text-slate-600 hover:text-slate-400"}`}>
                  {i + 1}. {s.label}
                </button>
              ))}
            </div>

            {/* Current stage */}
            {(() => {
              const s = stageData[stage];
              return (
                <div className="glass border border-blue-900/30 rounded-2xl overflow-hidden glow-blue">
                  <div className="border-b border-blue-900/20 px-6 py-4">
                    <div className="font-mono text-blue-600 text-[10px] uppercase tracking-widest mb-1">Stage {stage + 1} of 5</div>
                    <div className="text-white font-semibold">{s.label}</div>
                  </div>
                  <div className="p-6 space-y-4">
                    {s.fields.map(field => (
                      s.data[field] && (
                        <div key={field}>
                          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-2">{field}</div>
                          <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{s.data[field]}</div>
                        </div>
                      )
                    ))}

                    <div className="border-t border-blue-900/20 pt-4 mt-4">
                      <div className="text-[10px] font-mono text-blue-600 uppercase tracking-widest mb-2">Your Task</div>
                      <p className="text-sm text-white mb-3 leading-relaxed">{s.data.question}</p>
                      <textarea value={answers[s.key] || ""} onChange={e => setAnswers(p => ({ ...p, [s.key]: e.target.value }))}
                        rows={4} placeholder="Type your answer here..."
                        className="w-full glass border border-blue-900/30 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-600/50 placeholder-slate-700 resize-none" />
                      <button onClick={() => getFeedback(s.key, s.data.question, answers[s.key])}
                        disabled={!answers[s.key]?.trim() || feedback[s.key] === "loading"}
                        className="mt-2 bg-blue-900/40 hover:bg-blue-800/50 disabled:opacity-30 border border-blue-800/40 text-blue-300 text-xs px-4 py-2 rounded-lg transition-colors font-mono">
                        {feedback[s.key] === "loading" ? "Getting feedback..." : "Get Feedback"}
                      </button>
                    </div>

                    {feedback[s.key] && feedback[s.key] !== "loading" && (
                      <div className="bg-blue-900/15 border border-blue-900/30 rounded-xl p-4 animate-fade-in">
                        <div className="text-[10px] font-mono text-blue-600 uppercase tracking-widest mb-3">Educator Feedback</div>
                        <ResultRenderer text={feedback[s.key]} />
                      </div>
                    )}

                    <div className="flex justify-between pt-2">
                      <button onClick={() => setStage(Math.max(0, stage - 1))} disabled={stage === 0}
                        className="text-xs text-slate-600 border border-blue-900/30 hover:border-blue-700/40 hover:text-slate-400 rounded-lg px-4 py-2 transition-colors font-mono disabled:opacity-30">
                        Previous
                      </button>
                      <button onClick={() => setStage(Math.min(stageData.length - 1, stage + 1))} disabled={stage === stageData.length - 1}
                        className="text-xs bg-blue-700/30 border border-blue-600/40 text-blue-300 hover:bg-blue-700/50 rounded-lg px-4 py-2 transition-colors font-mono disabled:opacity-30">
                        Next Stage
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
