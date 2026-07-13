import { Link } from "react-router-dom";

const FEATURES = [
  { code: "01", title: "Clinical Disease Search", desc: "Seven structured search categories covering any pathological condition — overview, symptoms, diagnosis, treatment, drugs, nursing care plans, and evidence-based references." },
  { code: "02", title: "Body Sciences Module", desc: "Dedicated anatomy, physiology, biochemistry, histology, embryology, and pathophysiology search. Any body structure, metabolic pathway, or physiological mechanism." },
  { code: "03", title: "Drug Reference", desc: "Complete pharmacological monographs including mechanism of action, ADME pharmacokinetics, dosage by indication, safety profile, drug interactions, and nursing implications." },
  { code: "04", title: "MCQ Exam Generator", desc: "Generates five clinically rigorous multiple-choice questions on any topic — scored, with explanations. Mirrors the depth of final-year nursing examinations." },
  { code: "05", title: "Smart Caching", desc: "Results are cached per query and category. Switching between categories after the first search is instantaneous — no repeated API calls." },
  { code: "06", title: "Search History", desc: "Persistent search history stored in the browser. One click returns to any previously searched topic." },
];

const CLINICAL_CATS = [
  { code: "OVR", name: "Overview",         desc: "Definition, classification, epidemiology, pathophysiology, etiology" },
  { code: "SYM", name: "Symptoms & Signs", desc: "Cardinal symptoms, vital sign derangements, laboratory findings, imaging" },
  { code: "DX",  name: "Diagnosis",        desc: "Criteria, physical examination, investigations, differentials, scoring tools" },
  { code: "TX",  name: "Treatment",        desc: "Emergency management, pharmacological and non-pharmacological protocols" },
  { code: "DRG", name: "Drugs & Dosage",   desc: "All relevant drugs with dosage, contraindications, interactions, nursing notes" },
  { code: "NCP", name: "Nursing Care",     desc: "NANDA-I diagnoses, interventions, rationale, outcomes, discharge planning" },
  { code: "REF", name: "References",       desc: "International guidelines, landmark trials, textbooks, mnemonics" },
];

