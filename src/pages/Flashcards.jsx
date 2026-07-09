import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const GROQ_API = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const QUICK_TOPICS = [
  "Hypertension","Diabetes Mellitus","Sepsis","Heart Failure",
  "Preeclampsia","Malaria","Furosemide","Morphine","Warfarin",
  "Krebs Cycle","Action Potential","Blood Coagulation","Nephron","Cranial Nerves",
];

export default function Flashcards() {
  const [topic, setTopic] = useState("");
  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState([]);
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const generate = async (t = topic) => {
    const tp = t.trim();
    if (!tp) return;
    setLoading(true); setError(null); setCards([]); setCurrent(0); setFlipped(false); setKnown([]); setReview([]); setDone(false);
    try {
      const prompt = `Generate 10 nursing study flashcards on: "${tp}"
Return ONLY valid JSON, no markdown:
{"cards":[{"front":"Concise question or term (max 15 words)","back":"Complete clinical answer (2-4 sentences with specific values, mechanisms, or interventions)"}]}
Cover: definitions, mechanisms, key values, drug doses, nursing interventions, clinical signs. Make them finals-level.`;
      const res = await fetch(GROQ_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${API_KEY}` },
        body: JSON.stringify({ model: "llama-3.1-8b-instant", messages: [{ role: "user", content: prompt }], max_tokens: 1000, temperature: 0.4 }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const text = data.choices?.[0]?.message?.content || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setCards(parsed.cards || []);
    } catch {
      setError("Unable to generate flashcards. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKnow = () => {
    setKnown(p => [...p, current]);
    next();
  };

  const handleReview = () => {
    setReview(p => [...p, current]);
    next();
  };

  const next = () => {
    setFlipped(false);
    setTimeout(() => {
      if (current < cards.length - 1) setCurrent(c => c + 1);
      else setDone(true);
    }, 150);
  };

  const restart = () => { setCurrent(0); setFlipped(false); setKnown([]); setReview([]); setDone(false); };
  const reviewOnly = () => { if (review.length) { setCards(review.map(i => cards[i])); setCurrent(0); setFlipped(false); setKnown([]); setReview([]); setDone(false); } };

  const pct = cards.length ? Math.round(((current) / cards.length) * 100) : 0;

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-2xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-8 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">Study Tools</div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Flashcard<br /><span className="text-blue-400 text-glow">Generator</span></h1>
          <p className="text-slate-500 text-sm leading-relaxed">Generate 10 study flashcards on any clinical topic. Tap to flip, mark as known or needs review.</p>
        </div>

        {!cards.length && !loading && (
          <>
            <div className="flex gap-2 mb-6 animate-slide-up stagger-2">
              <input type="text" value={topic} onChange={e => setTopic(e.target.value)}
                onKeyDown={e => e.key === "Enter" && generate()}
                placeholder="Enter topic (e.g. Warfarin, Nephron, Sepsis)..."
                className="flex-1 glass border border-blue-900/30 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-600/50 placeholder-slate-700" />
              <button onClick={() => generate()} disabled={!topic.trim()}
                className="bg-blue-700 hover:bg-blue-600 disabled:opacity-30 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors">
                Generate
              </button>
            </div>
            <div className="animate-slide-up stagger-3">
              <p className="text-[11px] text-slate-700 mb-3 uppercase tracking-widest font-mono">Quick Topics</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_TOPICS.map(t => (
                  <button key={t} onClick={() => { setTopic(t); generate(t); }}
                    className="text-xs px-3 py-1.5 rounded-full border border-blue-900/25 text-slate-600 hover:border-blue-700/40 hover:text-slate-300 hover:bg-blue-900/15 transition-all">
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {loading && <LoadingSpinner message="Generating flashcards..." />}
        {error && <div className="glass border border-red-900/30 rounded-xl p-5 text-center"><p className="text-red-400 text-sm">{error}</p></div>}

        {cards.length > 0 && !loading && !done && (
          <div className="animate-slide-up">
            {/* Progress */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-slate-600">{current + 1} / {cards.length}</span>
              <div className="flex gap-3 text-[11px] font-mono">
                <span className="text-emerald-500">{known.length} known</span>
                <span className="text-yellow-500">{review.length} review</span>
              </div>
            </div>
            <div className="h-1 bg-blue-900/30 rounded-full mb-6 overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${pct}%` }} />
            </div>

            {/* Card */}
            <div onClick={() => setFlipped(f => !f)}
              className={`glass border rounded-2xl p-8 min-h-52 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 mb-5 ${flipped ? "border-blue-500/50 glow-blue" : "border-blue-900/30 hover:border-blue-800/40"}`}>
              <div className="text-[10px] font-mono uppercase tracking-widest mb-4 text-blue-700">
                {flipped ? "Answer" : "Question — tap to reveal"}
              </div>
              <p className={`leading-relaxed font-display ${flipped ? "text-slate-200 text-sm" : "text-white text-base font-semibold"}`}>
                {flipped ? cards[current].back : cards[current].front}
              </p>
            </div>

            {/* Actions */}
            {flipped ? (
              <div className="grid grid-cols-2 gap-3">
                <button onClick={handleReview} className="border border-yellow-700/40 bg-yellow-900/10 text-yellow-400 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-yellow-900/20">
                  Needs Review
                </button>
                <button onClick={handleKnow} className="border border-emerald-700/40 bg-emerald-900/10 text-emerald-400 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-emerald-900/20">
                  Got It
                </button>
              </div>
            ) : (
              <button onClick={() => setFlipped(true)} className="w-full bg-blue-700/20 border border-blue-700/40 text-blue-300 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-blue-700/30">
                Reveal Answer
              </button>
            )}

            <button onClick={() => { setCards([]); setTopic(""); }} className="w-full mt-3 text-xs text-slate-700 hover:text-slate-500 font-mono transition-colors py-2">
              Start Over
            </button>
          </div>
        )}

        {done && (
          <div className="animate-slide-up">
            <div className="glass border border-blue-900/30 rounded-2xl p-8 text-center mb-4 glow-blue">
              <div className="text-[10px] font-mono text-blue-700 uppercase tracking-widest mb-4">Session Complete</div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-900/15 border border-emerald-800/30 rounded-xl p-4">
                  <div className="text-3xl font-bold font-mono text-emerald-400">{known.length}</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">Known</div>
                </div>
                <div className="bg-yellow-900/15 border border-yellow-800/30 rounded-xl p-4">
                  <div className="text-3xl font-bold font-mono text-yellow-400">{review.length}</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">Review</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {review.length > 0 && (
                  <button onClick={reviewOnly} className="w-full bg-yellow-700/20 border border-yellow-700/40 text-yellow-300 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:bg-yellow-700/30">
                    Review Missed Cards ({review.length})
                  </button>
                )}
                <button onClick={restart} className="w-full bg-blue-700/20 border border-blue-700/40 text-blue-300 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:bg-blue-700/30">
                  Restart Deck
                </button>
                <button onClick={() => { setCards([]); setTopic(""); setDone(false); }} className="text-xs text-slate-700 hover:text-slate-500 font-mono py-2 transition-colors">
                  New Topic
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
