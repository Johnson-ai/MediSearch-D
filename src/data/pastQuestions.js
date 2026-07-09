export const PAST_QUESTIONS = [
  // ─── MEDICAL-SURGICAL NURSING ───────────────────────────────────────────────
  {
    id: 1, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN 2023",
    question: "A patient with heart failure is prescribed Furosemide 40mg IV. Which assessment finding requires the nurse to withhold the medication and notify the physician?",
    options: ["A. Urine output of 60ml/hour", "B. Serum potassium of 2.8 mEq/L", "C. Blood pressure of 140/90 mmHg", "D. Heart rate of 88 beats/minute"],
    answer: "B",
    explanation: "Furosemide is a loop diuretic that causes potassium wasting. A serum potassium of 2.8 mEq/L represents hypokalaemia (normal: 3.5–5.0 mEq/L). Administering Furosemide in this state risks worsening hypokalaemia, predisposing the patient to life-threatening cardiac arrhythmias. The medication should be withheld."
  },
  {
    id: 2, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN 2022",
    question: "A patient is admitted with suspected myocardial infarction. Which serum cardiac marker is MOST specific for myocardial necrosis?",
    options: ["A. CK-MB", "B. Myoglobin", "C. Troponin I", "D. LDH"],
    answer: "C",
    explanation: "Troponin I (and Troponin T) are the most cardiac-specific markers for myocardial necrosis. They begin rising 3–6 hours after injury, peak at 14–24 hours, and remain elevated for 7–10 days. CK-MB is less specific as it can be elevated in skeletal muscle injury. Myoglobin rises earliest but lacks cardiac specificity."
  },
  {
    id: 3, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN 2023",
    question: "A nurse is caring for a patient on mechanical ventilation. The high-pressure alarm suddenly sounds. What is the PRIORITY nursing action?",
    options: ["A. Suction the airway immediately", "B. Increase the FiO2 setting", "C. Assess the patient and check for causes of obstruction", "D. Call the physician immediately"],
    answer: "C",
    explanation: "The priority is always to assess the patient first. High-pressure alarms indicate increased resistance in the circuit — causes include secretion accumulation, patient biting the tube, bronchospasm, or kinked tubing. Systematic assessment identifies the cause before intervention. Suctioning may be required but should follow assessment, not precede it."
  },
  {
    id: 4, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN 2021",
    question: "Which position is MOST appropriate for a patient experiencing an acute asthma attack?",
    options: ["A. Supine with legs elevated", "B. High Fowler's position (sitting upright)", "C. Left lateral position", "D. Prone position"],
    answer: "B",
    explanation: "High Fowler's position (sitting upright at 90 degrees) maximises diaphragmatic excursion and lung expansion, reduces the work of breathing, and decreases venous return to the heart — all of which reduce respiratory distress. The supine position increases dyspnoea by causing upward pressure on the diaphragm."
  },
  {
    id: 5, subject: "Medical-Surgical Nursing", topic: "Renal",
    year: "NMCN 2022",
    question: "A patient with chronic kidney disease has a serum potassium of 6.2 mEq/L. The nurse should FIRST:",
    options: ["A. Administer Calcium Gluconate IV as prescribed", "B. Place the patient on a cardiac monitor", "C. Restrict dietary potassium intake", "D. Administer Sodium Bicarbonate as prescribed"],
    answer: "B",
    explanation: "Hyperkalaemia (K+ >5.5 mEq/L) poses immediate risk of fatal cardiac arrhythmias including ventricular fibrillation. The priority nursing action is to place the patient on a continuous cardiac monitor to detect ECG changes (peaked T waves, widened QRS, sine wave pattern). Calcium gluconate stabilises the myocardium but requires a physician order — the monitoring must occur first."
  },
  {
    id: 6, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN 2023",
    question: "A patient who suffered a stroke presents with inability to speak but appears to understand spoken commands. This deficit is classified as:",
    options: ["A. Global aphasia", "B. Wernicke's (receptive) aphasia", "C. Broca's (expressive) aphasia", "D. Dysarthria"],
    answer: "C",
    explanation: "Broca's (expressive/motor) aphasia results from damage to Broca's area in the dominant frontal lobe. The patient understands language but cannot express thoughts verbally. Wernicke's aphasia involves fluent but meaningless speech with impaired comprehension. Global aphasia affects both expression and comprehension. Dysarthria is a motor speech problem, not a language disorder."
  },

  // ─── PHARMACOLOGY ──────────────────────────────────────────────────────────
  {
    id: 7, subject: "Pharmacology", topic: "Drug Calculations",
    year: "NMCN 2023",
    question: "A physician orders Ampicillin 500mg IV every 6 hours. The available vial contains 1g in 10ml after reconstitution. How many millilitres should the nurse administer per dose?",
    options: ["A. 2.5 ml", "B. 5 ml", "C. 7.5 ml", "D. 10 ml"],
    answer: "B",
    explanation: "Using the formula: Volume to administer = (Desired dose ÷ Available dose) × Volume available. = (500mg ÷ 1000mg) × 10ml = 0.5 × 10 = 5 ml. The nurse should administer 5 ml per dose."
  },
  {
    id: 8, subject: "Pharmacology", topic: "Drug Calculations",
    year: "NMCN 2022",
    question: "A patient is prescribed an IV infusion of 1 litre of Normal Saline over 8 hours. The IV set delivers 20 drops per ml. What is the correct drip rate in drops per minute?",
    options: ["A. 20 drops/min", "B. 42 drops/min", "C. 35 drops/min", "D. 25 drops/min"],
    answer: "B",
    explanation: "Formula: Drip rate = (Volume in ml × Drop factor) ÷ Time in minutes. = (1000ml × 20) ÷ (8 × 60) = 20,000 ÷ 480 = 41.67 ≈ 42 drops/minute."
  },
  {
    id: 9, subject: "Pharmacology", topic: "Antibiotics",
    year: "NMCN 2021",
    question: "Before administering Penicillin to a patient, the nurse notes a documented allergy to Amoxicillin. What is the MOST appropriate nursing action?",
    options: ["A. Administer the Penicillin as prescribed — allergies are drug-specific", "B. Withhold the medication and notify the physician — cross-reactivity risk", "C. Administer half the dose and monitor for reaction", "D. Pre-medicate with antihistamine and proceed"],
    answer: "B",
    explanation: "Amoxicillin is a penicillin-class antibiotic. There is a well-established cross-reactivity between penicillins (due to the shared beta-lactam ring structure). A patient allergic to Amoxicillin has a significant risk of allergic reaction, including anaphylaxis, to Penicillin. The medication must be withheld and the prescriber notified to consider an alternative."
  },
  {
    id: 10, subject: "Pharmacology", topic: "Cardiovascular Drugs",
    year: "NMCN 2023",
    question: "A patient receiving Digoxin reports nausea, blurred vision, and seeing yellow-green halos around lights. The nurse should FIRST:",
    options: ["A. Reassure the patient these are expected side effects", "B. Check the apical pulse for one full minute before the next dose", "C. Withhold the medication and check serum Digoxin level and electrolytes", "D. Administer an antiemetic and continue the medication"],
    answer: "C",
    explanation: "These are classic signs of Digoxin toxicity — nausea, visual disturbances (yellow-green halos, blurred vision) and anorexia. Therapeutic range is 0.5–2.0 ng/ml. Hypokalaemia potentiates toxicity. The nurse must withhold the dose immediately, obtain a serum Digoxin level and electrolytes (especially K+), and notify the physician. Continuing the medication risks fatal arrhythmia."
  },

  // ─── MATERNAL & CHILD HEALTH ───────────────────────────────────────────────
  {
    id: 11, subject: "Maternal & Child Health", topic: "Obstetrics",
    year: "NMCN 2023",
    question: "A primigravida at 38 weeks gestation presents with blood pressure of 158/106 mmHg, proteinuria (3+), and severe headache. This presentation is consistent with:",
    options: ["A. Gestational hypertension", "B. Chronic hypertension", "C. Severe preeclampsia", "D. HELLP syndrome"],
    answer: "C",
    explanation: "Severe preeclampsia is diagnosed when BP ≥160/110 mmHg (or ≥140/90 on two occasions) after 20 weeks with proteinuria (≥300mg/24h or 2+ on dipstick) AND severe features — severe headache, visual disturbances, epigastric pain, or thrombocytopaenia. Gestational hypertension lacks proteinuria. HELLP syndrome presents with haemolysis, elevated liver enzymes, and low platelets."
  },
  {
    id: 12, subject: "Maternal & Child Health", topic: "Obstetrics",
    year: "NMCN 2022",
    question: "Magnesium Sulphate is administered to a preeclamptic patient. The nurse observes loss of patellar reflexes and respiratory rate of 10 breaths/minute. What is the IMMEDIATE intervention?",
    options: ["A. Slow the infusion rate and continue monitoring", "B. Stop the infusion and administer Calcium Gluconate 1g IV", "C. Administer an additional bolus of Magnesium Sulphate", "D. Position the patient in left lateral position and increase oxygen"],
    answer: "B",
    explanation: "Loss of patellar reflex (absent DTRs) and respiratory rate <12/min are signs of Magnesium toxicity. The therapeutic range for seizure prophylaxis is 4–7 mEq/L; toxicity occurs above this. The antidote is Calcium Gluconate 1g (10ml of 10% solution) IV over 3 minutes, which competitively antagonises magnesium at the neuromuscular junction. The infusion must be stopped immediately."
  },
  {
    id: 13, subject: "Maternal & Child Health", topic: "Neonatal Care",
    year: "NMCN 2023",
    question: "A neonate is born with Apgar scores of 4 at 1 minute and 6 at 5 minutes. What does this indicate?",
    options: ["A. Normal transition to extrauterine life", "B. Moderate depression requiring stimulation and supplemental oxygen", "C. Severe depression requiring immediate resuscitation", "D. Mild depression, no intervention needed"],
    answer: "B",
    explanation: "Apgar scores are rated 0–10. A score of 7–10 is normal; 4–6 indicates moderate depression — the newborn requires stimulation, repositioning, and supplemental oxygen. A score of 0–3 indicates severe depression requiring immediate resuscitation including positive pressure ventilation. The improvement from 4 to 6 at 5 minutes suggests the neonate is responding to initial interventions."
  },
  {
    id: 14, subject: "Maternal & Child Health", topic: "Paediatrics",
    year: "NMCN 2022",
    question: "A 2-year-old child is admitted with severe dehydration from diarrhoea. Which finding indicates severe dehydration?",
    options: ["A. Slightly dry mucous membranes, normal skin turgor", "B. Sunken fontanelle, absent tears, skin turgor >2 seconds", "C. Mild thirst and reduced urine output", "D. Heart rate 100 bpm and capillary refill 1.5 seconds"],
    answer: "B",
    explanation: "Signs of severe dehydration (>10% body weight loss) include: sunken anterior fontanelle, sunken eyes, absent tears, very dry mucous membranes, skin turgor >2 seconds (poor skin tenting), weak rapid pulse, hypotension, and decreased consciousness. WHO ORS protocol requires IV rehydration at this stage. Options A, C, and D describe mild-to-moderate dehydration."
  },

  // ─── COMMUNITY HEALTH NURSING ──────────────────────────────────────────────
  {
    id: 15, subject: "Community Health Nursing", topic: "Immunisation",
    year: "NMCN 2023",
    question: "According to the Nigerian National Programme on Immunisation (NPI), at what age should a child receive the first dose of the Pentavalent vaccine (DPT-HBV-Hib)?",
    options: ["A. At birth", "B. 6 weeks of age", "C. 3 months of age", "D. 9 months of age"],
    answer: "B",
    explanation: "The Nigerian NPI schedule prescribes the first Pentavalent vaccine dose (DPT-HBV-Hib — protecting against diphtheria, pertussis, tetanus, hepatitis B, and Haemophilus influenzae type b) at 6 weeks of age. Subsequent doses follow at 10 and 14 weeks. The birth dose consists of BCG, OPV0, and Hepatitis B0."
  },
  {
    id: 16, subject: "Community Health Nursing", topic: "Disease Prevention",
    year: "NMCN 2022",
    question: "A community health nurse is conducting health education on malaria prevention. Which of the following is a SECONDARY level of prevention?",
    options: ["A. Distribution of insecticide-treated bed nets", "B. Indoor residual spraying of homes", "C. Early diagnosis and treatment of malaria cases", "D. Health education on eliminating stagnant water"],
    answer: "C",
    explanation: "Secondary prevention involves early detection and prompt treatment of disease to limit severity and prevent complications — in this case, early diagnosis and treatment of malaria. Primary prevention removes the risk factor (bed nets, IRS, eliminating breeding sites, health education). Tertiary prevention focuses on rehabilitation and preventing complications in established disease."
  },
  {
    id: 17, subject: "Community Health Nursing", topic: "Epidemiology",
    year: "NMCN 2021",
    question: "During a cholera outbreak in a Nigerian community, which is the MOST effective infection control measure the nurse should prioritise?",
    options: ["A. Mass antibiotic prophylaxis for all community members", "B. Promotion of hand hygiene with soap and safe water/ORS distribution", "C. Isolation of all community members", "D. Administration of cholera vaccine to all residents"],
    answer: "B",
    explanation: "Cholera (Vibrio cholerae) is transmitted via the faecal-oral route through contaminated water and food. The most effective immediate intervention is hand hygiene promotion with soap and water and provision of safe drinking water (chlorination) plus ORS for early case management. Mass antibiotics are not recommended prophylactically. Vaccines are adjuncts in outbreak control, not first-line measures."
  },

  // ─── ANATOMY & PHYSIOLOGY ──────────────────────────────────────────────────
  {
    id: 18, subject: "Anatomy & Physiology", topic: "Cardiovascular",
    year: "NMCN 2022",
    question: "Which cardiac valve prevents backflow of blood from the aorta into the left ventricle?",
    options: ["A. Mitral valve", "B. Tricuspid valve", "C. Aortic semilunar valve", "D. Pulmonary semilunar valve"],
    answer: "C",
    explanation: "The aortic semilunar valve (aortic valve) sits at the junction between the left ventricle and the aorta. It opens during ventricular systole to allow ejection of oxygenated blood into the aorta and closes during diastole to prevent regurgitation back into the left ventricle. The mitral valve prevents backflow from the left ventricle to left atrium."
  },
  {
    id: 19, subject: "Anatomy & Physiology", topic: "Renal",
    year: "NMCN 2023",
    question: "The functional unit of the kidney responsible for urine formation is the:",
    options: ["A. Glomerulus", "B. Nephron", "C. Loop of Henle", "D. Collecting duct"],
    answer: "B",
    explanation: "The nephron is the structural and functional unit of the kidney. Each kidney contains approximately 1 million nephrons. It consists of the glomerulus (filtration), proximal convoluted tubule (reabsorption of 65% of filtrate), Loop of Henle (concentration gradient), distal convoluted tubule (fine-tuning), and collecting duct (water reabsorption under ADH). The glomerulus alone is a component of the nephron."
  },
  {
    id: 20, subject: "Anatomy & Physiology", topic: "Respiratory",
    year: "NMCN 2022",
    question: "Normal arterial blood gas values include all of the following EXCEPT:",
    options: ["A. pH 7.35–7.45", "B. PaCO2 35–45 mmHg", "C. PaO2 80–100 mmHg", "D. HCO3- 28–35 mEq/L"],
    answer: "D",
    explanation: "Normal ABG values: pH 7.35–7.45, PaCO2 35–45 mmHg (respiratory component), PaO2 80–100 mmHg, HCO3- 22–26 mEq/L (metabolic component), SaO2 95–100%. An HCO3- of 28–35 mEq/L represents metabolic alkalosis. This is a commonly tested ABG reference range question in Nigerian nursing board examinations."
  },

  // ─── MENTAL HEALTH NURSING ─────────────────────────────────────────────────
  {
    id: 21, subject: "Mental Health Nursing", topic: "Psychiatric Emergencies",
    year: "NMCN 2023",
    question: "A patient on Haloperidol develops sudden onset of muscle rigidity, hyperthermia (40.2°C), diaphoresis, and altered consciousness. The nurse should recognise this as:",
    options: ["A. Acute dystonia", "B. Neuroleptic Malignant Syndrome (NMS)", "C. Tardive dyskinesia", "D. Serotonin syndrome"],
    answer: "B",
    explanation: "Neuroleptic Malignant Syndrome (NMS) is a life-threatening emergency associated with antipsychotic medications (especially typical antipsychotics like Haloperidol). Classic features: hyperthermia, severe muscle rigidity, autonomic instability (diaphoresis, tachycardia, labile BP), and altered consciousness. Management: immediately discontinue the antipsychotic, supportive care, Dantrolene sodium, and Bromocriptine. Mortality is 10–20% if untreated."
  },
  {
    id: 22, subject: "Mental Health Nursing", topic: "Therapeutic Communication",
    year: "NMCN 2022",
    question: "A patient says: 'There is no point anymore. Everyone would be better off without me.' What is the MOST appropriate nursing response?",
    options: ["A. 'Don't say that — your family needs you.'", "B. 'Are you thinking about harming or killing yourself?'", "C. 'I understand how you feel. Things will get better.'", "D. 'Let me get the psychiatrist immediately.'"],
    answer: "B",
    explanation: "Direct questioning about suicidal ideation is the evidence-based, therapeutically appropriate response. Research consistently shows that asking directly about suicide does NOT plant the idea — it opens the conversation, allows risk assessment, and demonstrates genuine concern. Dismissive reassurance (A, C) invalidates the patient. Immediately leaving (D) abandons the patient at a critical moment. Safety assessment must come first."
  },

  // ─── FUNDAMENTALS OF NURSING ───────────────────────────────────────────────
  {
    id: 23, subject: "Fundamentals of Nursing", topic: "Infection Control",
    year: "NMCN 2023",
    question: "When performing a sterile dressing change, the nurse accidentally touches the sterile field with an ungloved hand. The CORRECT action is to:",
    options: ["A. Continue the procedure if the contact was brief", "B. Discard the sterile field and set up a new one", "C. Apply alcohol gel to the hand and continue", "D. Cover the contaminated area with a sterile gauze and continue"],
    answer: "B",
    explanation: "A sterile field that has been contaminated — regardless of duration or degree of contact — is considered contaminated and must be discarded. The sterile technique principle states that once sterility is broken, the entire field is compromised. There is no acceptable method to restore a contaminated sterile field. A new sterile setup must be prepared."
  },
  {
    id: 24, subject: "Fundamentals of Nursing", topic: "IV Therapy",
    year: "NMCN 2022",
    question: "A patient receiving IV therapy reports pain, redness, and swelling at the cannula insertion site. The infusing fluid is 0.9% Normal Saline. What is the MOST likely complication?",
    options: ["A. Infiltration", "B. Phlebitis", "C. Air embolism", "D. Fluid overload"],
    answer: "B",
    explanation: "Phlebitis is inflammation of the vein characterised by the classic triad: pain/tenderness, erythema (redness), and oedema along the vein tract, often with a palpable cord. It may also present with warmth. Infiltration involves fluid leaking into surrounding tissue — the area would be cool, pale, and swollen. Management of phlebitis: discontinue the IV, apply warm compress, document, and restart in a new site."
  },
  {
    id: 25, subject: "Fundamentals of Nursing", topic: "Vital Signs",
    year: "NMCN 2023",
    question: "When taking a manual blood pressure reading, the nurse inflates the cuff 20–30 mmHg above the point at which the radial pulse disappears, then deflates slowly. The FIRST Korotkoff sound heard represents:",
    options: ["A. Diastolic blood pressure", "B. Mean arterial pressure", "C. Systolic blood pressure", "D. Pulse pressure"],
    answer: "C",
    explanation: "Korotkoff sounds are vascular sounds heard during auscultatory blood pressure measurement. Phase I — the first clear tapping sound — represents systolic blood pressure (the point at which blood flow resumes as cuff pressure falls below systolic). Phase V — the disappearance of sounds — represents diastolic blood pressure in adults. This remains one of the most frequently tested fundamentals questions in Nigerian nursing examinations."
  },

  // ─── SURGICAL NURSING ──────────────────────────────────────────────────────
  {
    id: 26, subject: "Surgical Nursing", topic: "Post-operative Care",
    year: "NMCN 2022",
    question: "A post-operative patient 4 hours after abdominal surgery develops sudden onset sharp chest pain, tachycardia (HR 118 bpm), and dyspnoea. SpO2 is 88% on room air. The nurse should suspect:",
    options: ["A. Atelectasis", "B. Pulmonary embolism", "C. Pneumonia", "D. Cardiac tamponade"],
    answer: "B",
    explanation: "Pulmonary embolism (PE) presents classically with sudden pleuritic chest pain, dyspnoea, tachycardia, and hypoxia — especially in the post-operative period when DVT risk is elevated due to immobility, surgical trauma, and hypercoagulability (Virchow's triad). SpO2 of 88% confirms significant hypoxaemia. Immediate actions: high-flow O2, IV access, call physician, prepare for urgent CT pulmonary angiography."
  },
  {
    id: 27, subject: "Surgical Nursing", topic: "Wound Care",
    year: "NMCN 2023",
    question: "On day 3 post-operative, a nurse observes a surgical wound with edges that are well-approximated, minimal serous drainage, and no signs of infection. This wound is healing by:",
    options: ["A. Third intention (tertiary)", "B. Second intention (granulation)", "C. First intention (primary)", "D. Delayed primary closure"],
    answer: "C",
    explanation: "Healing by first intention (primary intention) occurs when wound edges are surgically approximated (sutured, stapled, or taped) with minimal tissue loss. Characteristics: clean edges, minimal scarring, low infection risk, rapid healing. Second intention healing applies to open wounds left to granulate — more scarring, longer healing. Third intention involves deliberately delayed closure of contaminated wounds."
  },

  // ─── NUTRITION ─────────────────────────────────────────────────────────────
  {
    id: 28, subject: "Nutrition", topic: "Clinical Nutrition",
    year: "NMCN 2022",
    question: "A patient with end-stage renal disease (ESRD) on haemodialysis should have which dietary modifications?",
    options: ["A. High protein, high potassium, high phosphate", "B. Low protein, low potassium, low phosphate, fluid restriction", "C. High protein, low sodium only", "D. Unrestricted diet — haemodialysis compensates for all excesses"],
    answer: "B",
    explanation: "ESRD patients on haemodialysis require: protein restriction (0.6–0.8 g/kg/day to reduce uraemic solute load, though some centres allow higher during dialysis), potassium restriction (avoid bananas, oranges, tomatoes) to prevent hyperkalaemia, phosphate restriction (avoid dairy, nuts, colas) to prevent renal osteodystrophy, and strict fluid restriction (500–750ml/day plus urine output) to prevent fluid overload between dialysis sessions."
  },

  // ─── ETHICS & PROFESSIONAL PRACTICE ───────────────────────────────────────
  {
    id: 29, subject: "Ethics & Professional Practice", topic: "Legal & Ethical Issues",
    year: "NMCN 2023",
    question: "A competent adult patient refuses a blood transfusion on religious grounds despite being told it is life-saving. The nurse should:",
    options: ["A. Administer the transfusion — saving life overrides personal beliefs", "B. Obtain a court order to administer the transfusion", "C. Respect the patient's decision and document the refusal thoroughly", "D. Ask the family to convince the patient to accept treatment"],
    answer: "C",
    explanation: "Patient autonomy is a fundamental ethical and legal principle. A competent adult has the absolute right to refuse any medical treatment, including life-saving treatment, provided they have been fully informed of the consequences. The nurse's role is to ensure the patient has received complete information, confirm the patient understands the implications, respect the informed refusal, document comprehensively, and continue to provide alternative comfort care."
  },
  {
    id: 30, subject: "Ethics & Professional Practice", topic: "NMCN Regulations",
    year: "NMCN 2023",
    question: "Under Nigerian law, the body responsible for the regulation and control of nursing and midwifery practice in Nigeria is:",
    options: ["A. Federal Ministry of Health", "B. Nigerian Medical Association (NMA)", "C. Nursing and Midwifery Council of Nigeria (NMCN)", "D. National Health Insurance Scheme (NHIS)"],
    answer: "C",
    explanation: "The Nursing and Midwifery Council of Nigeria (NMCN) was established by Decree No. 89 of 1979 (now Cap N143 Laws of the Federation of Nigeria 2004). It is the statutory body mandated to regulate nursing and midwifery education, practice, and conduct in Nigeria. It sets standards, conducts licensing examinations, registers practitioners, and has powers to investigate and sanction professional misconduct."
  },
];

export const SUBJECTS = [...new Set(PAST_QUESTIONS.map(q => q.subject))];
export const YEARS = [...new Set(PAST_QUESTIONS.map(q => q.year))].sort().reverse();
export const TOPICS = [...new Set(PAST_QUESTIONS.map(q => q.topic))];
