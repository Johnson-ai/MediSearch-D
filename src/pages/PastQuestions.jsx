import { useState, useMemo } from "react";
import { PAST_QUESTIONS, SUBJECTS, YEARS, TOPICS } from "../data/pastQuestions";

export default function PastQuestions() {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [mode, setMode] = useState("browse"); // browse | practice

  const filtered = useMemo(() => {
    return PAST_QUESTIONS.filter(q => {
      if (selectedSubject !== "All" && q.subject !== selectedSubject) return false;
      if (selectedYear !== "All" && q.year !== selectedYear) return false;
      if (selectedTopic !== "All" && q.topic !== selectedTopic) return false;
      if (searchText && !q.question.toLowerCase().includes(searchText.toLowerCase()) &&
          !q.topic.toLowerCase().includes(searchText.toLowerCase())) return false;
      return true;
    });
  }, [selectedSubject, selectedYear, selectedTopic, searchText]);

  const practiceAnswered = Object.keys(answers).length;
  const practiceCorrect = Object.entries(answers).filter(([id, ans]) => {
    const q = PAST_QUESTIONS.find(q => q.id === parseInt(id));
    return q && ans === q.answer;
  }).length;

  const handleAnswer = (id, option) => {
    if (mode === "practice" && answers[id]) return;
    setAnswers(prev => ({ ...prev, [id]: option[0] }));
    if (mode === "practice") setRevealed(prev => ({ ...prev, [id]: true }));
  };

  const toggleReveal = (id) => setRevealed(prev => ({ ...prev, [id]: !prev[id] }));

  const resetAll = () => { setAnswers({}); setRevealed({}); };

  const getOptionClass = (q, option) => {
    const letter = option[0];
    const selected = answers[q.id] === letter;
    const isCorrect = q.answer === letter;
    const isRevealed = revealed[q.id];

    if (!isRevealed && !selected) return "border-blue-900/25 text-slate-500 hover:border-blue-800/40 hover:text-slate-300";
    if (!isRevealed && selected) return "border-blue-600/50 bg-blue-800/20 text-blue-200";
    if (isCorrect) return "border-emerald-700/50 bg-emerald-900/15 text-emerald-300";
    if (selected && !isCorrect) return "border-red-700/40 bg-red-900/10 text-red-400";
    return "border-blue-900/15 text-slate-700";
  };

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-4xl mx-auto px-4 pt-14 pb-20">

        {/* Header */}
        <div className="mb-10 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">
            NMCN Past Questions
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">
            Nigerian Nursing<br /><span className="text-blue-400 text-glow">Board Questions</span>
          </h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Past examination questions from the Nursing and Midwifery Council of Nigeria (NMCN). Compiled for Damilare Akossou — Final Year 2026.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { label: "Questions", value: PAST_QUESTIONS.length },
              { label: "Subjects", value: SUBJECTS.length },
              { label: "Filtered", value: filtered.length },
              { label: "Answered", value: practiceAnswered },
            ].map(s => (
              <div key={s.label} className="glass border border-blue-900/30 rounded-xl px-4 py-2.5">
                <div className="text-lg font-bold font-mono text-white">{s.value}</div>
                <div className="text-[10px] text-slate-600 uppercase tracking-widest font-mono">{s.label}</div>
              </div>
            ))}
            {practiceAnswered > 0 && (
              <div className="glass border border-blue-900/30 rounded-xl px-4 py-2.5">
                <div className={`text-lg font-bold font-mono ${practiceCorrect/practiceAnswered >= 0.8 ? "text-emerald-400" : practiceCorrect/practiceAnswered >= 0.6 ? "text-yellow-400" : "text-red-400"}`}>
                  {Math.round((practiceCorrect/practiceAnswered)*100)}%
                </div>
                <div className="text-[10px] text-slate-600 uppercase tracking-widest font-mono">Score</div>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="glass border border-blue-900/25 rounded-2xl p-4 mb-6 animate-slide-up stagger-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {/* Search */}
            <div className="flex items-center gap-2 bg-navy-900/40 border border-blue-900/25 rounded-xl px-3 py-2.5 md:col-span-2">
              <svg className="w-3.5 h-3.5 text-blue-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)}
                placeholder="Search questions by keyword or topic..."
                className="flex-1 bg-transparent outline-none text-white placeholder-slate-700 text-sm" />
              {searchText && <button onClick={() => setSearchText("")} className="text-slate-700 hover:text-slate-500 text-lg leading-none">x</button>}
            </div>

            {/* Filters */}
            <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}
              className="bg-navy-900/40 border border-blue-900/25 rounded-xl px-3 py-2.5 text-sm text-slate-400 outline-none">
              <option value="All">All Subjects</option>
              {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)}
              className="bg-navy-900/40 border border-blue-900/25 rounded-xl px-3 py-2.5 text-sm text-slate-400 outline-none">
              <option value="All">All Years</option>
              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>

            <select value={selectedTopic} onChange={e => setSelectedTopic(e.target.value)}
              className="bg-navy-900/40 border border-blue-900/25 rounded-xl px-3 py-2.5 text-sm text-slate-400 outline-none">
              <option value="All">All Topics</option>
              {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>

            <button onClick={() => { setSelectedSubject("All"); setSelectedYear("All"); setSelectedTopic("All"); setSearchText(""); }}
              className="border border-blue-900/25 text-slate-600 hover:text-slate-400 hover:border-blue-800/40 rounded-xl px-3 py-2.5 text-sm transition-colors font-mono">
              Reset Filters
            </button>
          </div>

          {/* Mode toggle + reset */}
          <div className="flex items-center justify-between pt-3 border-t border-blue-900/20">
            <div className="flex items-center gap-1 glass border border-blue-900/25 rounded-lg p-0.5">
              {["browse", "practice"].map(m => (
                <button key={m} onClick={() => { setMode(m); resetAll(); }}
                  className={`px-4 py-1.5 rounded-md text-xs font-mono transition-all capitalize ${mode === m ? "bg-blue-700/30 text-blue-300 border border-blue-600/30" : "text-slate-600 hover:text-slate-400"}`}>
                  {m}
                </button>
              ))}
            </div>
            {practiceAnswered > 0 && (
              <button onClick={resetAll} className="text-xs text-slate-700 hover:text-slate-500 font-mono transition-colors">
                Reset Progress
              </button>
            )}
          </div>
        </div>

        {/* Mode description */}
        <div className="mb-6 text-xs text-slate-700 font-mono">
          {mode === "browse"
            ? `Browse mode — click any answer to reveal. ${filtered.length} question${filtered.length !== 1 ? "s" : ""} shown.`
            : `Practice mode — answers lock on selection. ${filtered.length} question${filtered.length !== 1 ? "s" : ""} shown.`}
        </div>

        {/* Questions */}
        {filtered.length === 0 ? (
          <div className="glass border border-blue-900/25 rounded-2xl p-10 text-center">
            <p className="text-slate-600 text-sm font-mono">No questions match the current filters.</p>
          </div>
        ) : (
          <div className="space-y-5">
            {filtered.map((q, index) => (
              <div key={q.id} className="glass border border-blue-900/25 rounded-2xl overflow-hidden animate-slide-up">
                {/* Question header */}
                <div className="border-b border-blue-900/20 px-5 py-4">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="font-mono text-[10px] text-blue-700 bg-blue-900/30 border border-blue-900/40 rounded px-2 py-0.5">{q.year}</span>
                    <span className="font-mono text-[10px] text-slate-600 bg-navy-800/50 border border-blue-900/25 rounded px-2 py-0.5">{q.subject}</span>
                    <span className="font-mono text-[10px] text-slate-700 bg-navy-800/50 border border-blue-900/20 rounded px-2 py-0.5">{q.topic}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/40 border border-blue-800/40 flex items-center justify-center text-xs font-mono text-blue-600 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-white text-sm leading-relaxed">{q.question}</p>
                  </div>
                </div>

                {/* Options */}
                <div className="p-4 space-y-2">
                  {q.options.map(option => (
                    <button key={option} onClick={() => handleAnswer(q.id, option)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm ${getOptionClass(q, option)}`}>
                      {option}
                    </button>
                  ))}

                  {/* Browse mode reveal toggle */}
                  {mode === "browse" && (
                    <div className="flex items-center justify-between pt-2">
                      <button onClick={() => toggleReveal(q.id)}
                        className="text-xs font-mono text-slate-700 hover:text-blue-500 transition-colors">
                        {revealed[q.id] ? "Hide explanation" : "Show answer & explanation"}
                      </button>
                      {answers[q.id] && (
                        <span className={`text-xs font-mono ${answers[q.id] === q.answer ? "text-emerald-500" : "text-red-500"}`}>
                          {answers[q.id] === q.answer ? "Correct" : `Incorrect — answer is ${q.answer}`}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Explanation */}
                  {revealed[q.id] && (
                    <div className="mt-2 px-4 py-4 rounded-xl bg-blue-900/15 border border-blue-900/25 animate-fade-in">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest">Correct Answer</span>
                        <span className="text-xs font-bold text-blue-400 font-mono">{q.answer}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{q.explanation}</p>
                    </div>
                  )}

                  {/* Practice mode auto-explanation */}
                  {mode === "practice" && answers[q.id] && (
                    <div className="mt-2 px-4 py-4 rounded-xl bg-blue-900/15 border border-blue-900/25 animate-fade-in">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest">Explanation</span>
                        <span className={`text-xs font-mono font-semibold ${answers[q.id] === q.answer ? "text-emerald-400" : "text-red-400"}`}>
                          {answers[q.id] === q.answer ? "Correct" : `Incorrect — answer is ${q.answer}`}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom score summary in practice mode */}
        {mode === "practice" && practiceAnswered > 0 && (
          <div className="mt-8 glass border border-blue-900/30 rounded-2xl p-6 animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-1">Running Score</div>
                <div className="text-2xl font-bold font-mono text-white">
                  {practiceCorrect}/{practiceAnswered}
                  <span className={`ml-2 text-base ${practiceCorrect/practiceAnswered >= 0.8 ? "text-emerald-400" : practiceCorrect/practiceAnswered >= 0.6 ? "text-yellow-400" : "text-red-400"}`}>
                    {Math.round((practiceCorrect/practiceAnswered)*100)}%
                  </span>
                </div>
              </div>
              <button onClick={resetAll}
                className="text-sm border border-blue-900/30 text-slate-500 hover:text-white hover:border-blue-700/40 px-4 py-2 rounded-lg transition-colors font-mono">
                Reset
              </button>
            </div>
            <div className="mt-3 h-1.5 bg-blue-900/30 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-500 ${practiceCorrect/practiceAnswered >= 0.8 ? "bg-emerald-500" : practiceCorrect/practiceAnswered >= 0.6 ? "bg-yellow-500" : "bg-red-500"}`}
                style={{ width: `${Math.round((practiceCorrect/practiceAnswered)*100)}%` }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
