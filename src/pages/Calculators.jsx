import { useState } from "react";

const CALC_LIST = [
  { id: "drip",    label: "IV Drip Rate"         },
  { id: "dose",    label: "Drug Dose by Weight"   },
  { id: "bmi",     label: "BMI Calculator"        },
  { id: "gfr",     label: "eGFR (CKD-EPI)"        },
  { id: "fluid",   label: "Fluid Balance"         },
  { id: "apgar",   label: "Apgar Score"           },
  { id: "map",     label: "Mean Arterial Pressure"},
  { id: "bsa",     label: "Body Surface Area"     },
];

function Result({ label, value, unit, note, color = "blue" }) {
  const colors = { blue: "border-blue-600/40 bg-blue-900/20 text-blue-300", green: "border-emerald-600/40 bg-emerald-900/20 text-emerald-300", yellow: "border-yellow-600/40 bg-yellow-900/20 text-yellow-300", red: "border-red-600/40 bg-red-900/20 text-red-300" };
  return (
    <div className={`mt-5 rounded-xl border p-5 ${colors[color]}`}>
      <div className="text-[10px] font-mono uppercase tracking-widest mb-1 opacity-70">{label}</div>
      <div className="text-3xl font-bold font-mono">{value} <span className="text-base font-normal opacity-70">{unit}</span></div>
      {note && <div className="text-xs mt-2 opacity-80 leading-relaxed">{note}</div>}
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "number", unit }) {
  return (
    <div>
      <label className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mb-1">{label}{unit && <span className="ml-1 text-blue-700">({unit})</span>}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full glass border border-blue-900/30 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-600/50 placeholder-slate-700" />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div>
      <label className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mb-1">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)}
        className="w-full glass border border-blue-900/30 rounded-xl px-4 py-3 text-white text-sm outline-none bg-navy-900/80">
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

// ── Individual Calculators ────────────────────────────────────────────────────
function DripRate() {
  const [vol, setVol] = useState(""); const [hrs, setHrs] = useState(""); const [drop, setDrop] = useState("20");
  const rate = vol && hrs ? ((parseFloat(vol) * parseFloat(drop)) / (parseFloat(hrs) * 60)).toFixed(0) : null;
  const mlhr = vol && hrs ? (parseFloat(vol) / parseFloat(hrs)).toFixed(1) : null;
  return (
    <div className="space-y-4">
      <Field label="Volume to infuse" unit="ml" value={vol} onChange={setVol} placeholder="e.g. 1000" />
      <Field label="Time" unit="hours" value={hrs} onChange={setHrs} placeholder="e.g. 8" />
      <Select label="Drop factor (drops/ml)" value={drop} onChange={setDrop} options={[{value:"10",label:"10 drops/ml (blood set)"},{value:"15",label:"15 drops/ml"},{value:"20",label:"20 drops/ml (standard)"},{value:"60",label:"60 drops/ml (micro/paediatric)"}]} />
      {rate && <><Result label="Drip Rate" value={rate} unit="drops/min" color="blue" /><Result label="Flow Rate" value={mlhr} unit="ml/hr" color="green" note="Formula: (Volume × Drop factor) ÷ (Hours × 60)" /></>}
    </div>
  );
}

function DosageCalc() {
  const [ordered, setOrdered] = useState(""); const [weight, setWeight] = useState("");
  const [available, setAvailable] = useState(""); const [avVol, setAvVol] = useState("1");
  const totalDose = ordered && weight ? (parseFloat(ordered) * parseFloat(weight)).toFixed(2) : null;
  const volume = totalDose && available ? ((parseFloat(totalDose) / parseFloat(available)) * parseFloat(avVol)).toFixed(2) : null;
  return (
    <div className="space-y-4">
      <Field label="Ordered dose" unit="mg/kg" value={ordered} onChange={setOrdered} placeholder="e.g. 5" />
      <Field label="Patient weight" unit="kg" value={weight} onChange={setWeight} placeholder="e.g. 70" />
      <Field label="Available concentration" unit="mg" value={available} onChange={setAvailable} placeholder="e.g. 500" />
      <Field label="Available volume" unit="ml" value={avVol} onChange={setAvVol} placeholder="e.g. 1" />
      {totalDose && <Result label="Total Dose Required" value={totalDose} unit="mg" color="blue" />}
      {volume && <Result label="Volume to Administer" value={volume} unit="ml" color="green" note="Formula: (Desired ÷ Available) × Volume" />}
    </div>
  );
}

function BMICalc() {
  const [weight, setWeight] = useState(""); const [height, setHeight] = useState("");
  const bmi = weight && height ? (parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2)).toFixed(1) : null;
  const category = bmi ? bmi < 18.5 ? ["Underweight", "yellow"] : bmi < 25 ? ["Normal weight", "green"] : bmi < 30 ? ["Overweight", "yellow"] : ["Obese", "red"] : null;
  return (
    <div className="space-y-4">
      <Field label="Weight" unit="kg" value={weight} onChange={setWeight} placeholder="e.g. 70" />
      <Field label="Height" unit="cm" value={height} onChange={setHeight} placeholder="e.g. 165" />
      {bmi && <Result label="BMI" value={bmi} unit="kg/m²" color={category[1]} note={`Classification: ${category[0]} — Normal range: 18.5–24.9 kg/m²`} />}
    </div>
  );
}

function GFRCalc() {
  const [creat, setCreat] = useState(""); const [age, setAge] = useState(""); const [sex, setSex] = useState("male");
  let gfr = null;
  if (creat && age) {
    const cr = parseFloat(creat) / 88.4;
    const kappa = sex === "female" ? 0.7 : 0.9;
    const alpha = sex === "female" ? -0.241 : -0.302;
    const sexFactor = sex === "female" ? 1.012 : 1;
    gfr = (142 * Math.pow(Math.min(cr / kappa, 1), alpha) * Math.pow(Math.max(cr / kappa, 1), -1.200) * Math.pow(0.9938, parseFloat(age)) * sexFactor).toFixed(1);
  }
  const stage = gfr ? gfr >= 90 ? ["G1 — Normal or high", "green"] : gfr >= 60 ? ["G2 — Mildly decreased", "green"] : gfr >= 45 ? ["G3a — Mildly-moderately decreased", "yellow"] : gfr >= 30 ? ["G3b — Moderately-severely decreased", "yellow"] : gfr >= 15 ? ["G4 — Severely decreased", "red"] : ["G5 — Kidney failure", "red"] : null;
  return (
    <div className="space-y-4">
      <Field label="Serum Creatinine" unit="μmol/L" value={creat} onChange={setCreat} placeholder="e.g. 90" />
      <Field label="Age" unit="years" value={age} onChange={setAge} placeholder="e.g. 45" />
      <Select label="Sex" value={sex} onChange={setSex} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
      {gfr && <Result label="eGFR (CKD-EPI 2021)" value={gfr} unit="ml/min/1.73m²" color={stage[1]} note={`CKD Stage: ${stage[0]}`} />}
    </div>
  );
}

function FluidBalance() {
  const [inputs, setInputs] = useState({ oral: "", iv: "", other: "" });
  const [outputs, setOutputs] = useState({ urine: "", drain: "", vomit: "", other: "" });
  const totalIn = Object.values(inputs).reduce((s, v) => s + (parseFloat(v) || 0), 0);
  const totalOut = Object.values(outputs).reduce((s, v) => s + (parseFloat(v) || 0), 0);
  const balance = totalIn - totalOut;
  const F = (label, key, obj, setObj) => (
    <Field key={key} label={label} unit="ml" value={obj[key]} onChange={v => setObj(p => ({ ...p, [key]: v }))} placeholder="0" />
  );
  return (
    <div className="space-y-4">
      <div className="text-[11px] font-mono text-blue-600 uppercase tracking-widest">Intake</div>
      {F("Oral intake", "oral", inputs, setInputs)}
      {F("IV fluids", "iv", inputs, setInputs)}
      {F("Other (NGT, etc.)", "other", inputs, setInputs)}
      <div className="text-[11px] font-mono text-blue-600 uppercase tracking-widest mt-4">Output</div>
      {F("Urine output", "urine", outputs, setOutputs)}
      {F("Drain / wound", "drain", outputs, setOutputs)}
      {F("Vomit / NG aspirate", "vomit", outputs, setOutputs)}
      {F("Other losses", "other", outputs, setOutputs)}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <Result label="Total In" value={totalIn} unit="ml" color="green" />
        <Result label="Total Out" value={totalOut} unit="ml" color="red" />
        <Result label="Balance" value={balance >= 0 ? `+${balance}` : balance} unit="ml" color={balance >= 0 ? "blue" : "yellow"} />
      </div>
    </div>
  );
}

function ApgarScore() {
  const criteria = [
    { key: "appearance", label: "Appearance (skin colour)", options: ["0 — Blue/pale all over", "1 — Blue extremities, pink body", "2 — Completely pink"] },
    { key: "pulse",      label: "Pulse (heart rate)",      options: ["0 — Absent", "1 — <100 bpm", "2 — ≥100 bpm"] },
    { key: "grimace",    label: "Grimace (reflex)",        options: ["0 — No response", "1 — Grimace", "2 — Cry/cough/sneeze"] },
    { key: "activity",   label: "Activity (muscle tone)",  options: ["0 — Limp", "1 — Some flexion", "2 — Active motion"] },
    { key: "respiration",label: "Respiration",             options: ["0 — Absent", "1 — Weak/irregular", "2 — Strong cry"] },
  ];
  const [scores, setScores] = useState({ appearance: "", pulse: "", grimace: "", activity: "", respiration: "" });
  const total = Object.values(scores).every(v => v !== "") ? Object.values(scores).reduce((s, v) => s + parseInt(v), 0) : null;
  const interp = total !== null ? total >= 7 ? ["Normal — reassure and monitor", "green"] : total >= 4 ? ["Moderate depression — stimulation and O₂", "yellow"] : ["Severe depression — immediate resuscitation", "red"] : null;
  return (
    <div className="space-y-4">
      {criteria.map(c => (
        <Select key={c.key} label={c.label} value={scores[c.key]} onChange={v => setScores(p => ({ ...p, [c.key]: v }))}
          options={[{value:"",label:"Select..."}, ...c.options.map((o,i) => ({value:String(i),label:o}))]} />
      ))}
      {total !== null && <Result label="Apgar Score" value={total} unit="/ 10" color={interp[1]} note={interp[0]} />}
    </div>
  );
}

function MAPCalc() {
  const [sys, setSys] = useState(""); const [dia, setDia] = useState("");
  const map = sys && dia ? ((parseFloat(dia) * 2 + parseFloat(sys)) / 3).toFixed(1) : null;
  const note = map ? `Normal MAP: 70–100 mmHg. ${parseFloat(map) < 65 ? "MAP <65 mmHg indicates inadequate organ perfusion — assess for shock." : parseFloat(map) > 110 ? "MAP >110 mmHg — hypertensive emergency risk." : "Adequate perfusion pressure."}` : null;
  return (
    <div className="space-y-4">
      <Field label="Systolic BP" unit="mmHg" value={sys} onChange={setSys} placeholder="e.g. 120" />
      <Field label="Diastolic BP" unit="mmHg" value={dia} onChange={setDia} placeholder="e.g. 80" />
      {map && <Result label="Mean Arterial Pressure" value={map} unit="mmHg" color={parseFloat(map) < 65 ? "red" : parseFloat(map) > 110 ? "yellow" : "green"} note={note} />}
    </div>
  );
}

function BSACalc() {
  const [weight, setWeight] = useState(""); const [height, setHeight] = useState("");
  const bsa = weight && height ? Math.sqrt((parseFloat(weight) * parseFloat(height)) / 3600).toFixed(3) : null;
  return (
    <div className="space-y-4">
      <Field label="Weight" unit="kg" value={weight} onChange={setWeight} placeholder="e.g. 70" />
      <Field label="Height" unit="cm" value={height} onChange={setHeight} placeholder="e.g. 165" />
      {bsa && <Result label="Body Surface Area (Mosteller)" value={bsa} unit="m²" color="blue" note="Used for chemotherapy dosing, cardiac index calculation, and renal function assessment. Normal adult BSA: 1.7–1.9 m²" />}
    </div>
  );
}

const CALC_COMPONENTS = { drip: DripRate, dose: DosageCalc, bmi: BMICalc, gfr: GFRCalc, fluid: FluidBalance, apgar: ApgarScore, map: MAPCalc, bsa: BSACalc };

export default function Calculators() {
  const [active, setActive] = useState("drip");
  const ActiveCalc = CALC_COMPONENTS[active];

  return (
    <div className="min-h-screen pt-16 bg-grid bg-medical-pattern">
      <div className="max-w-3xl mx-auto px-4 pt-14 pb-20">
        <div className="mb-8 animate-slide-up">
          <div className="inline-block font-mono text-[11px] text-blue-600 border border-blue-900/50 rounded-full px-3 py-1 mb-4 tracking-widest uppercase">Clinical Tools</div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">Clinical<br /><span className="text-blue-400 text-glow">Calculators</span></h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">Drug dosages, IV rates, fluid balance, Apgar scores and more. Evidence-based formulas for clinical and examination use.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 animate-slide-up stagger-2">
          {CALC_LIST.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-200 ${active === c.id ? "bg-blue-700/20 border-blue-600/40 text-blue-300" : "border-blue-900/25 text-slate-600 hover:border-blue-800/40 hover:text-slate-400"}`}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="glass border border-blue-900/30 rounded-2xl p-6 animate-slide-up stagger-3 glow-blue">
          <div className="border-b border-blue-900/20 pb-4 mb-6">
            <div className="font-mono text-blue-600 text-[10px] uppercase tracking-widest mb-0.5">Calculator</div>
            <div className="text-white font-semibold">{CALC_LIST.find(c => c.id === active)?.label}</div>
          </div>
          <ActiveCalc />
        </div>

        <p className="text-center text-[11px] text-slate-700 font-mono mt-4">Always verify calculations independently before clinical application.</p>
      </div>
    </div>
  );
}
