import { useState } from "react";
import { fetchQuizQuestions, CLINICAL_SEARCHES, BODY_SEARCHES } from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";

const ALL_TOPICS = [...CLINICAL_SEARCHES.slice(0, 10), ...BODY_SEARCHES.slice(0, 8),
  "Drug calculations","IV fluid therapy","Wound care","Infection control",
  "Vital signs interpretation","ECG interpretation","Blood transfusion","Shock management"];

export default function Quiz() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleGenerate = async (t = topic) => {
    const tp = t.trim();
    if (!tp) return;
    setLoading(true); setError(null); setQuestions([]); setAnswers({}); setSubmitted(false); setScore(0);
    try {
      const data = await fetchQuizQuestions(tp);
      setQuestions(data.questions || []);
    } catch {
      setError("Unable to generate questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (qIndex, option) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIndex]: option[0] }));
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach((q, i) => { if (answers[i] === q.answer) s++; });
    setScore(s); setSubmitted(true);
  };

  const getOptionClass = (qIndex, option) => {
    const letter = option[0];
    const isSelected = answers[qIndex] === letter;
    const isCorrect = questions[qIndex]?.answer === letter;
    if (!submitted) return isSelected
      ? "border-blue-600/60 bg-blue-800/20 text-blue-200"
      : "border-blue-900/25 text-slate-500 hover:border-blue-800/40 hover:text-slate-300";
    if (isCorrect) return "border-emerald-700/50 bg-emerald-900/15 text-emerald-300";
    if (isSelected && !isCorrect) return "border-red-700/40 bg-red-900/10 text-red-400";
    return "border-blue-900/15 text-slate-700";
  };

  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;
  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-3xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-10 animate-slide-up">
          {!questions.length && !loading && (
            <>
              <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">
                Exam Preparation
              </div>
              <h1 className="font-display text-4xl font-bold text-white mb-3">
                Clinical MCQ<br /><span className="text-blue-400 text-glow">Generator</span>
              </h1>
              <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
                Generate five multiple-choice questions on any clinical topic. Designed to simulate the level and format of final-year nursing examinations.
              </p>
            </>
          )}

          <div className="flex gap-2 mt-6">
            <div className="flex-1 flex items-center gap-2 glass border border-blue-900/40 border-blue-glow rounded-xl px-4 py-3">
              <svg className="w-4 h-4 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <input type="text" value={topic} onChange={e => setTopic(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleGenerate()}
                placeholder="Enter topic (e.g. Hypertension, Krebs cycle, Drug calculations)..."
                className="flex-1 bg-transparent outline-none text-white placeholder-slate-700 text-sm" />
            </div>
            <button onClick={() => handleGenerate()} disabled={loading || !topic.trim()}
              className="bg-blue-700 hover:bg-blue-600 disabled:opacity-30 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-colors">
              Generate
            </button>
          </div>
        </div>

        {!questions.length && !loading && (
          <div className="mb-8 animate-slide-up stagger-2">
            <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Quick Topics</p>
            <div className="flex flex-wrap gap-2">
              {ALL_TOPICS.map(s => (
                <button key={s} onClick={() => { setTopic(s); handleGenerate(s); }}
                  className="text-xs px-3 py-1.5 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-700/40 hover:text-slate-300 hover:bg-blue-900/15 transition-all">
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && <LoadingSpinner message="Generating examination questions..." />}

        {error && (
          <div className="glass border border-red-900/30 rounded-xl p-5 text-center">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {submitted && (
          <div className={`mb-6 glass rounded-2xl p-6 border animate-slide-up ${pct >= 80 ? "border-emerald-800/40" : pct >= 60 ? "border-yellow-800/40" : "border-red-800/40"}`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-end gap-2 mb-1">
                  <span className={`text-4xl font-bold font-mono ${pct >= 80 ? "text-emerald-400" : pct >= 60 ? "text-yellow-400" : "text-red-400"}`}>
                    {score}/{questions.length}
                  </span>
                  <span className="text-slate-600 text-sm font-mono mb-1">{pct}%</span>
                </div>
                <div className="text-slate-400 text-sm">
                  {pct === 100 ? "Perfect. Damilare Akossou is ready." :
                   pct >= 80 ? "Strong result. Review explanations below." :
                   pct >= 60 ? "Passing standard. Focus on the missed questions." :
                   "Review this topic and attempt again."}
                </div>
              </div>
              <button onClick={() => { setQuestions([]); setAnswers({}); setSubmitted(false); setTopic(""); }}
                className="text-sm border border-blue-900/40 text-slate-500 hover:text-white hover:border-blue-600/50 px-4 py-2 rounded-lg transition-colors font-mono">
                New Quiz
              </button>
            </div>
            <div className="mt-4 h-1.5 bg-blue-900/30 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-700 ${pct >= 80 ? "bg-emerald-500" : pct >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                style={{ width: `${pct}%` }} />
            </div>
          </div>
        )}

        {questions.length > 0 && !loading && (
          <div className="space-y-5 animate-slide-up">
            {questions.map((q, qIndex) => (
              <div key={qIndex} className="glass border border-blue-900/25 rounded-2xl overflow-hidden">
                <div className="border-b border-blue-900/20 px-5 py-4 flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/40 border border-blue-800/40 flex items-center justify-center text-xs font-mono text-blue-500 mt-0.5">
                    {qIndex + 1}
                  </span>
                  <p className="text-white text-sm leading-relaxed">{q.question}</p>
                </div>
                <div className="p-4 space-y-2">
                  {q.options.map(option => (
                    <button key={option} onClick={() => handleAnswer(qIndex, option)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm ${getOptionClass(qIndex, option)}`}>
                      {option}
                    </button>
                  ))}
                  {submitted && (
                    <div className="mt-3 px-4 py-3 rounded-xl bg-blue-900/15 border border-blue-900/25">
                      <p className="text-[11px] text-blue-500 font-mono uppercase tracking-wider mb-1">Explanation</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {!submitted && (
              <div className="flex justify-end pt-2">
                <button onClick={handleSubmit} disabled={!allAnswered}
                  className="bg-blue-700 hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm">
                  {allAnswered ? "Submit Answers" : `Answer all questions  (${Object.keys(answers).length}/${questions.length})`}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
