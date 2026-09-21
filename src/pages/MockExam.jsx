import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { PAST_QUESTIONS } from "../data/pastQuestions";

const QUESTION_COUNT_OPTIONS = [30, 60, 90];
const SECONDS_PER_QUESTION = 60; // 1 minute per question, standard NMCN pacing

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function MockExam() {
  const [phase, setPhase] = useState("setup"); // setup | exam | results
  const [questionCount, setQuestionCount] = useState(60);
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const intervalRef = useRef(null);

  const maxAvailable = PAST_QUESTIONS.length;

  const startExam = () => {
    const count = Math.min(questionCount, maxAvailable);
    const picked = shuffle(PAST_QUESTIONS).slice(0, count);
    setExamQuestions(picked);
    setUserAnswers({});
    setFlagged({});
    setCurrentIndex(0);
    setTimeLeft(count * SECONDS_PER_QUESTION);
    setPhase("exam");
  };

  const finishExam = useCallback(() => {
    clearInterval(intervalRef.current);
    setPhase("results");
  }, []);

  useEffect(() => {
    if (phase !== "exam") return;
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          setPhase("results");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [phase]);

  const handleSubmitClick = () => {
    const unanswered = examQuestions.length - Object.keys(userAnswers).length;
    if (unanswered > 0) {
      const ok = window.confirm(`You have ${unanswered} unanswered question${unanswered !== 1 ? "s" : ""}. Submit anyway?`);
      if (!ok) return;
    }
    finishExam();
  };

  const selectAnswer = (qId, letter) => {
    setUserAnswers(prev => ({ ...prev, [qId]: letter }));
  };

  const toggleFlag = (qId) => {
    setFlagged(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // ---- Results calculations ----
  const results = useMemo(() => {
    if (phase !== "results") return null;
    let correct = 0;
    const bySubject = {};
    const byTopic = {};
    const incorrectList = [];

    examQuestions.forEach(q => {
      const given = userAnswers[q.id];
      const isCorrect = given === q.answer;
      if (isCorrect) correct++;
      else incorrectList.push({ ...q, given });

      bySubject[q.subject] ??= { correct: 0, total: 0 };
      bySubject[q.subject].total++;
      if (isCorrect) bySubject[q.subject].correct++;

      byTopic[q.topic] ??= { correct: 0, total: 0 };
      byTopic[q.topic].total++;
      if (isCorrect) byTopic[q.topic].correct++;
    });

    return {
      correct,
      total: examQuestions.length,
      percent: Math.round((correct / examQuestions.length) * 100),
      bySubject,
      byTopic,
      incorrectList,
    };
  }, [phase, examQuestions, userAnswers]);

  const resetToSetup = () => {
    setPhase("setup");
    setExamQuestions([]);
    setUserAnswers({});
    setFlagged({});
  };

  const scoreColor = (pct) => pct >= 80 ? "text-emerald-400" : pct >= 60 ? "text-yellow-400" : "text-red-400";
  const barColor = (pct) => pct >= 80 ? "bg-emerald-500" : pct >= 60 ? "bg-yellow-500" : "bg-red-500";

  // ================= SETUP =================
  if (phase === "setup") {
    return (
      <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
        <div className="max-w-2xl mx-auto px-4 pt-14 pb-20">
          <div className="mb-8 animate-slide-up">
            <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">
              Timed Simulation
            </div>
            <h1 className="font-display text-4xl font-bold text-white mb-3">
              Mock<br /><span className="text-blue-400 text-glow">Exam</span>
            </h1>
            <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
              A full timed simulation pulled from the NMCN past question bank. One minute per question, with a topic-by-topic score breakdown at the end.
            </p>
          </div>

          <div className="glass border border-blue-900/30 rounded-2xl p-6 animate-slide-up stagger-2">
            <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Number of Questions</p>
            <div className="flex gap-2 mb-6">
              {QUESTION_COUNT_OPTIONS.map(n => (
                <button key={n} onClick={() => setQuestionCount(n)}
                  disabled={n > maxAvailable}
                  className={`flex-1 py-3 rounded-xl text-sm font-mono border transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                    questionCount === n
                      ? "bg-blue-700/30 border-blue-600/40 text-blue-300"
                      : "border-blue-900/25 text-slate-500 hover:border-blue-700/40 hover:text-slate-300"
                  }`}>
                  {n}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-t border-blue-900/20 pt-4 mb-6">
              <span>Time allowed</span>
              <span className="text-blue-400">{formatTime(Math.min(questionCount, maxAvailable) * SECONDS_PER_QUESTION)}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-6">
              <span>Question bank size</span>
              <span>{maxAvailable} available</span>
            </div>

            <button onClick={startExam}
              className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold text-sm py-3.5 rounded-xl transition-colors">
              Start Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ================= EXAM =================
  if (phase === "exam") {
    const q = examQuestions[currentIndex];
    const answeredCount = Object.keys(userAnswers).length;
    const lowTime = timeLeft <= 60;

    return (
      <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
        <div className="max-w-3xl mx-auto px-4 pt-6 pb-24">

          {/* Sticky header: timer + progress */}
          <div className="sticky top-16 z-30 glass border border-blue-900/30 rounded-2xl px-5 py-3 mb-6 flex items-center justify-between">
            <div className="text-xs font-mono text-slate-500">
              Question <span className="text-white">{currentIndex + 1}</span> / {examQuestions.length}
              <span className="mx-2 text-slate-700">·</span>
              <span className="text-blue-400">{answeredCount} answered</span>
            </div>
            <div className={`text-sm font-mono font-bold px-3 py-1 rounded-lg border ${lowTime ? "text-red-400 border-red-700/40 bg-red-900/10 animate-pulse" : "text-blue-300 border-blue-800/40 bg-blue-900/20"}`}>
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Question card */}
          <div className="glass border border-blue-900/30 rounded-2xl overflow-hidden glow-blue animate-fade-in">
            <div className="border-b border-blue-900/20 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[10px] text-blue-700 bg-blue-900/30 border border-blue-900/40 rounded px-2 py-0.5">{q.subject}</span>
                <span className="font-mono text-[10px] text-slate-700 bg-navy-800/50 border border-blue-900/20 rounded px-2 py-0.5">{q.topic}</span>
              </div>
              <button onClick={() => toggleFlag(q.id)}
                className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-colors ${
                  flagged[q.id] ? "border-yellow-700/50 bg-yellow-900/20 text-yellow-400" : "border-blue-900/25 text-slate-600 hover:text-slate-400"
                }`}>
                {flagged[q.id] ? "Flagged" : "Flag"}
              </button>
            </div>

            <div className="p-5">
              <p className="text-white text-sm leading-relaxed mb-5">{q.question}</p>
              <div className="space-y-2">
                {q.options.map(option => {
                  const letter = option[0];
                  const selected = userAnswers[q.id] === letter;
                  return (
                    <button key={option} onClick={() => selectAnswer(q.id, letter)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-150 ${
                        selected ? "border-blue-600/50 bg-blue-800/20 text-blue-200" : "border-blue-900/25 text-slate-500 hover:border-blue-800/40 hover:text-slate-300"
                      }`}>
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Nav controls */}
          <div className="flex items-center justify-between mt-5 gap-3">
            <button onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0}
              className="text-xs text-slate-600 border border-blue-900/30 hover:border-blue-700/40 hover:text-slate-400 rounded-lg px-4 py-2.5 transition-colors font-mono disabled:opacity-30">
              Previous
            </button>
            <button onClick={() => setShowNav(s => !s)}
              className="text-xs text-slate-500 border border-blue-900/30 hover:border-blue-700/40 rounded-lg px-4 py-2.5 transition-colors font-mono">
              Question Grid
            </button>
            {currentIndex === examQuestions.length - 1 ? (
              <button onClick={handleSubmitClick}
                className="text-xs bg-emerald-700/30 border border-emerald-600/40 text-emerald-300 hover:bg-emerald-700/50 rounded-lg px-4 py-2.5 transition-colors font-mono">
                Submit Exam
              </button>
            ) : (
              <button onClick={() => setCurrentIndex(i => Math.min(examQuestions.length - 1, i + 1))}
                className="text-xs bg-blue-700/30 border border-blue-600/40 text-blue-300 hover:bg-blue-700/50 rounded-lg px-4 py-2.5 transition-colors font-mono">
                Next
              </button>
            )}
          </div>

          {/* Question grid overlay */}
          {showNav && (
            <div className="mt-5 glass border border-blue-900/30 rounded-2xl p-4 animate-fade-in">
              <div className="grid grid-cols-8 sm:grid-cols-10 gap-2 mb-3">
                {examQuestions.map((qq, i) => {
                  const isAnswered = userAnswers[qq.id] !== undefined;
                  const isFlagged = flagged[qq.id];
                  const isCurrent = i === currentIndex;
                  return (
                    <button key={qq.id} onClick={() => { setCurrentIndex(i); setShowNav(false); }}
                      className={`aspect-square rounded-lg text-[11px] font-mono border transition-all ${
                        isCurrent ? "border-blue-400 bg-blue-700/40 text-white" :
                        isFlagged ? "border-yellow-700/50 bg-yellow-900/20 text-yellow-400" :
                        isAnswered ? "border-emerald-800/40 bg-emerald-900/15 text-emerald-400" :
                        "border-blue-900/25 text-slate-600"
                      }`}>
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-4 text-[10px] font-mono text-slate-600 pt-2 border-t border-blue-900/20">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-emerald-900/40 border border-emerald-800/40 inline-block" /> Answered</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-yellow-900/40 border border-yellow-700/50 inline-block" /> Flagged</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded border border-blue-900/25 inline-block" /> Unanswered</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ================= RESULTS =================
  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-3xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-8 animate-slide-up text-center">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">
            Exam Complete
          </div>
          <div className={`text-6xl font-bold font-mono mb-2 ${scoreColor(results.percent)}`}>{results.percent}%</div>
          <p className="text-slate-500 text-sm font-mono">{results.correct} / {results.total} correct</p>
        </div>

        {/* Subject breakdown */}
        <div className="glass border border-blue-900/30 rounded-2xl p-6 mb-5 animate-slide-up stagger-2">
          <p className="text-[11px] text-slate-700 mb-4 uppercase tracking-widest font-mono">Score by Subject</p>
          <div className="space-y-3">
            {Object.entries(results.bySubject).map(([subject, s]) => {
              const pct = Math.round((s.correct / s.total) * 100);
              return (
                <div key={subject}>
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400">{subject}</span>
                    <span className={scoreColor(pct)}>{s.correct}/{s.total} · {pct}%</span>
                  </div>
                  <div className="h-1.5 bg-blue-900/30 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${barColor(pct)}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Topic breakdown */}
        <div className="glass border border-blue-900/30 rounded-2xl p-6 mb-5 animate-slide-up stagger-3">
          <p className="text-[11px] text-slate-700 mb-4 uppercase tracking-widest font-mono">Score by Topic</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {Object.entries(results.byTopic).map(([topic, s]) => {
              const pct = Math.round((s.correct / s.total) * 100);
              return (
                <div key={topic}>
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400 truncate pr-2">{topic}</span>
                    <span className={`${scoreColor(pct)} flex-shrink-0`}>{s.correct}/{s.total}</span>
                  </div>
                  <div className="h-1 bg-blue-900/30 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${barColor(pct)}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Incorrect questions review */}
        {results.incorrectList.length > 0 && (
          <div className="mb-5 animate-slide-up stagger-4">
            <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Review Incorrect Answers ({results.incorrectList.length})</p>
            <div className="space-y-4">
              {results.incorrectList.map(q => (
                <div key={q.id} className="glass border border-red-900/25 rounded-2xl overflow-hidden">
                  <div className="border-b border-blue-900/20 px-5 py-3 flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] text-blue-700 bg-blue-900/30 border border-blue-900/40 rounded px-2 py-0.5">{q.subject}</span>
                    <span className="font-mono text-[10px] text-slate-700 bg-navy-800/50 border border-blue-900/20 rounded px-2 py-0.5">{q.topic}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-white text-sm leading-relaxed mb-3">{q.question}</p>
                    <div className="flex flex-wrap gap-4 text-xs font-mono mb-3">
                      <span className="text-red-400">Your answer: {q.given || "—"}</span>
                      <span className="text-emerald-400">Correct: {q.answer}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed bg-blue-900/15 border border-blue-900/25 rounded-xl p-3">{q.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 animate-slide-up">
          <button onClick={resetToSetup}
            className="flex-1 bg-blue-700 hover:bg-blue-600 text-white font-semibold text-sm py-3.5 rounded-xl transition-colors">
            New Mock Exam
          </button>
        </div>
      </div>
    </div>
  );
}
