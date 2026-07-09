import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Search",            path: "/" },
  { label: "Body Sciences",     path: "/body" },
  { label: "Drug Reference",    path: "/drug-lookup" },
  { label: "Drug Interactions", path: "/drug-interactions" },
  { label: "Past Questions",    path: "/past-questions" },
  { label: "Exam Quiz",         path: "/quiz" },
  { label: "Flashcards",        path: "/flashcards" },
  { label: "Case Studies",      path: "/case-studies" },
  { label: "Calculators",       path: "/calculators" },
  { label: "Lab Values",        path: "/lab-values" },
  { label: "NANDA-I",           path: "/nanda" },
  { label: "Mnemonics",         path: "/mnemonics" },
  { label: "Vitals",            path: "/vitals" },
  { label: "About",             path: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-blue-900/20 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 justify-between mb-8">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-1 mb-2">
              <span className="font-display font-bold text-white">Medi</span>
              <span className="font-display font-bold text-blue-400">Search</span>
              <span className="ml-1 text-[10px] font-mono text-blue-600 border border-blue-900 rounded px-1">AI</span>
            </div>
            <p className="text-[11px] text-slate-600 font-mono mb-1">Prepared for <span className="text-slate-400">Damilare Akossou</span></p>
            <p className="text-[11px] text-slate-700 font-mono">Nursing Final Year · 2026</p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 max-w-lg">
            {FOOTER_LINKS.map(link => (
              <Link key={link.path} to={link.path} className="text-xs text-slate-600 hover:text-blue-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-blue-900/20 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-700 font-mono">
            NANDA diagnoses: Herdman et al. (2021). NANDA-I Nursing Diagnoses, 12th ed. Thieme.
          </p>
          <p className="text-[11px] text-slate-700 font-mono">Educational use only. Not a substitute for clinical judgment.</p>
        </div>
      </div>
    </footer>
  );
}
