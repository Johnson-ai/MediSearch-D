export const MNEMONICS = [
  // ── NURSING PROCESS ─────────────────────────────────────────────────────────
  { mnemonic: "ADPIE", title: "Nursing Process", category: "Nursing Process",
    stands_for: ["A — Assessment", "D — Diagnosis", "P — Planning", "I — Implementation", "E — Evaluation"],
    detail: "The five steps of the nursing process. Assessment: collect subjective and objective data. Diagnosis: identify NANDA nursing diagnoses. Planning: set SMART goals and outcomes. Implementation: carry out nursing interventions. Evaluation: measure outcomes against goals." },

  { mnemonic: "SBAR", title: "Clinical Handover", category: "Communication",
    stands_for: ["S — Situation (what is happening now)", "B — Background (relevant history)", "A — Assessment (what you think is wrong)", "R — Recommendation (what you need)"],
    detail: "Standardised communication tool for handover and escalation. Situation: 'I am calling about Mr. X in bed 4 — his BP has dropped to 80/50.' Background: 'He is post-op day 1 after abdominal surgery, known hypertension.' Assessment: 'I think he may be haemorrhaging.' Recommendation: 'I need you to review him urgently.'" },

  { mnemonic: "OLDCART", title: "Pain/Symptom History", category: "Assessment",
    stands_for: ["O — Onset (when did it start?)", "L — Location (where?)", "D — Duration (how long?)", "C — Character (what does it feel like?)", "A — Aggravating/Alleviating factors", "R — Radiation (does it spread?)", "T — Timing (constant or intermittent?)"],
    detail: "Comprehensive symptom assessment tool. Use for any presenting complaint — pain, dyspnoea, nausea, etc. Character includes descriptors: sharp, dull, burning, crushing, squeezing, stabbing." },

  { mnemonic: "SAMPLE", title: "Medical History", category: "Assessment",
    stands_for: ["S — Signs and Symptoms", "A — Allergies", "M — Medications (current)", "P — Past medical history", "L — Last oral intake", "E — Events leading to presentation"],
    detail: "Rapid history-taking framework, especially in emergency settings. Particularly useful for A&E triage and pre-operative assessment." },

  { mnemonic: "ABC", title: "Emergency Priorities", category: "Emergency",
    stands_for: ["A — Airway (patent? obstructed?)", "B — Breathing (rate, effort, SpO2)", "C — Circulation (pulse, BP, perfusion, bleeding)"],
    detail: "Primary survey in any emergency. Always address in order — an airway problem kills faster than a breathing problem, which kills faster than a circulation problem. In trauma: add D (Disability — GCS, pupils) and E (Exposure — full body assessment)." },

  { mnemonic: "ABCDE", title: "Primary Survey", category: "Emergency",
    stands_for: ["A — Airway + cervical spine", "B — Breathing + ventilation", "C — Circulation + haemorrhage control", "D — Disability (neurological — GCS, pupils, BM)", "E — Exposure + environment (undress, temperature)"],
    detail: "Systematic primary survey used in all critically ill patients. Life-threatening conditions identified and treated at each step before moving on. Used in ATLS, ALS, and general emergency nursing practice." },

  { mnemonic: "FAST", title: "Stroke Recognition", category: "Emergency",
    stands_for: ["F — Face drooping (asymmetrical smile?)", "A — Arm weakness (can they raise both arms?)", "S — Speech difficulty (slurred or confused?)", "T — Time to call emergency services"],
    detail: "Public and clinical stroke recognition tool. Any one positive finding warrants immediate emergency response. Time is brain — every minute of ischaemic stroke destroys 1.9 million neurons. Door-to-needle target: <60 minutes for thrombolysis." },

  { mnemonic: "RICE", title: "Soft Tissue Injury", category: "Musculoskeletal",
    stands_for: ["R — Rest (immobilise the affected part)", "I — Ice (apply for 20 minutes every 2 hours)", "C — Compression (elastic bandage)", "E — Elevation (above heart level)"],
    detail: "First aid management for sprains, strains, and minor soft tissue injuries. Reduces oedema, pain, and inflammation. Effective within first 48–72 hours of injury." },

  // ── PHARMACOLOGY ────────────────────────────────────────────────────────────
  { mnemonic: "ADME", title: "Pharmacokinetics", category: "Pharmacology",
    stands_for: ["A — Absorption (how drug enters bloodstream)", "D — Distribution (how drug spreads through body)", "M — Metabolism (how drug is broken down — mainly liver)", "E — Excretion (how drug leaves body — mainly kidneys)"],
    detail: "The four pharmacokinetic processes every drug undergoes. Factors affecting absorption: route, drug formulation, GI motility, food. Distribution affected by: protein binding, lipid solubility, blood-brain barrier. Metabolism: first-pass effect, CYP450 enzymes. Excretion: renal clearance, half-life." },

  { mnemonic: "5 RIGHTS", title: "Medication Administration", category: "Pharmacology",
    stands_for: ["1 — Right Patient (check ID band + 2 identifiers)", "2 — Right Drug (generic + brand name)", "3 — Right Dose (calculate independently)", "4 — Right Route (oral, IV, IM, SC, topical)", "5 — Right Time (frequency, timing relative to food)"],
    detail: "Extended to 9 rights in some institutions: + Right Documentation, Right Reason, Right Response, Right to Refuse. Check all 5 rights at preparation AND at bedside. Never administer a drug you did not prepare yourself." },

  { mnemonic: "AVOID GASES", title: "Aspirin Contraindications", category: "Pharmacology",
    stands_for: ["A — Age <16 (Reye's syndrome risk)", "V — Vitamin K deficiency / coagulopathy", "O — Open wounds / active bleeding", "I — Ibuprofen allergy (NSAID cross-reactivity)", "D — Duodenal ulcer / GI bleed history", "G — Gout (high-dose can precipitate)", "A — Asthma (aspirin-sensitive)", "S — Surgery within 7 days", "E — End-stage renal failure", "S — Severe hepatic failure"],
    detail: "Comprehensive contraindication memory aid for aspirin/NSAIDs. Aspirin is one of the most commonly prescribed drugs — its contraindications are frequently tested in nursing examinations." },

  // ── CARDIAC ─────────────────────────────────────────────────────────────────
  { mnemonic: "MONA", title: "Acute MI Management", category: "Cardiovascular",
    stands_for: ["M — Morphine (pain relief, reduces preload — if needed)", "O — Oxygen (only if SpO2 <94%)", "N — Nitrates (GTN sublingual for pain relief)", "A — Aspirin 300mg (antiplatelet — stat)"],
    detail: "Initial pharmacological management of suspected acute MI. Note: Oxygen is now only given if SpO2 <94% — routine high-flow O2 is no longer recommended (AVOID trial). Always give Aspirin 300mg stat unless contraindicated. Add P2Y12 inhibitor (Clopidogrel/Ticagrelor) and arrange urgent PCI." },

  { mnemonic: "HEART FAILURE", title: "Heart Failure Features", category: "Cardiovascular",
    stands_for: ["H — Haemoptysis", "E — Elevated JVP", "A — Ankle oedema", "R — Respiratory distress (dyspnoea, orthopnoea)", "T — Tachycardia", "F — Fatigue", "A — Ascites", "I — Increased weight (fluid)", "L — Lung crackles (bibasal)", "U — Urine output reduced", "R — Reduced exercise tolerance", "E — Ejection fraction reduced"],
    detail: "Comprehensive features of congestive heart failure. Distinguish left heart failure (pulmonary oedema, orthopnoea, PND) from right heart failure (peripheral oedema, raised JVP, hepatomegaly, ascites). Bi-ventricular failure shows features of both." },

  // ── RESPIRATORY ─────────────────────────────────────────────────────────────
  { mnemonic: "ROME", title: "ABG Interpretation", category: "Respiratory",
    stands_for: ["R — Respiratory Opposite (pH up = CO2 down, pH down = CO2 up)", "O — Metabolic Equal (pH up = HCO3 up, pH down = HCO3 down)", "M — Metabolic", "E — Equal"],
    detail: "ABG interpretation rule: In respiratory disorders, pH and PaCO2 move in OPPOSITE directions. In metabolic disorders, pH and HCO3 move in the SAME (EQUAL) direction. pH <7.35 = acidosis, pH >7.45 = alkalosis. PaCO2 35–45 mmHg, HCO3 22–26 mmol/L." },

  { mnemonic: "TICLS", title: "Paediatric Assessment Triangle", category: "Paediatrics",
    stands_for: ["T — Tone (muscle tone — limp or active?)", "I — Interactiveness (alert? responsive to parent?)", "C — Consolability (can parent soothe the child?)", "L — Look/Gaze (fixing and following? glazed?)", "S — Speech/Cry (strong cry? weak? hoarse?)"],
    detail: "Rapid visual assessment of a child's general appearance — the first component of the Paediatric Assessment Triangle (PAT). Performed in the first 30 seconds without touching the child. Abnormal TICLS indicates serious illness." },

  // ── OBSTETRICS ──────────────────────────────────────────────────────────────
  { mnemonic: "HELLP", title: "HELLP Syndrome", category: "Obstetrics",
    stands_for: ["H — Haemolysis", "E — Elevated Liver enzymes", "L — Low", "P — Platelets"],
    detail: "A severe complication of preeclampsia. Diagnostic criteria: haemolysis (abnormal blood film, LDH >600 U/L), elevated liver enzymes (AST >70 U/L), thrombocytopaenia (platelets <100 ×10⁹/L). Management: magnesium sulphate seizure prophylaxis, antihypertensives, expedite delivery." },

  { mnemonic: "APGAR", title: "Neonatal Assessment", category: "Obstetrics",
    stands_for: ["A — Appearance (skin colour)", "P — Pulse (heart rate)", "G — Grimace (reflex irritability)", "A — Activity (muscle tone)", "R — Respiration"],
    detail: "Each component scored 0–2, total 0–10. Score 7–10: normal. Score 4–6: moderate depression — stimulation, supplemental O2. Score 0–3: severe depression — immediate resuscitation. Assessed at 1 and 5 minutes after birth." },

  // ── FLUID BALANCE ───────────────────────────────────────────────────────────
  { mnemonic: "ICED TEA", title: "Causes of Hyponatraemia", category: "Renal",
    stands_for: ["I — Iatrogenic (excess hypotonic IV fluids)", "C — Cardiac failure", "E — Endocrine (hypothyroidism, Addison's)", "D — Drugs (diuretics, SSRIs, carbamazepine)", "T — Tumour (SIADH — malignancy)", "E — Excess water intake (psychogenic polydipsia)", "A — Advanced renal failure"],
    detail: "Causes of dilutional hyponatraemia (Na <135 mmol/L). SIADH is the most common cause in hospitalised patients. Symptoms: headache, nausea, confusion, seizures (Na <125). Correct slowly — rapid correction risks osmotic demyelination syndrome." },

  // ── INFECTION CONTROL ───────────────────────────────────────────────────────
  { mnemonic: "CHAINS", title: "Chain of Infection", category: "Infection Control",
    stands_for: ["C — Causative agent (pathogen)", "H — Host (susceptible person)", "A — Agent reservoir (where pathogen lives)", "I — Ingress (portal of entry)", "N — Number of portals of exit", "S — Spread (mode of transmission)"],
    detail: "Breaking any link in the chain of infection prevents disease spread. Nursing interventions target: causative agent (antibiotics), reservoir (source isolation), exit/entry (PPE, wound care), transmission (hand hygiene, droplet precautions), host (vaccination, nutrition)." },

  { mnemonic: "WET HANDS SAVE LIVES", title: "Hand Hygiene Moments", category: "Infection Control",
    stands_for: ["1 — Before patient contact", "2 — Before aseptic procedure", "3 — After body fluid exposure risk", "4 — After patient contact", "5 — After contact with patient surroundings"],
    detail: "WHO 5 Moments for Hand Hygiene. Soap and water required when hands are visibly soiled or after caring for C. difficile patients. Alcohol gel (at least 60%) effective for most pathogens. Each wash: minimum 20 seconds covering all surfaces." },

  // ── PAIN ────────────────────────────────────────────────────────────────────
  { mnemonic: "WHO ANALGESIC LADDER", title: "Pain Management Steps", category: "Pharmacology",
    stands_for: ["Step 1 — Mild pain: Non-opioid (Paracetamol ± NSAID)", "Step 2 — Moderate pain: Weak opioid (Codeine, Tramadol) ± non-opioid", "Step 3 — Severe pain: Strong opioid (Morphine, Oxycodone) ± non-opioid"],
    detail: "WHO three-step analgesic ladder. Principle: start at appropriate step, titrate up if inadequate relief. Adjuvants (antidepressants, anticonvulsants, steroids) can be added at any step. Reassess pain regularly using validated scale (NRS, VAS, Wong-Baker FACES for children)." },
];

export const MNEMONIC_CATEGORIES = [...new Set(MNEMONICS.map(m => m.category))];