const BODY_CATS = [
  { code: "ANT", name: "Anatomy",         desc: "Gross structure, blood supply, nerve supply, anatomical relations, landmarks" },
  { code: "PHY", name: "Physiology",      desc: "Mechanisms, regulatory factors, normal values, clinical correlates" },
  { code: "BCH", name: "Biochemistry",    desc: "Pathways, enzymes, substrates, energy yield, drug targets" },
  { code: "HIS", name: "Histology",       desc: "Microscopic appearance, cell types, staining, electron microscopy" },
  { code: "EMB", name: "Embryology",      desc: "Germ layers, developmental timeline, teratogens, congenital anomalies" },
  { code: "PPH", name: "Pathophysiology", desc: "Mechanism of injury, compensatory responses, clinical sign correlates" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-4xl mx-auto px-4 pt-14 pb-20">

        {/* Dedication */}
        <div className="glass border border-blue-800/30 rounded-3xl p-10 md:p-14 mb-14 glow-blue-strong animate-slide-up relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="relative">
            <div className="font-mono text-[11px] text-blue-700 uppercase tracking-widest mb-6">Dedication</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Abigael<br />Akossou
            </h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mb-6">
              This platform was built specifically for Abigael Akossou, a final-year nursing student preparing for her professional qualifying examinations in 2026.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl mb-8">
              Every search category, every prompt, every drug class, and every quiz topic was selected and structured around the demands of a final-year nursing curriculum — from NANDA-I care plans to ADME pharmacokinetics to the Krebs cycle.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="glass border border-blue-900/40 rounded-xl px-4 py-3">
                <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-0.5">Prepared for</div>
                <div className="text-white font-semibold">Abigael Akossou</div>
              </div>
              <div className="glass border border-blue-900/40 rounded-xl px-4 py-3">
                <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-0.5">Year</div>
                <div className="text-white font-semibold">Nursing Finals 2026</div>
              </div>
              <div className="glass border border-blue-900/40 rounded-xl px-4 py-3">
                <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-0.5">Engine</div>
                <div className="text-white font-semibold">Ant</div>
              </div>
            </div>
          </div>
        </div>

        {/* What it covers */}
        <div className="mb-14 animate-slide-up stagger-2">
          <h2 className="font-display text-2xl font-bold text-white mb-6">What MediSearch Covers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map(f => (
              <div key={f.code} className="glass glass-hover border border-blue-900/20 rounded-xl p-5 transition-all">
                <div className="font-mono text-blue-800 text-xs mb-3">{f.code}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical search categories */}
        <div className="mb-10 animate-slide-up stagger-3">
          <h2 className="font-display text-2xl font-bold text-white mb-2">Clinical Disease Search</h2>
          <p className="text-slate-500 text-sm mb-6">Seven categories available for every pathological condition.</p>
          <div className="glass border border-blue-900/25 rounded-2xl overflow-hidden">
            {CLINICAL_CATS.map((cat, i) => (
              <div key={cat.code} className={`flex items-center gap-4 px-5 py-4 ${i < CLINICAL_CATS.length - 1 ? "border-b border-blue-900/20" : ""}`}>
                <span className="font-mono text-[11px] text-blue-600 bg-blue-900/30 border border-blue-900/40 rounded px-2 py-1 w-12 text-center flex-shrink-0">{cat.code}</span>
                <div>
                  <div className="text-white text-sm font-medium">{cat.name}</div>
                  <div className="text-slate-600 text-xs">{cat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body science categories */}
        <div className="mb-10 animate-slide-up stagger-4">
          <h2 className="font-display text-2xl font-bold text-white mb-2">Body Sciences Module</h2>
          <p className="text-slate-500 text-sm mb-6">Six categories covering the full spectrum of preclinical and basic sciences.</p>
          <div className="glass border border-blue-900/25 rounded-2xl overflow-hidden">
            {BODY_CATS.map((cat, i) => (
              <div key={cat.code} className={`flex items-center gap-4 px-5 py-4 ${i < BODY_CATS.length - 1 ? "border-b border-blue-900/20" : ""}`}>
                <span className="font-mono text-[11px] text-blue-600 bg-blue-900/30 border border-blue-900/40 rounded px-2 py-1 w-12 text-center flex-shrink-0">{cat.code}</span>
                <div>
                  <div className="text-white text-sm font-medium">{cat.name}</div>
                  <div className="text-slate-600 text-xs">{cat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to use */}
        <div className="mb-14 animate-slide-up stagger-5">
          <h2 className="font-display text-2xl font-bold text-white mb-6">How to Use</h2>
          <div className="space-y-3">
            {[
              { n: "01", t: "Clinical Search", d: "Go to the Search page. Type any disease or condition. Select a category tab to view different clinical perspectives — all results are cached so switching is instant." },
              { n: "02", t: "Body Sciences", d: "Go to Body Sciences for anatomy, physiology, biochemistry, histology, embryology, or pathophysiology. Browse by system or search directly." },
              { n: "03", t: "Drug Reference", d: "Go to Drug Reference. Search by generic or brand name. Browse by drug class. Each monograph covers the full pharmacological profile with nursing implications." },
              { n: "04", t: "Exam Quiz", d: "Go to Exam Quiz. Enter any topic. Five clinical MCQs are generated at final-year examination level. Submit to see your score, correct answers, and clinical explanations." },
            ].map(step => (
              <div key={step.n} className="flex gap-5 glass glass-hover border border-blue-900/20 rounded-xl px-5 py-4">
                <span className="font-mono text-blue-900 text-xl font-bold flex-shrink-0">{step.n}</span>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{step.t}</div>
                  <div className="text-slate-600 text-xs leading-relaxed">{step.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass border border-blue-900/20 rounded-2xl p-6 mb-10 animate-slide-up">
          <h3 className="text-slate-400 font-semibold text-sm mb-3 font-mono uppercase tracking-wider">Academic Disclaimer</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            MediSearch is an educational tool intended to support clinical learning for nursing students. All information generated by the AI is for academic and preparatory purposes only. It is not a substitute for professional clinical judgment, institutional protocols, or authoritative references including the British National Formulary, MIMS, WHO Clinical Guidelines, NICE Guidelines, or the advice of a licensed healthcare professional. Drug dosages and clinical protocols must be independently verified before any clinical application.
          </p>
        </div>

        <div className="text-center animate-slide-up">
          <Link to="/" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm">
            Begin Searching
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="text-slate-700 text-[11px] font-mono mt-5">Abigael Akossou · Nursing Final Year · 2026</p>
        </div>
      </div>
    </div>
  );
}
