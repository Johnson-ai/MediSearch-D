import { useState, useEffect } from "react";

const PASSWORD = "damilare2026";
const STORAGE_KEY = "medisearch_access";

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved === "granted") setUnlocked(true);
  }, []);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "granted");
      setUnlocked(true);
    } else {
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => { setError(false); setShake(false); }, 1500);
    }
  };

  if (unlocked) return children;

  return (
    <div className="min-h-screen bg-[#020818] bg-grid flex items-center justify-center px-4">
      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
        .shake { animation: shake 0.4s ease; }
      `}</style>

      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-500/30 mb-5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L12 22M2 12L22 12" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="font-display font-bold text-white text-2xl">Medi</span>
            <span className="font-display font-bold text-blue-400 text-2xl">Search</span>
            <span className="ml-1 text-[11px] text-blue-500 font-mono border border-blue-800 rounded px-1.5 py-0.5">D</span>
          </div>
          <p className="text-slate-600 text-xs font-mono">Clinical Intelligence · Restricted Access</p>
        </div>

        {/* Card */}
        <div className={`glass border rounded-2xl p-7 ${shake ? "shake" : ""} ${error ? "border-red-700/40" : "border-blue-900/30"}`}>
          <div className="mb-6">
            <div className="text-white font-semibold text-sm mb-1">Enter Access Password</div>
            <div className="text-slate-600 text-xs font-mono">This platform is private.</div>
          </div>

          <div className="mb-4">
            <div className={`flex items-center gap-2 rounded-xl px-4 py-3 border transition-all duration-200 ${
              error
                ? "bg-red-900/10 border-red-700/40"
                : "bg-white/[0.03] border-blue-900/40 focus-within:border-blue-600/50"
            }`}>
              <svg className="w-4 h-4 text-blue-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input
                type={show ? "text" : "password"}
                value={input}
                onChange={e => { setInput(e.target.value); setError(false); }}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                placeholder="Password"
                autoFocus
                className="flex-1 bg-transparent outline-none text-white placeholder-slate-700 text-sm tracking-widest"
              />
              <button
                onClick={() => setShow(!show)}
                className="text-slate-700 hover:text-slate-500 transition-colors text-xs font-mono"
              >
                {show ? "hide" : "show"}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-xs font-mono mt-2 ml-1">Incorrect password.</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="w-full bg-blue-700 hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors text-sm"
          >
            Access MediSearch
          </button>
        </div>

        <p className="text-center text-slate-800 text-[11px] font-mono mt-6">
          Prepared for Abigael Akossou · Nursing Final Year 2026
        </p>
      </div>
    </div>
  );
}
