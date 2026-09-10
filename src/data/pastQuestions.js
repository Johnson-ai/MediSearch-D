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

  // ─── RESPIRATORY DISORDERS ─────────────────────────────────────────────────
  {
    id: 31, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Aminophylline (theophylline) is prescribed for a client with acute bronchitis. A nurse administers the medication, knowing that the primary action of this medication is to:",
    options: ["A. Promote expectoration.", "B. Suppress the cough.", "C. Relax smooth muscles of the bronchial airway.", "D. Prevent infection."],
    answer: "C",
    explanation: "Aminophylline (theophylline) is a bronchodilator. Its primary action is to relax the smooth muscles of the bronchial airway, thereby dilating the bronchi and improving airflow."
  },
  {
    id: 32, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client is receiving isoetharine hydrochloride (Bronkosol) via a nebulizer. The nurse monitors the client for which side effect of this medication?",
    options: ["A. Constipation", "B. Diarrhea", "C. Bradycardia", "D. Tachycardia"],
    answer: "D",
    explanation: "Isoetharine is a beta-adrenergic bronchodilator. Stimulation of beta-1 receptors can cause cardiac side effects, most notably tachycardia."
  },
  {
    id: 33, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse teaches a client about the use of a respiratory inhaler. Which action by the client indicated a need for further teaching?",
    options: ["A. Removes the cap and shakes the inhaler well before use.", "B. Press the canister down with your finger as he breathes in.", "C. Inhales the mist and quickly exhales.", "D. Waits 1 to 2 minutes between puffs if more than one puff has been prescribed."],
    answer: "C",
    explanation: "After inhaling the mist, the client should hold their breath for about 10 seconds to allow the medication to deposit in the airways, not exhale quickly. Quick exhalation indicates a need for further teaching."
  },
  {
    id: 34, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A female client is scheduled to have a chest radiograph. Which of the following questions is of most importance to the nurse assessing this client?",
    options: ["A. \u201cIs there any possibility that you could be pregnant?\u201d", "B. \u201cAre you wearing any metal chains or jewelry?\u201d", "C. \u201cCan you hold your breath easily?\u201d", "D. \u201cAre you able to hold your arms above your head?\u201d"],
    answer: "A",
    explanation: "Radiation exposure poses a risk to a developing fetus, so ruling out pregnancy is the priority assessment before any radiographic procedure."
  },
  {
    id: 35, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client has just returned to a nursing unit following bronchoscopy. A nurse would implement which of the following nursing interventions for this client?",
    options: ["A. Encouraging additional fluids for the next 24 hours", "B. Ensuring the return of the gag reflex before offering foods or fluids", "C. Administering atropine intravenously", "D. Administering small doses of midazolam (Versed)."],
    answer: "B",
    explanation: "Local anesthesia is used during bronchoscopy, which suppresses the gag reflex. The nurse must confirm the gag reflex has returned before allowing food or fluids to prevent aspiration."
  },
  {
    id: 36, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client has an order to have radial ABG drawn. Before drawing the sample, a nurse occludes the:",
    options: ["A. Brachial and radial arteries, and then releases them and observes the circulation of the hand.", "B. Radial and ulnar arteries, releases one, evaluates the color of the hand, and repeats the process with the other artery.", "C. Radial artery and observes for color changes in the affected hand.", "D. Ulnar artery and observes for color changes in the affected hand."],
    answer: "B",
    explanation: "This describes the Allen's test, which assesses collateral circulation to the hand before a radial arterial puncture, ensuring adequate perfusion if the radial artery is compromised."
  },
  {
    id: 37, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse is assessing a client with chronic airflow limitation and notes that the client has a \u201cbarrel chest.\u201d The nurse interprets that this client has which of the following forms of chronic airflow limitation?",
    options: ["A. Chronic obstructive bronchitis", "B. Emphysema", "C. Bronchial asthma", "D. Bronchial asthma and bronchitis"],
    answer: "B",
    explanation: "A barrel chest results from chronic air trapping and hyperinflation of the lungs, which increases the anteroposterior chest diameter — a classic finding in emphysema."
  },
  {
    id: 38, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client has been taking benzonatate (Tessalon Perles) as prescribed. A nurse concludes that the medication is having the intended effect if the client experiences:",
    options: ["A. Decreased anxiety level.", "B. Increased comfort level.", "C. Reduction of N/V.", "D. Decreased frequency and intensity of cough."],
    answer: "D",
    explanation: "Benzonatate is an antitussive agent that anesthetizes stretch receptors in the respiratory tract, reducing the cough reflex. Effectiveness is measured by decreased frequency and intensity of cough."
  },
  {
    id: 39, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Which of the following would be an expected outcome for a client recovering from an upper respiratory tract infection? The client will:",
    options: ["A. Maintain a fluid intake of 800 ml every 24 hours.", "B. Experience chills only once a day.", "C. Cough productively without chest discomfort.", "D. Experience less nasal obstruction and discharge."],
    answer: "D",
    explanation: "A key sign of recovery from an upper respiratory tract infection is decreasing nasal obstruction and discharge, reflecting resolution of the inflammatory process."
  },
  {
    id: 40, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Which of the following individuals would the nurse consider to have the highest priority for receiving an influenza vaccination?",
    options: ["A. A 60-year-old man with a hiatal hernia.", "B. A 36-year-old woman with 3 children.", "C. A 50-year-old woman caring for a spouse with cancer.", "D. A 60-year-old woman with osteoarthritis."],
    answer: "C",
    explanation: "Caregivers of immunocompromised individuals are a high priority for influenza vaccination because they can transmit influenza to a vulnerable person, such as a spouse undergoing cancer treatment."
  },
  {
    id: 41, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client with allergic rhinitis asks the nurse what he should do to decrease his symptoms. Which of the following instructions would be appropriate for the nurse to give the client?",
    options: ["A. \u201cUse your nasal decongestant spray regularly to help clear your nasal passages.\u201d", "B. \u201cAsk the doctor for antibiotics. Antibiotics will help decrease the secretion.\u201d", "C. \u201cIt is important to increase your activity. A daily brisk walk will help promote drainage.\u201d", "D. \u201cKeep a diary when your symptoms occur. This can help you identify what precipitates your attacks.\u201d"],
    answer: "D",
    explanation: "Identifying and avoiding triggers is central to managing allergic rhinitis. A symptom diary helps the client recognize patterns and precipitating allergens."
  },
  {
    id: 42, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "An elderly client has been ill with the flu, experiencing headache, fever, and chills. After 3 days, she developed a cough productive of yellow sputum. The nurse auscultates her lungs and hears diffuse crackles. How would the nurse best interpret these assessment findings?",
    options: ["A. It is likely that the client is developing a secondary bacterial pneumonia.", "B. The assessment findings are consistent with influenza and are to be expected.", "C. The client is getting dehydrated and needs to increase her fluid intake to decrease secretions", "D. The client has not been taking her decongestants and bronchodilators as prescribed."],
    answer: "A",
    explanation: "A change from viral flu symptoms to productive yellow sputum and new crackles after several days suggests a secondary bacterial pneumonia, a common complication of influenza in elderly clients."
  },
  {
    id: 43, subject: "Pharmacology", topic: "Drug Calculations",
    year: "NMCN Review",
    question: "Guaifenesin 300 mg four times daily has been ordered as an expectorant. The dosage strength of the liquid is 200mg/5ml. How many mL should the nurse administer each dose?",
    options: ["A. 5.0 ml", "B. 6.5 ml", "C. 7.5 ml", "D. 9.0 ml"],
    answer: "C",
    explanation: "Using the formula: (Desired dose ÷ Available dose) × Volume = (300mg ÷ 200mg) × 5ml = 1.5 × 5 = 7.5 ml per dose."
  },
  {
    id: 44, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Pseudoephedrine (Sudafed) has been ordered as a nasal decongestant. Which of the following is a possible side effect of this drug?",
    options: ["A. Constipation", "B. Bradycardia", "C. Diplopia", "D. Restlessness"],
    answer: "D",
    explanation: "Pseudoephedrine is a sympathomimetic that stimulates the central nervous system, commonly causing restlessness, nervousness, and insomnia."
  },
  {
    id: 45, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client with COPD reports steady weight loss and being \u201ctoo tired from just breathing to eat.\u201d Which of the following nursing diagnoses would be most appropriate when planning nutritional interventions for this client?",
    options: ["A. Altered nutrition: Less than body requirements related to fatigue.", "B. Activity intolerance related to dyspnea.", "C. Weight loss related to COPD.", "D. Ineffective breathing pattern related to alveolar hypoventilation."],
    answer: "A",
    explanation: "The client's weight loss is directly linked to fatigue from the increased work of breathing, making 'Altered nutrition: Less than body requirements related to fatigue' the most appropriate nursing diagnosis for nutritional planning."
  },
  {
    id: 46, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "When developing a discharge plan to manage the care of a client with COPD, the nurse should anticipate that the client will do which of the following?",
    options: ["A. Develop infections easily.", "B. Maintain current status.", "C. Require less supplemental oxygen.", "D. Show permanent improvement."],
    answer: "A",
    explanation: "Clients with COPD have chronically compromised pulmonary defenses, making them prone to developing respiratory infections easily — an important consideration in discharge planning."
  },
  {
    id: 47, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Which of the following outcomes would be appropriate for a client with COPD who has been discharged to home? The client:",
    options: ["A. Promises to do pursed lip breathing at home.", "B. States actions to reduce pain.", "C. States that he will use oxygen via a nasal cannula at 5 L/minute.", "D. Agrees to call the physician if dyspnea on exertion increases."],
    answer: "D",
    explanation: "Recognizing worsening symptoms, such as increased dyspnea on exertion, and knowing to notify the physician is a measurable, appropriate self-management outcome for a client with COPD."
  },
  {
    id: 48, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Which of the following physical assessment findings would the nurse expect to find in a client with advanced COPD?",
    options: ["A. Increased anteroposterior chest diameter.", "B. Underdeveloped neck muscles.", "C. Collapsed neck veins.", "D. Increased chest excursions with respiration."],
    answer: "A",
    explanation: "Chronic air trapping in advanced COPD leads to hyperinflation of the lungs, producing an increased anteroposterior chest diameter, or 'barrel chest.'"
  },
  {
    id: 49, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Which of the following is the primary reason to teach pursed-lip breathing to clients with emphysema?",
    options: ["A. To promote oxygen intake.", "B. To strengthen the diaphragm.", "C. To strengthen the intercostal muscles.", "D. To promote carbon dioxide elimination."],
    answer: "D",
    explanation: "Pursed-lip breathing creates back-pressure in the airways that keeps them open longer during exhalation, allowing more complete emptying of trapped air and promoting carbon dioxide elimination."
  },
  {
    id: 50, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Which of the following is a priority goal for the client with COPD?",
    options: ["A. Maintaining functional ability.", "B. Minimizing chest pain.", "C. Increasing carbon dioxide levels in the blood.", "D. Treating infectious agents."],
    answer: "A",
    explanation: "Because COPD is a chronic, progressive disease, the priority goal of care is maintaining the client's functional ability and quality of life for as long as possible."
  },
  {
    id: 51, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client's arterial blood gas levels are as follows: pH 7.31; PaO2 80 mm Hg, PaCO2 65 mm Hg; HCO3- 36 mEq/L. Which of the following signs or symptoms would the nurse expect?",
    options: ["A. Cyanosis", "B. Flushed skin", "C. Irritability", "D. Anxiety"],
    answer: "B",
    explanation: "This ABG reflects compensated respiratory acidosis (elevated PaCO2 and HCO3- with near-normal pH). Elevated CO2 causes peripheral vasodilation, producing flushed skin."
  },
  {
    id: 52, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "When teaching a client with COPD to conserve energy, the nurse should teach the client to lift objects:",
    options: ["A. While inhaling through an open mouth.", "B. While exhaling through pursed lips.", "C. After exhaling but before inhaling.", "D. While taking a deep breath and holding it."],
    answer: "B",
    explanation: "Exhaling during exertion (such as lifting) via pursed-lip breathing prevents breath-holding and the associated increase in intrathoracic pressure, conserving energy and preventing dyspnea."
  },
  {
    id: 53, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "The nurse teaches a client with COPD to assess for s/s of right-sided heart failure. Which of the following s/s would be included in the teaching plan?",
    options: ["A. Clubbing of nail beds", "B. Hypertension", "C. Peripheral edema", "D. Increased appetite"],
    answer: "C",
    explanation: "Cor pulmonale (right-sided heart failure secondary to COPD) causes systemic venous congestion, manifesting as peripheral (dependent) edema."
  },
  {
    id: 54, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "The nurse assesses the respiratory status of a client who is experiencing an exacerbation of COPD secondary to an upper respiratory tract infection. Which of the following findings would be expected?",
    options: ["A. Normal breath sounds", "B. Prolonged inspiration", "C. Normal chest movement", "D. Coarse crackles and rhonchi"],
    answer: "D",
    explanation: "Increased secretions from an upper respiratory infection superimposed on COPD produce adventitious breath sounds such as coarse crackles and rhonchi."
  },
  {
    id: 55, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Which of the following ABG abnormalities should the nurse anticipate in a client with advanced COPD?",
    options: ["A. Increased PaCO2", "B. Increased PaO2", "C. Increased pH", "D. Increased oxygen saturation"],
    answer: "A",
    explanation: "Advanced COPD impairs alveolar gas exchange and ventilation, leading to chronic CO2 retention, reflected as an increased PaCO2."
  },
  {
    id: 56, subject: "Nutrition", topic: "Clinical Nutrition",
    year: "NMCN Review",
    question: "Which of the following diets would be most appropriate for a client with COPD?",
    options: ["A. Low fat, low cholesterol", "B. Bland, soft diet", "C. Low-Sodium diet", "D. High calorie, high-protein diet"],
    answer: "D",
    explanation: "Clients with COPD have increased metabolic demands from the work of breathing, and often experience weight loss, so a high-calorie, high-protein diet supports energy needs and prevents malnutrition."
  },
  {
    id: 57, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "The nurse is planning to teach a client with COPD how to cough effectively. Which of the following instructions should be included?",
    options: ["A. Take a deep abdominal breath, bend forward, and cough 3 to 4 times on exhalation.", "B. Lie flat on back, splint the thorax, take two deep breaths and cough.", "C. Take several rapid, shallow breaths and then cough forcefully.", "D. Assume a side-lying position, extend the arm over the head, and alternate deep breathing with coughing."],
    answer: "A",
    explanation: "Effective, controlled coughing for COPD clients involves a deep abdominal (diaphragmatic) breath, leaning forward, and coughing several times on exhalation to mobilize secretions without excessive fatigue."
  },
  {
    id: 58, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A 34-year-old woman with a history of asthma is admitted to the emergency department. The nurse notes that the client is dyspneic, with a respiratory rate of 35 breaths/minute, nasal flaring, and use of accessory muscles. Auscultation of the lung fields reveals greatly diminished breath sounds. Based on these findings, what action should the nurse take to initiate care of the client?",
    options: ["A. Initiate oxygen therapy and reassess the client in 10 minutes.", "B. Draw blood for an ABG analysis and send the client for a chest x-ray.", "C. Encourage the client to relax and breathe slowly through the mouth.", "D. Administer bronchodilators."],
    answer: "D",
    explanation: "Diminished breath sounds with severe respiratory distress signal a life-threatening asthma exacerbation with minimal air movement. Immediate bronchodilator administration is needed to open the airways."
  },
  {
    id: 59, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "The nurse would anticipate which of the following ABG results in a client experiencing a prolonged, severe asthma attack?",
    options: ["A. Decreased PaCO2, increased PaO2, and decreased pH.", "B. Increased PaCO2, decreased PaO2, and decreased pH.", "C. Increased PaCO2, increased PaO2, and increased pH.", "D. Decreased PaCO2, decreased PaO2, and increased pH."],
    answer: "B",
    explanation: "As a severe, prolonged asthma attack progresses, the client fatigues and can no longer maintain the hyperventilation that occurs early on, leading to CO2 retention, hypoxemia, and respiratory acidosis."
  },
  {
    id: 60, subject: "Pharmacology", topic: "Respiratory Drugs",
    year: "NMCN Review",
    question: "A client with acute asthma is prescribed short-term corticosteroid therapy. What is the rationale for the use of steroids in clients with asthma?",
    options: ["A. Corticosteroids promote bronchodilation.", "B. Corticosteroids act as an expectorant.", "C. Corticosteroids have an anti-inflammatory effect.", "D. Corticosteroids prevent development of respiratory infections."],
    answer: "C",
    explanation: "Corticosteroids do not directly cause bronchodilation; their therapeutic benefit in asthma comes from their potent anti-inflammatory effect, which reduces airway inflammation and edema."
  },
  {
    id: 61, subject: "Pharmacology", topic: "Respiratory Drugs",
    year: "NMCN Review",
    question: "A client is prescribed metaproterenol (Alupent) via a metered-dose inhaler (MDI), two puffs every 4 hours. The nurse instructs the client to report side effects. Which of the following are potential side effects of metaproterenol?",
    options: ["A. Irregular heartbeat", "B. Constipation", "C. Pedal edema", "D. Decreased heart rate."],
    answer: "A",
    explanation: "Metaproterenol is a beta-adrenergic agonist that can stimulate cardiac beta-1 receptors, causing an irregular heartbeat or palpitations."
  },
  {
    id: 62, subject: "Pharmacology", topic: "Respiratory Drugs",
    year: "NMCN Review",
    question: "A client has been taking flunisolide (Aerobid), two inhalations a day, for treatment of asthma. He tells the nurse that he has painful, white patches in his mouth. Which response by the nurse would be the most appropriate?",
    options: ["A. \u201cThis is an anticipated side-effect of your medication. It should go away in a couple of weeks.\u201d", "B. \u201cYou are using your inhaler too much and it has irritated your mouth.\u201d", "C. \u201cYou have developed a fungal infection from your medication. It will need to be treated with an antifungal.\u201d", "D. \u201cBe sure to brush your teeth and floss daily. Good oral hygiene will treat this problem.\u201d"],
    answer: "C",
    explanation: "Inhaled corticosteroids like flunisolide suppress local immune response in the oropharynx, predisposing clients to oral candidiasis (thrush), which presents as painful white patches and requires antifungal treatment."
  },
  {
    id: 63, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Which of the following health promotion activities should the nurse include in the discharge teaching plan for a client with asthma?",
    options: ["A. Incorporate physical exercise as tolerated into the treatment plan.", "B. Monitor peak flow numbers after meals and at bedtime.", "C. Eliminate stressors in the work and home environment.", "D. Use sedatives to ensure uninterrupted sleep at night."],
    answer: "A",
    explanation: "Regular physical exercise, tailored to the client's tolerance, is an important health promotion component of asthma management and overall cardiovascular fitness."
  },
  {
    id: 64, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "The client with asthma should be taught which of the following is one of the most common precipitating factors of an acute asthma attack?",
    options: ["A. Occupational exposure to toxins.", "B. Viral respiratory infections.", "C. Exposure to cigarette smoke.", "D. Exercising in cold temperatures."],
    answer: "B",
    explanation: "Viral respiratory infections are among the most common triggers for acute asthma exacerbations, more so than the other listed factors."
  },
  {
    id: 65, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A female client comes into the emergency room complaining of SOB and pain in the lung area. She states that she started taking birth control pills 3 weeks ago and that she smokes. Her VS are: 140/80, P 110, R 40. The physician orders ABG's, results are as follows: pH: 7.50; PaCO2 29 mm Hg; PaO2 60 mm Hg; HCO3- 24 mEq/L; SaO2 86%. Considering these results, the first intervention is to:",
    options: ["A. Begin mechanical ventilation.", "B. Place the client on oxygen.", "C. Give the client sodium bicarbonate.", "D. Monitor for pulmonary embolism."],
    answer: "B",
    explanation: "The history (smoking, oral contraceptives), symptoms, and hypoxemia (SaO2 86%) suggest a pulmonary embolism. The immediate priority intervention is to correct the hypoxemia by placing the client on oxygen."
  },
  {
    id: 66, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Basilar crackles are present in a client's lungs on auscultation. The nurse knows that these are discrete, non continuous sounds that are:",
    options: ["A. Caused by the sudden opening of alveoli.", "B. Usually more prominent during expiration.", "C. Produced by airflow across passages narrowed by secretions.", "D. Found primarily in the pleura."],
    answer: "A",
    explanation: "Crackles (rales) are discontinuous, brief popping sounds caused by the sudden opening of collapsed alveoli and small airways, typically heard on inspiration."
  },
  {
    id: 67, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A cyanotic client with an unknown diagnosis is admitted to the E.R. In relation to oxygen, the first nursing action would be to:",
    options: ["A. Wait until the client's lab work is done.", "B. Not administer oxygen unless ordered by the physician.", "C. Administer oxygen at 2 L flow per minute.", "D. Administer oxygen at 10 L flow per minute and check the client's nail beds."],
    answer: "C",
    explanation: "Since the diagnosis is unknown, the nurse should start with a conservative low-flow oxygen rate (2 L/min) to avoid the risk of suppressing the hypoxic drive in case the client has chronic CO2 retention, while still providing oxygenation support."
  },
  {
    id: 68, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Immediately following a thoracentesis, which clinical manifestations indicate that a complication has occurred and the physician should be notified?",
    options: ["A. Serosanguineous drainage from the puncture site.", "B. Increased temperature and blood pressure.", "C. Increased pulse and pallor.", "D. Hypotension and hypothermia."],
    answer: "C",
    explanation: "Increased pulse and pallor after thoracentesis may indicate complications such as pneumothorax, hemorrhage, or shock, and warrant immediate physician notification."
  },
  {
    id: 69, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "If a client continues to hypoventilate, the nurse will continually assess for a complication of:",
    options: ["A. Respiratory acidosis", "B. Respiratory alkalosis", "C. Metabolic acidosis", "D. Metabolic alkalosis"],
    answer: "A",
    explanation: "Hypoventilation causes retention of carbon dioxide, which leads to respiratory acidosis (elevated PaCO2 with decreased pH)."
  },
  {
    id: 70, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client is admitted to the hospital with acute bronchitis. While taking the client's VS, the nurse notices he has an irregular pulse. The nurse understands that cardiac arrhythmias in chronic respiratory distress are usually the result of:",
    options: ["A. Respiratory acidosis", "B. A build-up of carbon dioxide", "C. A build-up of oxygen without adequate expelling of carbon dioxide.", "D. An acute respiratory infection."],
    answer: "B",
    explanation: "Chronic CO2 retention (hypercapnia) associated with respiratory distress can affect cardiac electrical activity and contribute to arrhythmias."
  },
  {
    id: 71, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Auscultation of a client's lungs reveals crackles in the left posterior base. The nursing intervention is to:",
    options: ["A. Repeat auscultation after asking the client to deep breathe and cough.", "B. Instruct the client to limit fluid intake to less than 2000 ml/day.", "C. Inspect the client's ankles and sacrum for the presence of edema.", "D. Place the client on bedrest in a semi-Fowler's position."],
    answer: "A",
    explanation: "Crackles caused by fluid or secretions in dependent lung areas may clear with deep breathing and coughing; reassessing after these maneuvers helps distinguish transient atelectatic crackles from a persistent pathological finding."
  },
  {
    id: 72, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "The most reliable index to determine the respiratory status of a client is to:",
    options: ["A. Observe the chest rising and falling.", "B. Observe the skin and mucous membrane color.", "C. Listen and feel the air movement.", "D. Determine the presence of a femoral pulse."],
    answer: "C",
    explanation: "Listening and feeling for actual air movement provides the most direct and reliable confirmation that ventilation is occurring, more so than visual chest movement or skin color alone."
  },
  {
    id: 73, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client with COPD has developed secondary polycythemia. Which nursing diagnosis would be included in the plan of care because of the polycythemia?",
    options: ["A. Fluid volume deficit related to blood loss.", "B. Impaired tissue perfusion related to thrombosis.", "C. Activity intolerance related to dyspnea.", "D. Risk for infection related to suppressed immune response."],
    answer: "B",
    explanation: "Polycythemia (an increase in red blood cells as a compensatory response to chronic hypoxemia) increases blood viscosity, raising the risk of thrombosis and impaired tissue perfusion."
  },
  {
    id: 74, subject: "Surgical Nursing", topic: "Post-operative Care",
    year: "NMCN Review",
    question: "The physician has scheduled a client for a left pneumonectomy. The position that will most likely be ordered postoperatively for him is the:",
    options: ["A. Nonoperative side or back", "B. Operative side or back", "C. Back only", "D. Back or either side."],
    answer: "B",
    explanation: "After a pneumonectomy, positioning on the operative side or back helps prevent fluid from draining into the remaining unaffected lung, preserving its function."
  },
  {
    id: 75, subject: "Surgical Nursing", topic: "Post-operative Care",
    year: "NMCN Review",
    question: "Assessing a client who has developed atelectasis postoperatively, the nurse will most likely find:",
    options: ["A. A flushed face.", "B. Dyspnea and pain.", "C. Decreased temperature.", "D. Severe cough and no pain."],
    answer: "B",
    explanation: "Postoperative atelectasis (collapse of alveoli) commonly presents with dyspnea and pleuritic pain due to reduced lung expansion and impaired gas exchange."
  },
  {
    id: 76, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A fifty-year-old client has a tracheostomy and requires tracheal suctioning. The first intervention in completing this procedure would be to:",
    options: ["A. Change the tracheostomy dressing.", "B. Provide humidity with a trach mask.", "C. Apply oral or nasal suction.", "D. Deflate the tracheal cuff."],
    answer: "C",
    explanation: "Before tracheal suctioning, the nurse should first apply oral or nasal suction to clear secretions above the cuff and reduce the risk of aspiration into the lower airway during the procedure."
  },
  {
    id: 77, subject: "Anatomy & Physiology", topic: "Respiratory",
    year: "NMCN Review",
    question: "A client states that the physician said the tidal volume is slightly diminished and asks the nurse what this means. The nurse explains that the tidal volume is the amount of air:",
    options: ["A. Exhaled forcibly after a normal expiration.", "B. Exhaled after there is a normal inspiration.", "C. Trapped in the alveoli that cannot be exhaled.", "D. Forcibly inspired over and above a normal respiration."],
    answer: "B",
    explanation: "Tidal volume is defined as the volume of air inhaled and exhaled during a normal, quiet breath."
  },
  {
    id: 78, subject: "Anatomy & Physiology", topic: "Respiratory",
    year: "NMCN Review",
    question: "An acceleration in oxygen dissociation from hemoglobin, and thus oxygen delivery to the tissues, is caused by:",
    options: ["A. A decreasing oxygen pressure in the blood.", "B. An increasing carbon dioxide pressure in the blood.", "C. A decreasing oxygen pressure and/or an increasing carbon dioxide pressure in the blood.", "D. An increasing oxygen pressure and/or a decreasing carbon dioxide pressure in the blood."],
    answer: "C",
    explanation: "A decrease in oxygen tension and/or an increase in carbon dioxide tension (as occurs in metabolically active tissue) shifts the oxyhemoglobin dissociation curve to the right, promoting the release of oxygen to the tissues (the Bohr effect)."
  },
  {
    id: 79, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "The best method of oxygen administration for a client with COPD uses:",
    options: ["A. Cannula", "B. Simple face mask", "C. Non-rebreather mask", "D. Venturi mask"],
    answer: "D",
    explanation: "A Venturi mask delivers a precise, consistent concentration of oxygen, which is important in COPD clients to avoid over-oxygenation and suppression of the hypoxic respiratory drive."
  },
  {
    id: 80, subject: "Pharmacology", topic: "Respiratory Drugs",
    year: "NMCN Review",
    question: "Dr. Jones prescribes albuterol sulfate (Proventil) for a patient with newly diagnosed asthma. When teaching the patient about this drug, the nurse should explain that it may cause:",
    options: ["A. Nasal congestion", "B. Nervousness", "C. Lethargy", "D. Hyperkalemia"],
    answer: "B",
    explanation: "Albuterol is a beta-2 adrenergic agonist that can stimulate the central nervous system, commonly causing nervousness, tremors, and restlessness."
  },
  {
    id: 81, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Miriam, a college student with acute rhinitis, sees the campus nurse because of excessive nasal drainage. The nurse asks the patient about the color of the drainage. In acute rhinitis, nasal drainage normally is:",
    options: ["A. Yellow", "B. Green", "C. Clear", "D. Gray"],
    answer: "C",
    explanation: "In uncomplicated acute (viral) rhinitis, nasal drainage is typically clear and watery; yellow or green discoloration suggests a secondary bacterial infection."
  },
  {
    id: 82, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A male adult patient hospitalized for treatment of a pulmonary embolism develops respiratory alkalosis. Which clinical findings commonly accompany respiratory alkalosis?",
    options: ["A. Nausea or vomiting", "B. Abdominal pain or diarrhea", "C. Hallucinations or tinnitus", "D. Lightheadedness or paresthesia"],
    answer: "D",
    explanation: "Respiratory alkalosis, often from hyperventilation, causes cerebral vasoconstriction and altered calcium binding, leading to lightheadedness and paresthesia (tingling in the extremities and around the mouth)."
  },
  {
    id: 83, subject: "Pharmacology", topic: "Respiratory Drugs",
    year: "NMCN Review",
    question: "Before administering ephedrine, Nurse Tony assesses the patient's history. Because of ephedrine's central nervous system (CNS) effects, it is not recommended for:",
    options: ["A. Patients with an acute asthma attack.", "B. Patients with narcolepsy.", "C. Patients under age 6.", "D. Elderly patients."],
    answer: "D",
    explanation: "Ephedrine's CNS stimulant effects (insomnia, restlessness, tremors, cardiovascular strain) are poorly tolerated by elderly patients, who are more sensitive to these adverse effects."
  },
  {
    id: 84, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A female patient suffers acute respiratory distress syndrome as a consequence of shock. The patient's condition deteriorates rapidly, and endotracheal intubation and mechanical ventilation are initiated. When the high-pressure alarm on the mechanical ventilator sounds, the nurse starts to check for the cause. Which condition triggers the high-pressure alarm?",
    options: ["A. Kinking of the ventilator tubing.", "B. A disconnected ventilator tube.", "C. An endotracheal cuff leak.", "D. A change in the oxygen concentration without resetting the oxygen level alarm."],
    answer: "A",
    explanation: "Kinked ventilator tubing increases resistance to airflow, raising the pressure in the circuit and triggering the high-pressure alarm. A disconnection or cuff leak would instead trigger a low-pressure alarm."
  },
  {
    id: 85, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A male adult patient on mechanical ventilation is receiving pancuronium bromide (Pavulon), 0.01 mg/kg I.V. as needed. Which assessment finding indicates that the patient needs another pancuronium dose?",
    options: ["A. Leg movement", "B. Finger movement", "C. Lip movement", "D. Fighting the ventilator"],
    answer: "D",
    explanation: "Pancuronium is a neuromuscular blocking agent used to facilitate ventilator synchrony. A patient 'fighting' or bucking the ventilator indicates inadequate paralysis and the need for another dose."
  },
  {
    id: 86, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "On auscultation, which finding suggests a right pneumothorax?",
    options: ["A. Bilateral inspiratory and expiratory crackles.", "B. Absence of breaths sound in the right thorax.", "C. Inspiratory wheezes in the right thorax.", "D. Bilateral pleural friction rub."],
    answer: "B",
    explanation: "A pneumothorax involves air in the pleural space causing lung collapse, which results in absent breath sounds over the affected side."
  },
  {
    id: 87, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Rhea, confused and short of breath, is brought to the emergency department by a family member. The medical history reveals chronic bronchitis and hypertension. To learn more about the current respiratory problem, the doctor orders a chest x-ray and arterial blood gas (ABG) analysis. When reviewing the ABG report, the nurse sees many abbreviations. What does a lowercase \u201ca\u201d in an ABG value represent?",
    options: ["A. Acid-base balance", "B. Arterial Blood", "C. Arterial oxygen saturation", "D. Alveoli"],
    answer: "B",
    explanation: "In ABG terminology (e.g., PaO2, PaCO2), the lowercase 'a' denotes 'arterial,' indicating the sample or pressure is measured in arterial blood."
  },
  {
    id: 88, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Nurse Ruth, assessing a patient for tracheal displacement, should know that the trachea will deviate toward the:",
    options: ["A. Contralateral side in a simple pneumothorax.", "B. Affected side in a hemothorax.", "C. Affected side in a tension pneumothorax.", "D. Contralateral side in a hemothorax."],
    answer: "D",
    explanation: "In a hemothorax, blood accumulating in the pleural space pushes mediastinal structures, including the trachea, toward the contralateral (unaffected) side."
  },
  {
    id: 89, subject: "Surgical Nursing", topic: "Post-operative Care",
    year: "NMCN Review",
    question: "After undergoing a left pneumonectomy, a female patient has a chest tube in place for drainage. When caring for this patient, the nurse must:",
    options: ["A. Monitor fluctuations in the water-seal chamber.", "B. Clamp the chest tube once every shift.", "C. Encourage coughing and deep breathing.", "D. Milk the chest tube every 2 hours."],
    answer: "C",
    explanation: "Encouraging coughing and deep breathing after pneumonectomy helps prevent atelectasis and pneumonia in the remaining lung and promotes lung expansion."
  },
  {
    id: 90, subject: "Surgical Nursing", topic: "Post-operative Care",
    year: "NMCN Review",
    question: "When caring for a male patient who has just had a total laryngectomy, the nurse should plan to:",
    options: ["A. Encourage oral feeding as soon as possible.", "B. Develop an alternative communication method.", "C. Keep the tracheostomy cuff fully inflated.", "D. Keep the patient flat in bed."],
    answer: "B",
    explanation: "A total laryngectomy removes the voice box, eliminating the patient's ability to speak normally. The nurse must plan an alternative communication method (e.g., writing board, electronic device) before surgery, if possible, and reinforce it postoperatively."
  },
  {
    id: 91, subject: "Surgical Nursing", topic: "Emergency Care",
    year: "NMCN Review",
    question: "A male patient has a sucking stab wound to the chest. Which action should the nurse take first?",
    options: ["A. Drawing blood for a hematocrit and hemoglobin level.", "B. Applying a dressing over the wound and taping it on three sides.", "C. Preparing a chest tube insertion tray.", "D. Preparing to start an I.V. line."],
    answer: "B",
    explanation: "A sucking chest wound must be covered immediately with a dressing taped on three sides, creating a flutter-valve effect that allows air to escape but prevents air from being drawn into the pleural space, reducing the risk of tension pneumothorax."
  },
  {
    id: 92, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "For a patient with advanced chronic obstructive pulmonary disease (COPD), which nursing action best promotes adequate gas exchange?",
    options: ["A. Encouraging the patient to drink three glasses of fluid daily.", "B. Keeping the patient in semi-Fowler's position.", "C. Using a high-flow venturi mask to deliver oxygen as prescribed.", "D. Administering a sedative, as prescribed."],
    answer: "C",
    explanation: "A Venturi mask precisely controls oxygen delivery, which is important in COPD to promote adequate gas exchange while avoiding excessive oxygen that could suppress the hypoxic drive."
  },
  {
    id: 93, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A male patient's X-ray result reveals bilateral white-outs, indicating acute respiratory distress syndrome (ARDS). This syndrome results from:",
    options: ["A. Cardiogenic pulmonary edema", "B. Respiratory alkalosis", "C. Increased pulmonary capillary permeability", "D. Renal failure"],
    answer: "C",
    explanation: "ARDS results from diffuse injury to the alveolar-capillary membrane, causing increased pulmonary capillary permeability, fluid leakage into the alveoli, and impaired gas exchange."
  },
  {
    id: 94, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "For a female patient with chronic obstructive pulmonary disease, which nursing intervention would help maintain a patent airway?",
    options: ["A. Restricting fluid intake to 1,000 ml per day.", "B. Enforcing absolute bed rest.", "C. Teaching the patient how to perform controlled coughing.", "D. Administering prescribed sedatives regularly and in large amounts."],
    answer: "C",
    explanation: "Controlled coughing techniques help mobilize and clear secretions effectively, maintaining a patent airway in COPD patients."
  },
  {
    id: 95, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Nurse Lei, caring for a client with a pneumothorax and who has had a chest tube inserted, continues to note gentle bubbling in the suction control chamber. What action is appropriate?",
    options: ["A. Do nothing, because this is an expected finding.", "B. Immediately clamp the chest tube and notify the physician.", "C. Check for an air leak because the bubbling should be intermittent.", "D. Increase the suction pressure so that the bubbling becomes vigorous."],
    answer: "A",
    explanation: "Gentle, continuous bubbling in the suction control chamber is an expected finding reflecting that suction is being regulated correctly, and requires no intervention."
  },
  {
    id: 96, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Nurse Maureen has assisted a physician with the insertion of a chest tube. The nurse monitors the client and notes fluctuation of the fluid level in the water seal chamber after the tube is inserted. Based on this assessment, which action would be appropriate?",
    options: ["A. Inform the physician.", "B. Continue to monitor the client.", "C. Reinforce the occlusive dressing.", "D. Encourage the client to deep breathe."],
    answer: "B",
    explanation: "Fluctuation (tidaling) of fluid in the water-seal chamber with respiration is a normal, expected finding indicating the chest tube system is patent and functioning correctly; the nurse should simply continue monitoring."
  },
  {
    id: 97, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Nurse Reynolds, caring for a client with a chest tube, turns the client to the side, and the chest tube accidentally disconnects. The initial nursing action is to:",
    options: ["A. Call the physician.", "B. Place the tube in a bottle of sterile water.", "C. Immediately replace the chest tube system.", "D. Place a sterile dressing over the disconnection site."],
    answer: "B",
    explanation: "If a chest tube disconnects, the nurse should immediately submerge the end of the tube in a bottle of sterile water to re-establish a water seal and prevent air from entering the pleural space, then obtain a new sterile drainage system."
  },
  {
    id: 98, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse is assisting a physician with the removal of a chest tube. The nurse should instruct the client to:",
    options: ["A. Exhale slowly", "B. Stay very still", "C. Inhale and exhale quickly", "D. Perform the Valsalva maneuver"],
    answer: "D",
    explanation: "The client should perform the Valsalva maneuver (bear down/hold breath) during chest tube removal, which increases intrathoracic pressure and prevents air from being drawn into the pleural space as the tube is withdrawn."
  },
  {
    id: 99, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "While changing the tapes on a tracheostomy tube, the male client coughs and the tube is dislodged. The initial nursing action is to:",
    options: ["A. Call the physician to reinsert the tube.", "B. Grasp the retention sutures to spread the opening.", "C. Call the respiratory therapy department to reinsert the tracheotomy.", "D. Cover the tracheostomy site with a sterile dressing to prevent infection."],
    answer: "B",
    explanation: "If a tracheostomy tube is accidentally dislodged, the nurse should immediately grasp the retention sutures (if present) to spread the tracheostomy opening and maintain a patent airway while help is obtained."
  },
  {
    id: 100, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Nurse Oliver is caring for a client immediately after removal of the endotracheal tube. The nurse reports which of the following signs immediately if experienced by the client?",
    options: ["A. Stridor", "B. Occasional pink-tinged sputum", "C. A few basilar lung crackles on the right", "D. Respiratory rate 24 breaths/min"],
    answer: "A",
    explanation: "Stridor after extubation indicates upper airway edema or obstruction, a potentially life-threatening complication that must be reported immediately."
  },
  {
    id: 101, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "An emergency room nurse is assessing a male client who has sustained a blunt injury to the chest wall. Which of these signs would indicate the presence of a pneumothorax in this client?",
    options: ["A. A low respiratory rate.", "B. Diminished breath sounds.", "C. The presence of a barrel chest.", "D. A sucking sound at the site of injury."],
    answer: "B",
    explanation: "Diminished or absent breath sounds on the affected side is a classic finding of pneumothorax, resulting from lung collapse due to air in the pleural space."
  },
  {
    id: 102, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Nurse Reese is caring for a client hospitalized with acute exacerbation of chronic obstructive pulmonary disease. Which of the following would the nurse expect to note on assessment of this client?",
    options: ["A. Hypocapnia", "B. A hyperinflated chest noted on the chest x-ray.", "C. Increased oxygen saturation with exercise.", "D. A widened diaphragm noted on the chest x-ray."],
    answer: "B",
    explanation: "Chronic air trapping in COPD leads to lung hyperinflation, which is visible as a hyperinflated chest with a flattened diaphragm on chest x-ray."
  },
  {
    id: 103, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "An oxygen delivery system is prescribed for a male client with chronic obstructive pulmonary disease to deliver a precise oxygen concentration. Which of the following types of oxygen delivery systems would the nurse anticipate to be prescribed?",
    options: ["A. Face tent", "B. Venturi mask", "C. Aerosol mask", "D. Tracheostomy collar"],
    answer: "B",
    explanation: "A Venturi mask is designed to deliver a precise, fixed concentration of oxygen regardless of the client's breathing pattern, making it ideal for COPD clients who require controlled oxygen therapy."
  },
  {
    id: 104, subject: "Community Health Nursing", topic: "Disease Prevention",
    year: "NMCN Review",
    question: "Blessy, a community health nurse, is conducting an educational session with community members regarding tuberculosis. The nurse tells the group that one of the first symptoms associated with tuberculosis is:",
    options: ["A. Dyspnea", "B. Chest pain", "C. A bloody, productive cough.", "D. A cough with the expectoration of mucoid sputum."],
    answer: "D",
    explanation: "Early tuberculosis typically presents with a persistent cough producing mucoid sputum; hemoptysis (bloody sputum), dyspnea, and chest pain tend to occur later as the disease progresses."
  },
  {
    id: 105, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse performs an admission assessment on a female client with a diagnosis of tuberculosis. The nurse reviews the result of which diagnostic test that will confirm this diagnosis?",
    options: ["A. Bronchoscopy", "B. Sputum culture", "C. Chest x-ray", "D. Tuberculin skin test"],
    answer: "B",
    explanation: "A positive sputum culture identifying Mycobacterium tuberculosis is the definitive, confirmatory diagnostic test for active tuberculosis. Chest x-ray and skin testing support but do not confirm the diagnosis."
  },
  {
    id: 106, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse is caring for a male client with emphysema who is receiving oxygen. The nurse assesses the oxygen flow rate to ensure that it does not exceed:",
    options: ["A. 1 L/min", "B. 2 L/min", "C. 6 L/min", "D. 10 L/min"],
    answer: "B",
    explanation: "In clients with emphysema who rely on a hypoxic drive to breathe, oxygen flow rates are typically limited to 1–2 L/min to avoid suppressing the respiratory drive, which could lead to hypoventilation."
  },
  {
    id: 107, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse instructs a female client to use the pursed-lip method of breathing and the client asks the nurse about the purpose of this type of breathing. The nurse responds, knowing that the primary purpose of pursed-lip breathing is to:",
    options: ["A. Promote oxygen intake.", "B. Strengthen the diaphragm.", "C. Strengthen the intercostal muscles.", "D. Promote carbon dioxide elimination."],
    answer: "D",
    explanation: "Pursed-lip breathing slows exhalation and maintains positive airway pressure, preventing early airway collapse and promoting more complete carbon dioxide elimination."
  },
  {
    id: 108, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse is caring for a male client with acute respiratory distress syndrome. Which of the following would the nurse expect to note in the client?",
    options: ["A. Pallor", "B. Low arterial PaO2", "C. Elevated arterial PaO2", "D. Decreased respiratory rate"],
    answer: "B",
    explanation: "ARDS is characterized by severe hypoxemia (low arterial PaO2) that is refractory to supplemental oxygen therapy, due to impaired gas exchange across the damaged alveolar-capillary membrane."
  },
  {
    id: 109, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse is preparing to obtain a sputum specimen from a male client. Which of the following nursing actions will facilitate obtaining the specimen?",
    options: ["A. Limiting fluid.", "B. Having the client take deep breaths.", "C. Asking the client to spit into the collection container.", "D. Asking the client to obtain the specimen after eating."],
    answer: "B",
    explanation: "Having the client take several deep breaths before coughing helps mobilize secretions from deeper airways, facilitating collection of a true sputum specimen rather than saliva."
  },
  {
    id: 110, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Nurse Joy is caring for a client after a bronchoscopy and biopsy. Which of the following signs, if noticed in the client, should be reported immediately to the physician?",
    options: ["A. Dry cough", "B. Hematuria", "C. Bronchospasm", "D. Blood-streaked sputum"],
    answer: "C",
    explanation: "Bronchospasm following bronchoscopy and biopsy can rapidly compromise the airway and is a potentially life-threatening complication requiring immediate physician notification."
  },
  {
    id: 111, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse is suctioning fluids from a male client via a tracheostomy tube. When suctioning, the nurse must limit the suctioning time to a maximum of:",
    options: ["A. 1 minute", "B. 5 seconds", "C. 10 seconds", "D. 30 seconds"],
    answer: "C",
    explanation: "Suctioning should be limited to a maximum of 10 seconds per pass to minimize the risk of hypoxia, as suctioning removes oxygen from the airway along with secretions."
  },
  {
    id: 112, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A nurse is suctioning fluids from a female client through an endotracheal tube. During the suctioning procedure, the nurse notes on the monitor that the heart rate is decreasing. Which of the following is the appropriate nursing intervention?",
    options: ["A. Continue to suction.", "B. Notify the physician immediately.", "C. Stop the procedure and reoxygenate the client.", "D. Ensure that the suction is limited to 15 seconds."],
    answer: "C",
    explanation: "A decreasing heart rate during suctioning suggests vagal stimulation and hypoxia. The nurse should immediately stop the procedure and reoxygenate/hyperventilate the client before considering further action."
  },
  {
    id: 113, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A male adult client is suspected of having a pulmonary embolism. A nurse assesses the client, knowing that which of the following is a common clinical manifestation of pulmonary embolism?",
    options: ["A. Dyspnea", "B. Bradypnea", "C. Bradycardia", "D. Decreased respirations"],
    answer: "A",
    explanation: "Dyspnea (sudden onset shortness of breath) is the most common presenting symptom of pulmonary embolism, along with tachypnea, tachycardia, and pleuritic chest pain."
  },
  {
    id: 114, subject: "Anatomy & Physiology", topic: "Respiratory",
    year: "NMCN Review",
    question: "A slightly obese female client with a history of allergy-induced asthma, hypertension, and mitral valve prolapse is admitted to an acute care facility for elective surgery. The nurse obtains a complete history and performs a thorough physical examination, paying special attention to the cardiovascular and respiratory systems. When percussing the client's chest wall, the nurse expects to elicit:",
    options: ["A. Resonant sounds.", "B. Hyperresonant sounds.", "C. Dull sounds.", "D. Flat sounds."],
    answer: "A",
    explanation: "Resonance is the normal percussion sound heard over healthy, air-filled lung tissue; this client has no findings suggesting hyperinflation, consolidation, or effusion that would alter this normal finding."
  },
  {
    id: 115, subject: "Pharmacology", topic: "Drug Calculations",
    year: "NMCN Review",
    question: "A male client who weighs 175 lb (79.4 kg) is receiving aminophylline (400 mg in 500 ml) at 50 ml/hour. The theophylline level is reported as 6 mcg/ml. The nurse calls the physician who instructs the nurse to change the dosage to 0.45 mg/kg/hour. The nurse should:",
    options: ["A. Question the order because it's too low.", "B. Question the order because it's too high.", "C. Set the pump at 45 ml/hour.", "D. Stop the infusion and have the laboratory repeat the theophylline measurement."],
    answer: "A",
    explanation: "At 0.45 mg/kg/hr for a 79.4 kg client, the dose calculates to about 35.7 mg/hr, which converts to roughly 44.6 ml/hr — actually close to the current rate. Given the theophylline level is subtherapeutic at 6 mcg/ml (therapeutic range 10–20 mcg/ml), the nurse should question whether the new order is high enough to reach a therapeutic level."
  },
  {
    id: 116, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "The nurse is teaching a male client with chronic bronchitis about breathing exercises. Which of the following should the nurse include in the teaching?",
    options: ["A. Make inhalation longer than exhalation.", "B. Exhale through an open mouth.", "C. Use diaphragmatic breathing.", "D. Use chest breathing."],
    answer: "C",
    explanation: "Diaphragmatic breathing strengthens the diaphragm, improves ventilation efficiency, and reduces the work of breathing in clients with chronic bronchitis."
  },
  {
    id: 117, subject: "Anatomy & Physiology", topic: "Respiratory",
    year: "NMCN Review",
    question: "Which phrase is used to describe the volume of air inspired and expired with a normal breath?",
    options: ["A. Total lung capacity", "B. Forced vital capacity", "C. Tidal volume", "D. Residual volume"],
    answer: "C",
    explanation: "Tidal volume refers specifically to the amount of air moved in and out of the lungs during a normal, resting breath."
  },
  {
    id: 118, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A male client abruptly sits up in bed, reports having difficulty breathing and has an arterial oxygen saturation of 88%. Which mode of oxygen delivery would most likely reverse the manifestations?",
    options: ["A. Simple mask", "B. Non-rebreather mask", "C. Face tent", "D. Nasal cannula"],
    answer: "B",
    explanation: "A non-rebreather mask delivers the highest concentration of oxygen (up to 90–100%) among standard delivery devices, making it appropriate for a client with significant hypoxemia (SaO2 88%) and acute respiratory distress."
  },
  {
    id: 119, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A female client must take streptomycin for tuberculosis. Before therapy begins, the nurse should instruct the client to notify the physician if a health concern occurs?",
    options: ["A. Impaired color discrimination", "B. Increased urinary frequency", "C. Decreased hearing acuity", "D. Increased appetite"],
    answer: "C",
    explanation: "Streptomycin is ototoxic and can cause damage to the eighth cranial nerve, resulting in hearing loss and vestibular disturbances. Clients should be instructed to report any decreased hearing acuity immediately."
  },
  {
    id: 120, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A male client is asking the nurse a question regarding the Mantoux test for tuberculosis. The nurse should base her response on the fact that the:",
    options: ["A. Area of redness is measured in 3 days and determines whether tuberculosis is present.", "B. Skin test doesn't differentiate between active and dormant tuberculosis infection.", "C. Presence of a wheal at the injection site in 2 days indicates active tuberculosis.", "D. Test stimulates a reddened response in some clients and requires a second test in 3 months."],
    answer: "B",
    explanation: "A positive Mantoux (PPD) test indicates exposure to and infection with M. tuberculosis, but it cannot distinguish between latent (dormant) and active disease — further testing (sputum culture, chest x-ray, clinical evaluation) is needed to make that distinction."
  },
  {
    id: 121, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A female adult client has a tracheostomy but doesn't require continuous mechanical ventilation. When weaning the client from the tracheostomy tube, the nurse initially should plug the opening in the tube for:",
    options: ["A. 15 to 60 seconds.", "B. 5 to 20 minutes.", "C. 30 to 40 minutes.", "D. 45 to 60 minutes."],
    answer: "B",
    explanation: "Weaning from a tracheostomy tube is a gradual process. The nurse initially plugs the opening for short intervals of 5 to 20 minutes, closely monitoring the client's tolerance, and progressively increases the duration."
  },
  {
    id: 122, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "Nurse Oliver observes constant bubbling in the water-seal chamber of a closed chest drainage system. What should the nurse conclude?",
    options: ["A. The system is functioning normally.", "B. The client has a pneumothorax.", "C. The system has an air leak.", "D. The chest tube is obstructed."],
    answer: "C",
    explanation: "Continuous bubbling in the water-seal chamber (as opposed to intermittent bubbling with respiration) indicates an air leak somewhere in the chest tube system that needs to be identified and corrected."
  },
  {
    id: 123, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A black client with asthma seeks emergency care for acute respiratory distress. Because of this client's dark skin, the nurse should assess for cyanosis by inspecting the:",
    options: ["A. Lips", "B. Mucous membranes", "C. Nail beds", "D. Earlobes"],
    answer: "B",
    explanation: "In clients with darker skin tones, cyanosis is best assessed by inspecting the mucous membranes (e.g., oral mucosa, conjunctivae), which reveal color changes more reliably than the skin."
  },
  {
    id: 124, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "For a male client with an endotracheal (ET) tube, which nursing action is most essential?",
    options: ["A. Auscultating the lungs for bilateral breath sounds.", "B. Turning the client from side to side every 2 hours.", "C. Monitoring serial blood gas values every 4 hours.", "D. Providing frequent oral hygiene."],
    answer: "A",
    explanation: "Auscultating for bilateral, equal breath sounds confirms correct ET tube placement and patency, and detects complications such as tube migration into the right mainstem bronchus — making it the most essential nursing action."
  },
  {
    id: 125, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "The nurse assesses a male client's respiratory status. Which observation indicates that the client is experiencing difficulty breathing?",
    options: ["A. Diaphragmatic breathing", "B. Use of accessory muscles", "C. Pursed-lip breathing", "D. Controlled breathing"],
    answer: "B",
    explanation: "Use of accessory muscles (sternocleidomastoid, intercostal, abdominal muscles) indicates increased work of breathing and respiratory distress."
  },
  {
    id: 126, subject: "Anatomy & Physiology", topic: "Respiratory",
    year: "NMCN Review",
    question: "A female client is undergoing a complete physical examination as a requirement for college. When checking the client's respiratory status, the nurse observes respiratory excursion to help assess:",
    options: ["A. Lung vibrations", "B. Vocal sounds", "C. Breath sounds", "D. Chest movements."],
    answer: "D",
    explanation: "Respiratory (chest) excursion is assessed by observing and palpating the symmetry and degree of chest wall movement during breathing."
  },
  {
    id: 127, subject: "Pharmacology", topic: "Antibiotics",
    year: "NMCN Review",
    question: "A male client comes to the emergency department complaining of sudden onset of diarrhea, anorexia, malaise, cough, headache, and recurrent chills. Based on the client's history and physical findings, the physician suspects Legionnaires' disease. While awaiting diagnostic test results, the client is admitted to the facility and started on antibiotic therapy. What is the drug of choice for treating Legionnaires' disease?",
    options: ["A. Erythromycin (Erythrocin)", "B. Rifampin (Rifadin)", "C. Amantadine (Symmetrel)", "D. Amphotericin B (Fungizone)"],
    answer: "A",
    explanation: "Erythromycin (or other macrolides such as azithromycin) has traditionally been the drug of choice for treating Legionnaires' disease, a form of pneumonia caused by Legionella pneumophila."
  },
  {
    id: 128, subject: "Medical-Surgical Nursing", topic: "Respiratory",
    year: "NMCN Review",
    question: "A male client with chronic obstructive pulmonary disease (COPD) is recovering from a myocardial infarction. Because the client is extremely weak and can't produce an effective cough, the nurse should monitor closely for:",
    options: ["A. Pleural effusion", "B. Pulmonary edema", "C. Atelectasis", "D. Oxygen toxicity"],
    answer: "C",
    explanation: "An ineffective cough impairs secretion clearance, increasing the risk of airway obstruction and alveolar collapse (atelectasis)."
  },

  // ─── HEAD-TO-TOE BODY SYSTEMS EXPANSION ───────────────────────────────────
{
    id: 129, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A nurse is assessing a client for signs of increased intracranial pressure (ICP). Which of the following is typically the EARLIEST indicator?",
    options: ["A. Widened pulse pressure", "B. Decreased level of consciousness", "C. Bradycardia", "D. Fixed, dilated pupils"],
    answer: "B",
    explanation: "A change in level of consciousness (LOC), such as restlessness, confusion, or lethargy, is the earliest and most sensitive indicator of increasing ICP — it precedes vital sign changes like Cushing's triad (widened pulse pressure, bradycardia) and pupillary changes, which are late signs."
  },
  {
    id: 130, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client with a spinal cord injury at T4 suddenly develops a pounding headache, profuse sweating above the injury level, and a blood pressure of 210/120 mmHg. The nurse should suspect:",
    options: ["A. Spinal shock", "B. Autonomic dysreflexia", "C. Neurogenic shock", "D. Increased intracranial pressure"],
    answer: "B",
    explanation: "Autonomic dysreflexia is a life-threatening emergency in clients with spinal cord injury at T6 or above, triggered by a noxious stimulus below the injury (often a distended bladder or bowel). It causes severe hypertension, pounding headache, and profuse sweating above the lesion. The nurse must sit the client upright and identify the trigger immediately."
  },
  {
    id: 131, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "The FIRST nursing action for a client with suspected autonomic dysreflexia is to:",
    options: ["A. Administer antihypertensive medication.", "B. Place the client flat in bed.", "C. Sit the client up and check for bladder distension.", "D. Call a code blue immediately."],
    answer: "C",
    explanation: "Sitting the client upright helps lower blood pressure through orthostatic effect, and the most common trigger — a distended bladder — should be checked and relieved first (e.g., checking for a kinked catheter) before other interventions."
  },
  {
    id: 132, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client is diagnosed with Guillain-Barré syndrome. The nurse should prioritize monitoring for which complication?",
    options: ["A. Hypertension", "B. Ascending paralysis leading to respiratory failure", "C. Seizures", "D. Increased intracranial pressure"],
    answer: "B",
    explanation: "Guillain-Barré syndrome causes ascending, symmetrical muscle weakness that can progress rapidly to the respiratory muscles, leading to respiratory failure. Close monitoring of respiratory status (vital capacity, negative inspiratory force) is the nursing priority."
  },
  {
    id: 133, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client with myasthenia gravis is scheduled to receive pyridostigmine (Mestinon). The nurse should administer this medication:",
    options: ["A. With food to reduce GI upset only.", "B. On an empty stomach for best absorption.", "C. 30 minutes before meals to improve chewing and swallowing.", "D. At bedtime only."],
    answer: "C",
    explanation: "Pyridostigmine improves muscle strength, including the muscles used for chewing and swallowing. Administering it 30 minutes before meals ensures peak effectiveness during eating, reducing the risk of aspiration and fatigue."
  },
  {
    id: 134, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client experiencing a myasthenic crisis and one experiencing a cholinergic crisis both present with worsening muscle weakness. Which finding helps the nurse distinguish a cholinergic crisis?",
    options: ["A. Ptosis", "B. Excessive salivation, cramping, and diarrhea", "C. Diplopia", "D. Dysphagia"],
    answer: "B",
    explanation: "Cholinergic crisis results from excessive acetylcholinesterase inhibitor medication and produces cholinergic (SLUDGE) symptoms: salivation, lacrimation, urination, diarrhea, GI cramping, and emesis, in addition to muscle weakness — differentiating it from myasthenic crisis, which lacks these autonomic symptoms."
  },
  {
    id: 135, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client is admitted following a traumatic brain injury. The nurse notes clear fluid draining from the nose. The nurse should:",
    options: ["A. Instruct the client to blow the nose gently to clear the drainage.", "B. Test the drainage for glucose using a dipstick.", "C. Pack the nostril with sterile gauze.", "D. Position the client supine with the head flat."],
    answer: "B",
    explanation: "Clear drainage from the nose or ears after head trauma may indicate cerebrospinal fluid (CSF) leakage. Testing for glucose (CSF is glucose-positive, unlike normal nasal mucus) helps confirm this. Nose blowing, packing, and flat positioning are contraindicated as they risk infection or increased ICP."
  },
  {
    id: 136, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client is diagnosed with a stroke affecting the left hemisphere of the brain. The nurse would expect which of the following clinical manifestations?",
    options: ["A. Left-sided weakness and impulsive behavior", "B. Right-sided weakness and language deficits", "C. Left-sided neglect", "D. Bilateral hyperreflexia"],
    answer: "B",
    explanation: "Because motor and sensory pathways cross at the level of the brainstem, a left hemisphere stroke produces right-sided weakness. The left hemisphere is also typically dominant for language in most people, so aphasia (language deficits) is a common finding."
  },
  {
    id: 137, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client is receiving tissue plasminogen activator (tPA) for an acute ischemic stroke. Which finding requires the nurse to stop the infusion immediately?",
    options: ["A. Mild headache", "B. Sudden severe headache and decreased LOC", "C. Elevated blood pressure of 150/90 mmHg", "D. Nausea"],
    answer: "B",
    explanation: "A sudden severe headache with decreased level of consciousness during tPA infusion suggests intracranial hemorrhage, the most feared complication of thrombolytic therapy. The infusion must be stopped immediately and a stat CT scan obtained."
  },
  {
    id: 138, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client with Parkinson's disease is prescribed levodopa-carbidopa (Sinemet). The nurse should instruct the client to avoid taking this medication with which of the following?",
    options: ["A. High-carbohydrate foods", "B. High-protein foods", "C. High-fat foods", "D. Foods high in vitamin C"],
    answer: "B",
    explanation: "High-protein meals can compete with levodopa for absorption across the blood-brain barrier and reduce its effectiveness. Clients are usually taught to take the medication apart from protein-rich meals."
  },
  {
    id: 139, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "The nurse is caring for a client with a new diagnosis of Bell's palsy. Which of the following should be included in client teaching?",
    options: ["A. Protect the affected eye from injury and dryness.", "B. The condition is permanent and will not resolve.", "C. Avoid all facial exercises.", "D. Surgery is the primary treatment."],
    answer: "A",
    explanation: "Bell's palsy causes facial nerve paralysis, often impairing the ability to fully close the eyelid on the affected side. Protecting the eye with lubricating drops, a patch, or taping it closed at night prevents corneal injury and dryness. Most cases resolve spontaneously within weeks to months."
  },
  {
    id: 140, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client is admitted with a diagnosis of meningitis. Which assessment finding is consistent with meningeal irritation?",
    options: ["A. Positive Homan's sign", "B. Positive Kernig's sign", "C. Negative Babinski reflex", "D. Absent patellar reflex"],
    answer: "B",
    explanation: "Kernig's sign — pain and resistance when extending the knee with the hip flexed at 90 degrees — indicates meningeal irritation, along with Brudzinski's sign (neck flexion causing hip/knee flexion) and nuchal rigidity."
  },
  {
    id: 141, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client is prescribed phenytoin (Dilantin) for seizure management. The nurse should monitor for which adverse effect with long-term use?",
    options: ["A. Weight loss", "B. Gingival hyperplasia", "C. Hyperactivity", "D. Improved night vision"],
    answer: "B",
    explanation: "Gingival hyperplasia (overgrowth of gum tissue) is a well-known long-term adverse effect of phenytoin. Clients should be taught meticulous oral hygiene and regular dental visits to manage this."
  },
  {
    id: 142, subject: "Medical-Surgical Nursing", topic: "Neurological",
    year: "NMCN Review",
    question: "A client is having a generalized tonic-clonic seizure. The PRIORITY nursing action is to:",
    options: ["A. Restrain the client's movements.", "B. Insert a padded tongue blade into the mouth.", "C. Protect the client from injury and turn them to the side.", "D. Administer oral anticonvulsant medication."],
    answer: "C",
    explanation: "During a seizure, the priority is protecting the client from injury (padding/removing hazards) and positioning them on their side to maintain a patent airway and prevent aspiration. Restraining the client or inserting objects into the mouth can cause injury and are contraindicated."
  },
  {
    id: 143, subject: "Anatomy & Physiology", topic: "Neurological",
    year: "NMCN Review",
    question: "Which cranial nerve is responsible for the sense of smell?",
    options: ["A. Cranial nerve I (Olfactory)", "B. Cranial nerve II (Optic)", "C. Cranial nerve V (Trigeminal)", "D. Cranial nerve VII (Facial)"],
    answer: "A",
    explanation: "The olfactory nerve (CN I) transmits sensory information related to smell from the nasal mucosa to the olfactory bulb and brain."
  },
  {
    id: 144, subject: "Anatomy & Physiology", topic: "Neurological",
    year: "NMCN Review",
    question: "The part of the brain responsible for coordinating voluntary movement, balance, and posture is the:",
    options: ["A. Cerebrum", "B. Cerebellum", "C. Medulla oblongata", "D. Thalamus"],
    answer: "B",
    explanation: "The cerebellum coordinates voluntary muscle movements, balance, and posture. Damage to the cerebellum (e.g., from stroke or tumor) commonly causes ataxia and impaired coordination."
  },
  {
    id: 145, subject: "Medical-Surgical Nursing", topic: "HEENT",
    year: "NMCN Review",
    question: "A client is diagnosed with acute angle-closure glaucoma. Which of the following symptoms would the nurse expect?",
    options: ["A. Gradual, painless vision loss", "B. Sudden severe eye pain, halos around lights, and nausea", "C. Excessive tearing without pain", "D. Painless floaters"],
    answer: "B",
    explanation: "Acute angle-closure glaucoma is an ophthalmic emergency presenting with sudden severe eye pain, blurred vision, halos around lights, nausea, and vomiting due to a rapid rise in intraocular pressure. It requires immediate treatment to prevent permanent vision loss."
  },
  {
    id: 146, subject: "Medical-Surgical Nursing", topic: "HEENT",
    year: "NMCN Review",
    question: "A client with open-angle glaucoma is prescribed timolol (Timoptic) eye drops. The nurse should teach the client to apply pressure to the inner canthus (nasolacrimal duct) after instillation to:",
    options: ["A. Reduce burning sensation.", "B. Prevent systemic absorption and side effects.", "C. Improve the drug's local effect on the cornea.", "D. Prevent the drop from evaporating too quickly."],
    answer: "B",
    explanation: "Applying gentle pressure to the nasolacrimal duct (punctal occlusion) for 30-60 seconds after eye drop instillation prevents the medication from draining into the nasal passage and being absorbed systemically, which is important for beta-blocker eye drops like timolol that can cause systemic cardiac and respiratory effects."
  },
  {
    id: 147, subject: "Medical-Surgical Nursing", topic: "HEENT",
    year: "NMCN Review",
    question: "A client returns from cataract surgery. Which instruction should the nurse include in discharge teaching?",
    options: ["A. Sleep on the operative side.", "B. Avoid bending at the waist and heavy lifting.", "C. Resume strenuous exercise immediately.", "D. Rub the eye if it feels itchy."],
    answer: "B",
    explanation: "After cataract surgery, clients should avoid activities that increase intraocular pressure, such as bending at the waist, heavy lifting, straining, and rubbing the eye, to protect the surgical site and prevent complications."
  },
  {
    id: 148, subject: "Medical-Surgical Nursing", topic: "HEENT",
    year: "NMCN Review",
    question: "A client reports sudden hearing loss, tinnitus, and vertigo. The nurse suspects which condition?",
    options: ["A. Otitis media", "B. Ménière's disease", "C. Presbycusis", "D. Otosclerosis"],
    answer: "B",
    explanation: "Ménière's disease is characterized by the classic triad of episodic vertigo, tinnitus, and fluctuating sensorineural hearing loss, caused by excess fluid (endolymph) in the inner ear."
  },
  {
    id: 149, subject: "Medical-Surgical Nursing", topic: "HEENT",
    year: "NMCN Review",
    question: "The nurse is caring for a client following a total laryngectomy. Priority discharge teaching should include:",
    options: ["A. Swimming is permitted with a snorkel.", "B. The client will breathe through a permanent stoma in the neck.", "C. The client can resume smoking after healing.", "D. Humidification of air is unnecessary."],
    answer: "B",
    explanation: "A total laryngectomy results in a permanent tracheostoma, as the trachea is no longer connected to the nose and mouth. The client breathes entirely through this stoma, requiring extensive education on stoma care, humidification, and protection from water."
  },
  {
    id: 150, subject: "Medical-Surgical Nursing", topic: "HEENT",
    year: "NMCN Review",
    question: "A client is diagnosed with epistaxis (nosebleed) that is not resolving with direct pressure. The nurse should position the client:",
    options: ["A. Supine with the neck extended.", "B. Sitting upright, leaning slightly forward, pinching the soft part of the nose.", "C. Lying on the back with the head elevated on two pillows.", "D. Trendelenburg position."],
    answer: "B",
    explanation: "For epistaxis, the client should sit upright and lean slightly forward while pinching the soft, lower part of the nose for 10-15 minutes continuously. This position prevents blood from draining down the throat (which can cause aspiration or nausea) and allows direct pressure to control bleeding."
  },
  {
    id: 151, subject: "Anatomy & Physiology", topic: "HEENT",
    year: "NMCN Review",
    question: "The structure in the ear responsible for maintaining balance and equilibrium is the:",
    options: ["A. Cochlea", "B. Tympanic membrane", "C. Semicircular canals", "D. Eustachian tube"],
    answer: "C",
    explanation: "The semicircular canals in the inner ear detect rotational movement of the head and are essential for maintaining balance and equilibrium. The cochlea, by contrast, is responsible for hearing."
  },
  {
    id: 152, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client with heart failure is prescribed digoxin and furosemide. Which laboratory value increases the client's risk for digoxin toxicity?",
    options: ["A. Serum sodium 140 mEq/L", "B. Serum potassium 3.0 mEq/L", "C. Serum calcium 9.5 mg/dL", "D. Serum glucose 100 mg/dL"],
    answer: "B",
    explanation: "Furosemide is a potassium-wasting diuretic. Hypokalemia (potassium 3.0 mEq/L, below the normal 3.5-5.0 mEq/L) increases myocardial sensitivity to digoxin, significantly raising the risk of digoxin toxicity and dangerous arrhythmias."
  },
  {
    id: 153, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client presents with crushing substernal chest pain radiating to the left arm, diaphoresis, and nausea. The nurse's PRIORITY action is to:",
    options: ["A. Obtain a detailed medical history.", "B. Administer aspirin and obtain a 12-lead ECG.", "C. Prepare the client for discharge if pain subsides.", "D. Encourage ambulation to assess exercise tolerance."],
    answer: "B",
    explanation: "For suspected acute myocardial infarction, the priority is rapid assessment and treatment: obtaining a 12-lead ECG within 10 minutes and administering aspirin (unless contraindicated) to reduce platelet aggregation, following the 'MONA' framework (Morphine, Oxygen, Nitrates, Aspirin) as appropriate."
  },
  {
    id: 154, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client with atrial fibrillation is prescribed warfarin (Coumadin). The nurse should monitor which laboratory value to assess therapeutic effect?",
    options: ["A. Partial thromboplastin time (PTT)", "B. International Normalized Ratio (INR)", "C. Platelet count", "D. Hemoglobin A1c"],
    answer: "B",
    explanation: "Warfarin therapy is monitored using the INR, with a therapeutic range typically between 2.0 and 3.0 for most indications (including atrial fibrillation), to balance anticoagulation and bleeding risk. PTT is used to monitor heparin, not warfarin."
  },
  {
    id: 155, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A nurse is caring for a client following cardiac catheterization via the right femoral artery. Which assessment finding requires IMMEDIATE intervention?",
    options: ["A. Slight bruising at the insertion site", "B. Expanding hematoma and decreased pedal pulse in the right leg", "C. Client reports mild soreness at the site", "D. Heart rate of 78 beats/minute"],
    answer: "B",
    explanation: "An expanding hematoma with decreased pedal pulse suggests active bleeding and vascular compromise distal to the insertion site — a potentially limb-threatening complication requiring immediate pressure application and physician notification."
  },
  {
    id: 156, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client is diagnosed with left-sided heart failure. Which of the following clinical manifestations would the nurse expect?",
    options: ["A. Peripheral edema and jugular vein distension", "B. Pulmonary crackles and dyspnea", "C. Ascites and hepatomegaly", "D. Weight gain from fluid retention in the extremities only"],
    answer: "B",
    explanation: "Left-sided heart failure causes blood to back up into the pulmonary circulation, resulting in pulmonary congestion — manifesting as crackles, dyspnea, and orthopnea. Peripheral edema, JVD, ascites, and hepatomegaly are signs of right-sided heart failure."
  },
  {
    id: 157, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A nurse notes that a client's cardiac monitor shows a wide, bizarre QRS complex occurring at a rate of 160 beats/minute with no discernible P waves. The nurse recognizes this rhythm as:",
    options: ["A. Atrial fibrillation", "B. Ventricular tachycardia", "C. Sinus tachycardia", "D. First-degree AV block"],
    answer: "B",
    explanation: "Ventricular tachycardia is characterized by wide, bizarre QRS complexes at a rate typically 100-250 beats/minute, with absent P waves, originating from an ectopic focus in the ventricles. It is a life-threatening rhythm requiring immediate intervention."
  },
  {
    id: 158, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client's cardiac monitor shows ventricular fibrillation. The nurse's FIRST action should be to:",
    options: ["A. Check the client's blood pressure.", "B. Assess responsiveness and call for help/initiate CPR and defibrillation.", "C. Administer amiodarone IV push.", "D. Document the rhythm and continue routine monitoring."],
    answer: "B",
    explanation: "Ventricular fibrillation is a pulseless, life-threatening rhythm. The nurse should immediately assess responsiveness, call for help/activate the emergency response system, and begin CPR with defibrillation as soon as possible, per ACLS protocol."
  },
  {
    id: 159, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client with hypertension is prescribed lisinopril (an ACE inhibitor). The nurse should instruct the client to report which of the following side effects?",
    options: ["A. Occasional mild headache", "B. Persistent dry cough", "C. Increased appetite", "D. Improved energy levels"],
    answer: "B",
    explanation: "A persistent dry, nonproductive cough is a well-known side effect of ACE inhibitors, caused by increased bradykinin levels. If bothersome, the physician may switch the client to an angiotensin receptor blocker (ARB), which does not typically cause this effect."
  },
  {
    id: 160, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client with deep vein thrombosis (DVT) in the left leg is on bed rest. Which nursing action is contraindicated?",
    options: ["A. Elevating the affected leg.", "B. Applying prescribed anticoagulant therapy.", "C. Massaging the affected leg to relieve discomfort.", "D. Measuring leg circumference daily."],
    answer: "C",
    explanation: "Massaging the affected leg in a client with DVT is contraindicated because it can dislodge the clot, causing a pulmonary embolism. The leg should be elevated and left undisturbed, with anticoagulation as prescribed."
  },
  {
    id: 161, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A nurse is caring for a client with peripheral arterial disease (PAD). Which finding is consistent with this condition?",
    options: ["A. Warm skin with brawny discoloration", "B. Pain that improves with leg elevation", "C. Cool skin, diminished pulses, and pain that worsens with elevation", "D. Pitting edema and stasis dermatitis"],
    answer: "C",
    explanation: "PAD results from reduced arterial blood flow, causing cool skin, diminished or absent pulses, and pain (intermittent claudication or rest pain) that worsens with leg elevation (which further reduces arterial flow) and improves when the leg is in a dependent position."
  },
  {
    id: 162, subject: "Anatomy & Physiology", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "The normal intrinsic pacemaker of the heart, which initiates each heartbeat, is the:",
    options: ["A. Atrioventricular (AV) node", "B. Sinoatrial (SA) node", "C. Bundle of His", "D. Purkinje fibers"],
    answer: "B",
    explanation: "The sinoatrial (SA) node, located in the right atrium, is the heart's natural pacemaker, generating electrical impulses at 60-100 beats/minute that initiate each normal heartbeat."
  },
  {
    id: 163, subject: "Anatomy & Physiology", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "Which heart valve is located between the left atrium and left ventricle?",
    options: ["A. Tricuspid valve", "B. Pulmonic valve", "C. Mitral (bicuspid) valve", "D. Aortic valve"],
    answer: "C",
    explanation: "The mitral valve (also called the bicuspid valve) is located between the left atrium and left ventricle, preventing backflow of oxygenated blood into the atrium during ventricular contraction."
  },
  {
    id: 164, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client is receiving IV heparin therapy. The antidote for heparin overdose is:",
    options: ["A. Vitamin K", "B. Protamine sulfate", "C. Fresh frozen plasma only", "D. Calcium gluconate"],
    answer: "B",
    explanation: "Protamine sulfate is the specific antidote for heparin, neutralizing its anticoagulant effect by binding to it. Vitamin K is the antidote for warfarin, not heparin."
  },
  {
    id: 165, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client with a permanent pacemaker should be taught to avoid which of the following?",
    options: ["A. Using a microwave oven.", "B. Standing close to strong magnetic fields such as MRI machines without physician clearance.", "C. Using a cellphone at all times.", "D. Air travel."],
    answer: "B",
    explanation: "Clients with pacemakers should avoid strong magnetic fields, such as those from MRI machines (unless the pacemaker is MRI-safe and cleared by the physician), as these can interfere with pacemaker function. Microwaves and typical cellphone use are generally safe with modern pacemakers."
  },
  {
    id: 166, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client is diagnosed with cardiac tamponade. The nurse would expect to find which of the following (Beck's triad)?",
    options: ["A. Hypertension, bradycardia, and clear lung sounds", "B. Hypotension, muffled heart sounds, and jugular vein distension", "C. Fever, tachypnea, and productive cough", "D. Bradycardia, hypertension, and irregular respirations"],
    answer: "B",
    explanation: "Beck's triad — hypotension, muffled/distant heart sounds, and jugular vein distension — is the classic presentation of cardiac tamponade, caused by fluid accumulation in the pericardial sac compressing the heart and impairing filling."
  },
  {
    id: 167, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client is scheduled for a coronary artery bypass graft (CABG). Preoperative teaching should include informing the client that postoperatively, they will:",
    options: ["A. Be extubated immediately in the operating room.", "B. Have a chest tube, be on a ventilator initially, and be monitored in ICU.", "C. Ambulate immediately after surgery.", "D. Not require any pain management."],
    answer: "B",
    explanation: "Following CABG surgery, clients are typically intubated and mechanically ventilated initially, monitored closely in the ICU, and have chest tubes in place to drain blood/fluid from the mediastinum and/or pleural space."
  },
  {
    id: 168, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A nurse is caring for a client with infective endocarditis. Which finding is a classic sign of this condition?",
    options: ["A. Osler's nodes and Janeway lesions", "B. Homan's sign", "C. Chvostek's sign", "D. Battle's sign"],
    answer: "A",
    explanation: "Osler's nodes (painful nodules on fingers/toes) and Janeway lesions (painless macules on palms/soles) are classic peripheral manifestations of infective endocarditis, caused by microemboli and immune complex deposition."
  },
  {
    id: 169, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client with hyperlipidemia is prescribed atorvastatin (Lipitor). The nurse should monitor for which adverse effect?",
    options: ["A. Muscle pain and elevated creatine kinase (myopathy)", "B. Hyperglycemia only", "C. Hair loss", "D. Weight gain"],
    answer: "A",
    explanation: "Statins can cause myopathy, presenting as muscle pain, tenderness, or weakness, with elevated creatine kinase (CK) levels. In rare cases, this can progress to rhabdomyolysis. Clients should report unexplained muscle pain promptly."
  },
  {
    id: 170, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client is admitted with hypertensive crisis (BP 220/130 mmHg). The nurse's priority action is to:",
    options: ["A. Lower the blood pressure to normal range within 1 hour.", "B. Administer IV antihypertensives to gradually lower BP, avoiding rapid drops.", "C. Withhold all treatment until symptoms develop.", "D. Encourage the client to walk to reduce BP naturally."],
    answer: "B",
    explanation: "In hypertensive crisis, blood pressure should be lowered gradually (typically no more than 25% within the first hour) using IV antihypertensives, as rapid correction can cause cerebral, cardiac, or renal ischemia due to impaired autoregulation."
  },
  {
    id: 171, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client reports intermittent claudication in the calf muscles that resolves with rest. This is characteristic of:",
    options: ["A. Chronic venous insufficiency", "B. Peripheral arterial disease", "C. Deep vein thrombosis", "D. Raynaud's phenomenon"],
    answer: "B",
    explanation: "Intermittent claudication — ischemic muscle pain during activity that is relieved by rest — is a classic symptom of peripheral arterial disease, caused by insufficient blood flow to meet the increased oxygen demand of exercising muscle."
  },
  {
    id: 172, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client with chronic venous insufficiency should be taught to:",
    options: ["A. Keep the legs in a dependent position as much as possible.", "B. Elevate the legs above heart level periodically throughout the day.", "C. Avoid compression stockings.", "D. Cross the legs when sitting."],
    answer: "B",
    explanation: "Elevating the legs above heart level helps venous return and reduces venous pooling and edema in chronic venous insufficiency. Compression stockings are also recommended, and leg crossing/prolonged dependent positioning should be avoided."
  },
  {
    id: 173, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client is prescribed clopidogrel (Plavix) after a coronary stent placement. The nurse should teach the client to:",
    options: ["A. Stop the medication if a headache occurs.", "B. Report any unusual bruising or bleeding, and not discontinue the medication without consulting the cardiologist.", "C. Take the medication only when chest pain occurs.", "D. Combine with NSAIDs freely for pain relief."],
    answer: "B",
    explanation: "Clopidogrel is an antiplatelet agent critical for preventing stent thrombosis. Clients must be taught to report bleeding/bruising but never stop the medication abruptly without consulting the cardiologist, as premature discontinuation significantly increases the risk of stent thrombosis and myocardial infarction."
  },
  {
    id: 174, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client's ECG shows a prolonged PR interval greater than 0.20 seconds with a regular rhythm and no dropped beats. The nurse recognizes this as:",
    options: ["A. First-degree AV block", "B. Second-degree AV block, type I (Wenckebach)", "C. Third-degree (complete) AV block", "D. Normal sinus rhythm"],
    answer: "A",
    explanation: "First-degree AV block is characterized by a prolonged PR interval (>0.20 seconds) with every P wave followed by a QRS complex (no dropped beats). It is usually asymptomatic and often does not require treatment."
  },
  {
    id: 175, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A nurse is teaching a client about dietary modifications for hypertension (DASH diet). Which food choice indicates effective learning?",
    options: ["A. Canned soups and processed deli meats", "B. Fresh fruits, vegetables, and low-fat dairy", "C. Salted snacks and pickled foods", "D. Fast food burgers"],
    answer: "B",
    explanation: "The DASH (Dietary Approaches to Stop Hypertension) diet emphasizes fresh fruits, vegetables, whole grains, and low-fat dairy while limiting sodium, saturated fat, and processed foods — all of which help lower blood pressure."
  },
  {
    id: 176, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client post-myocardial infarction asks the nurse when they can resume sexual activity. The nurse's best response is based on the general guideline that sexual activity can typically resume when the client can:",
    options: ["A. Walk up two flights of stairs without symptoms.", "B. Return to work full-time.", "C. Never resume sexual activity after an MI.", "D. Tolerate strenuous exercise without any monitoring."],
    answer: "A",
    explanation: "A widely used clinical guideline is that if a client can climb two flights of stairs (about 12-15 steps) without chest pain, dyspnea, or excessive fatigue, they generally have the cardiac reserve to resume sexual activity."
  },
  {
    id: 177, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client has a serum troponin level that is markedly elevated 6 hours after onset of chest pain. This finding is most consistent with:",
    options: ["A. Stable angina", "B. Myocardial infarction", "C. Pericarditis without myocardial damage", "D. A normal, expected post-exercise finding"],
    answer: "B",
    explanation: "Troponin is a highly specific marker for myocardial cell death. It begins to rise 3-6 hours after myocardial infarction, so a markedly elevated level at 6 hours strongly supports the diagnosis of MI rather than stable angina, which does not cause myocardial necrosis."
  },
  {
    id: 178, subject: "Medical-Surgical Nursing", topic: "Cardiovascular",
    year: "NMCN Review",
    question: "A client receiving nitroglycerin sublingually for chest pain should be taught to:",
    options: ["A. Swallow the tablet whole with water.", "B. Take up to 3 doses 5 minutes apart, and call emergency services if pain persists after the first dose.", "C. Take one dose only ever, regardless of symptoms.", "D. Chew the tablet before swallowing."],
    answer: "B",
    explanation: "Sublingual nitroglycerin should be placed under the tongue (not swallowed) and can be taken up to 3 doses, 5 minutes apart. Current guidelines recommend calling emergency services after the first dose if pain does not improve, given the risk of ongoing myocardial infarction."
  },
{
    id: 179, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client is diagnosed with acute pancreatitis. Which laboratory finding supports this diagnosis?",
    options: ["A. Decreased serum amylase and lipase", "B. Elevated serum amylase and lipase", "C. Decreased serum glucose", "D. Elevated serum calcium"],
    answer: "B", explanation: "Elevated serum amylase and lipase (lipase being more specific and lasting longer) are the hallmark laboratory findings in acute pancreatitis, reflecting pancreatic cell injury and enzyme release."
  },
  {
    id: 180, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client with acute pancreatitis reports severe abdominal pain. The nurse should position the client:",
    options: ["A. Supine with legs straight", "B. Side-lying with knees drawn to chest, or sitting up and leaning forward", "C. Trendelenburg position", "D. Prone position"],
    answer: "B", explanation: "The fetal position (side-lying with knees drawn to chest) or sitting up and leaning forward reduces tension on the abdomen and can relieve pain associated with pancreatitis."
  },
  {
    id: 181, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client with cirrhosis develops asterixis and confusion. The nurse recognizes these as signs of:",
    options: ["A. Hepatorenal syndrome", "B. Hepatic encephalopathy", "C. Esophageal varices", "D. Ascites"],
    answer: "B", explanation: "Asterixis (a flapping tremor of the hands) combined with confusion in a client with liver disease indicates hepatic encephalopathy, caused by the accumulation of ammonia and other toxins the diseased liver cannot metabolize."
  },
  {
    id: 182, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "Lactulose is prescribed for a client with hepatic encephalopathy. The therapeutic goal of this medication is to:",
    options: ["A. Increase serum ammonia levels.", "B. Promote bowel evacuation to reduce ammonia absorption.", "C. Cause constipation to retain nutrients.", "D. Treat esophageal varices directly."],
    answer: "B", explanation: "Lactulose works by acidifying the colon and acting as an osmotic laxative, trapping ammonia in the gut and promoting its excretion through the stool, thereby lowering serum ammonia levels and improving hepatic encephalopathy."
  },
  {
    id: 183, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client with esophageal varices is at risk for which life-threatening complication?",
    options: ["A. Massive gastrointestinal hemorrhage", "B. Bowel obstruction", "C. Appendicitis", "D. Cholecystitis"],
    answer: "A", explanation: "Esophageal varices are dilated, fragile veins in the esophagus resulting from portal hypertension. They can rupture, causing sudden, massive, life-threatening GI hemorrhage."
  },
  {
    id: 184, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client is diagnosed with a peptic ulcer caused by Helicobacter pylori. Expected treatment includes:",
    options: ["A. Antibiotics combined with a proton pump inhibitor.", "B. NSAIDs for pain relief.", "C. Antacids alone as the sole treatment.", "D. High-dose corticosteroids."],
    answer: "A", explanation: "H. pylori-associated peptic ulcers are treated with a combination of antibiotics (e.g., amoxicillin, clarithromycin) and a proton pump inhibitor to eradicate the bacteria and reduce gastric acid, allowing the ulcer to heal."
  },
  {
    id: 185, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client with a peptic ulcer suddenly develops severe abdominal pain, a rigid, board-like abdomen, and hypotension. The nurse suspects:",
    options: ["A. Simple indigestion", "B. Perforation of the ulcer", "C. Gastroenteritis", "D. Constipation"],
    answer: "B", explanation: "A sudden onset of severe pain with a rigid, board-like abdomen and signs of shock (hypotension) suggests perforation of the ulcer, causing peritonitis — a surgical emergency."
  },
  {
    id: 186, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client is diagnosed with ulcerative colitis. Which of the following is a hallmark symptom?",
    options: ["A. Bloody diarrhea with mucus", "B. Chronic constipation", "C. Weight gain", "D. Absence of abdominal pain"],
    answer: "A", explanation: "Ulcerative colitis characteristically causes bloody diarrhea with mucus, along with abdominal cramping, urgency, and tenesmus, due to continuous mucosal inflammation of the colon and rectum."
  },
  {
    id: 187, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "The nurse is caring for a client with Crohn's disease. Unlike ulcerative colitis, Crohn's disease is characterized by:",
    options: ["A. Continuous inflammation limited to the colon and rectum.", "B. Patchy, transmural inflammation that can affect any part of the GI tract from mouth to anus.", "C. Involvement of the colon only, in a continuous pattern.", "D. No risk of fistula formation."],
    answer: "B", explanation: "Crohn's disease causes patchy ('skip lesion') transmural inflammation that can affect any segment of the GI tract, commonly the terminal ileum, and is prone to fistula, stricture, and abscess formation — unlike ulcerative colitis, which is continuous and limited to the colon/rectum mucosa."
  },
  {
    id: 188, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client is admitted with suspected appendicitis. The nurse should avoid which of the following actions?",
    options: ["A. Applying an ice pack to the abdomen.", "B. Applying heat to the abdomen.", "C. Monitoring vital signs.", "D. Keeping the client NPO."],
    answer: "B", explanation: "Applying heat to the abdomen in suspected appendicitis is contraindicated, as it can increase blood flow to the area and increase the risk of appendix rupture."
  },
  {
    id: 189, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client with appendicitis suddenly reports that the abdominal pain has stopped. The nurse should interpret this as:",
    options: ["A. A sign of improvement and recovery.", "B. A possible sign of appendix rupture, requiring immediate assessment.", "C. Normal resolution of inflammation.", "D. An indication that pain medication is working well."],
    answer: "B", explanation: "Sudden relief of pain in appendicitis can indicate rupture of the appendix, as the pressure within the inflamed organ is released. This is often followed by signs of peritonitis and requires urgent assessment and intervention."
  },
  {
    id: 190, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client has a new colostomy following bowel resection. Which finding would the nurse expect as normal in the immediate postoperative period?",
    options: ["A. Dark red to purplish stoma color", "B. Pink to red, moist stoma with slight edema", "C. Pale, dusky, or black stoma", "D. No drainage from the stoma for the first week"],
    answer: "B", explanation: "A healthy stoma should appear pink to red and moist, similar to the inside of the cheek, often with mild edema in the immediate postoperative period. A pale, dusky, or black stoma indicates ischemia and requires immediate physician notification."
  },
  {
    id: 191, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client with a nasogastric tube for decompression is NPO. The nurse should assess bowel sounds and expect the tube to be discontinued when the client:",
    options: ["A. Requests food.", "B. Passes flatus and bowel sounds return.", "C. Has been NPO for 24 hours regardless of symptoms.", "D. Reports feeling hungry."],
    answer: "B", explanation: "Return of bowel function, evidenced by the return of bowel sounds and passage of flatus, indicates resolution of ileus and readiness to advance diet, at which point the NG tube for decompression can typically be discontinued."
  },
  {
    id: 192, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client with GERD is being taught lifestyle modifications. Which statement indicates effective teaching?",
    options: ["A. \u201cI will lie down right after meals to help digestion.\u201d", "B. \u201cI will avoid eating for 2-3 hours before lying down.\u201d", "C. \u201cI should wear tight-fitting clothing around my waist.\u201d", "D. \u201cI will increase my intake of chocolate and caffeine.\u201d"],
    answer: "B", explanation: "Avoiding food for 2-3 hours before lying down reduces the risk of reflux by allowing the stomach to empty. Clients should also avoid lying flat after meals, tight clothing, and trigger foods like chocolate, caffeine, and fatty/spicy foods."
  },
  {
    id: 193, subject: "Anatomy & Physiology", topic: "Gastrointestinal",
    year: "NMCN Review", question: "The primary organ responsible for the production of bile is the:",
    options: ["A. Pancreas", "B. Gallbladder", "C. Liver", "D. Spleen"],
    answer: "C", explanation: "The liver produces bile, which is then stored and concentrated in the gallbladder before being released into the duodenum to aid in fat digestion."
  },
  {
    id: 194, subject: "Medical-Surgical Nursing", topic: "Gastrointestinal",
    year: "NMCN Review", question: "A client with cholecystitis reports pain that radiates to the right shoulder after eating fatty foods. The nurse identifies this as:",
    options: ["A. Murphy's sign", "B. McBurney's point tenderness", "C. Referred pain typical of gallbladder disease", "D. A sign unrelated to the gallbladder"],
    answer: "C", explanation: "Pain from gallbladder disease commonly radiates to the right shoulder or scapula due to shared nerve pathways (referred pain via the phrenic nerve), and is classically triggered by fatty food intake, which stimulates gallbladder contraction."
  },
  {
    id: 195, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A client with acute kidney injury has a potassium level of 6.8 mEq/L. Which ECG change would the nurse expect?",
    options: ["A. Flattened T waves", "B. Peaked T waves", "C. Prolonged QT interval only", "D. U waves"],
    answer: "B", explanation: "Hyperkalemia (K+ 6.8 mEq/L, above normal 3.5-5.0) classically causes peaked, tented T waves on ECG, and can progress to widened QRS complexes and life-threatening arrhythmias if untreated."
  },
  {
    id: 196, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A client with chronic kidney disease is prescribed a diet restriction. The nurse should teach the client to limit intake of which nutrient?",
    options: ["A. Carbohydrates only", "B. Potassium, phosphorus, and sodium", "C. Vitamin C exclusively", "D. Fiber"],
    answer: "B", explanation: "Clients with chronic kidney disease typically require restriction of potassium, phosphorus, and sodium, as impaired renal function reduces the body's ability to excrete these substances, risking hyperkalemia, hyperphosphatemia, and fluid overload."
  },
  {
    id: 197, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A client is receiving hemodialysis. Immediately after the session, the nurse should prioritize monitoring for:",
    options: ["A. Hypertension and fluid overload.", "B. Hypotension and disequilibrium syndrome.", "C. Hyperkalemia.", "D. Constipation."],
    answer: "B", explanation: "Post-dialysis, clients are at risk for hypotension (from rapid fluid removal) and dialysis disequilibrium syndrome (headache, nausea, confusion from rapid shifts in solutes/fluid between blood and brain), requiring close monitoring."
  },
  {
    id: 198, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A client has an arteriovenous (AV) fistula for hemodialysis access. The nurse should avoid which of the following?",
    options: ["A. Palpating for a thrill over the fistula.", "B. Taking blood pressure or drawing blood from the fistula arm.", "C. Auscultating for a bruit over the fistula.", "D. Teaching the client to protect the arm from trauma."],
    answer: "B", explanation: "Blood pressure measurement, venipuncture, and IV insertion should never be performed on the arm with an AV fistula, as this can damage the fistula or cause thrombosis, jeopardizing this vital dialysis access."
  },
  {
    id: 199, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A client with a urinary tract infection is prescribed nitrofurantoin. The nurse should instruct the client to take the medication:",
    options: ["A. On an empty stomach for best absorption.", "B. With food to increase absorption and reduce GI upset.", "C. Only at bedtime, regardless of dosing schedule.", "D. With antacids to reduce stomach irritation."],
    answer: "B", explanation: "Nitrofurantoin should be taken with food, which increases its absorption and reduces gastrointestinal side effects such as nausea."
  },
  {
    id: 200, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A client with a renal calculus (kidney stone) reports severe flank pain radiating to the groin. The PRIORITY nursing intervention is to:",
    options: ["A. Restrict all fluid intake.", "B. Encourage increased fluid intake and strain all urine.", "C. Apply ice to the flank continuously.", "D. Encourage bed rest only, without fluids."],
    answer: "B", explanation: "Increasing fluid intake helps flush the urinary system and may facilitate stone passage. Straining all urine allows collection of the stone for laboratory analysis to guide future prevention strategies."
  },
  {
    id: 201, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A client is diagnosed with benign prostatic hyperplasia (BPH). Which symptom would the nurse expect?",
    options: ["A. Increased urinary stream force", "B. Urinary hesitancy, frequency, and weak stream", "C. Absence of nocturia", "D. Hematuria as the primary presenting symptom"],
    answer: "B", explanation: "BPH causes enlargement of the prostate, compressing the urethra and leading to lower urinary tract symptoms: hesitancy, weak/interrupted stream, frequency, urgency, and nocturia."
  },
  {
    id: 202, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A client is recovering from a transurethral resection of the prostate (TURP) and has continuous bladder irrigation (CBI). The nurse notes the drainage is bright red with clots. The PRIORITY action is to:",
    options: ["A. Document the finding as expected and continue routine care.", "B. Increase the irrigation rate and notify the physician if bleeding persists or worsens.", "C. Discontinue the irrigation completely.", "D. Clamp the catheter."],
    answer: "B", explanation: "Bright red drainage with clots suggests active arterial bleeding. The nurse should increase the CBI irrigation rate to flush clots and prevent catheter obstruction, and notify the physician, as significant bleeding may require intervention."
  },
  {
    id: 203, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A nurse is caring for a client with nephrotic syndrome. Which of the following findings is characteristic?",
    options: ["A. Hypoalbuminemia, massive proteinuria, and edema", "B. Hyperalbuminemia and no proteinuria", "C. Polyuria and dehydration", "D. Hypertension as the only symptom"],
    answer: "A", explanation: "Nephrotic syndrome is characterized by massive proteinuria, resulting hypoalbuminemia, and consequent edema due to decreased plasma oncotic pressure, along with hyperlipidemia."
  },
  {
    id: 204, subject: "Anatomy & Physiology", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "The functional unit of the kidney responsible for filtration is the:",
    options: ["A. Ureter", "B. Nephron", "C. Bladder", "D. Renal pelvis"],
    answer: "B", explanation: "The nephron is the basic structural and functional unit of the kidney, responsible for filtering blood and forming urine through filtration, reabsorption, and secretion."
  },
  {
    id: 205, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client with a fractured femur develops sudden shortness of breath, tachycardia, and petechiae on the chest. The nurse suspects:",
    options: ["A. Pulmonary embolism from DVT", "B. Fat embolism syndrome", "C. Simple anxiety", "D. Compartment syndrome"],
    answer: "B", explanation: "Fat embolism syndrome is a serious complication of long bone fractures (especially the femur), presenting with the classic triad of respiratory distress, neurological changes, and petechial rash (often on the chest, axilla, or conjunctiva), typically within 24-72 hours of injury."
  },
  {
    id: 206, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client with a cast on the right leg reports severe pain unrelieved by pain medication, along with numbness and tingling in the toes. The nurse suspects:",
    options: ["A. Normal post-injury pain.", "B. Compartment syndrome.", "C. Deep vein thrombosis.", "D. A need for more pain medication only."],
    answer: "B", explanation: "Pain that is disproportionate to the injury and unrelieved by medication, along with paresthesia, is a hallmark early sign of compartment syndrome — a limb-threatening emergency caused by increased pressure within a muscle compartment that compromises circulation and nerve function."
  },
  {
    id: 207, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "The 6 P's of compartment syndrome assessment include all of the following EXCEPT:",
    options: ["A. Pain", "B. Pallor", "C. Polyuria", "D. Paresthesia"],
    answer: "C", explanation: "The 6 P's of compartment syndrome are Pain, Pallor, Paresthesia, Pulselessness, Poikilothermia, and Paralysis. Polyuria (excessive urination) is not part of this assessment framework."
  },
  {
    id: 208, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client is in Buck's traction for a hip fracture. The nurse should ensure that:",
    options: ["A. Weights are resting on the floor.", "B. Weights hang freely and are not resting on the floor or bed.", "C. The client's leg is in internal rotation.", "D. The traction is removed for repositioning every hour."],
    answer: "B", explanation: "For traction to be effective, the weights must hang freely without touching the floor or bed, maintaining continuous pull. Weights resting on a surface interrupt the therapeutic traction force."
  },
  {
    id: 209, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client is scheduled for a total hip replacement. Postoperative teaching should include avoiding which of the following movements to prevent dislocation?",
    options: ["A. Keeping the hip in a neutral, extended position.", "B. Crossing the legs, hip flexion greater than 90 degrees, and internal rotation.", "C. Using an abduction pillow.", "D. Walking with assistance."],
    answer: "B", explanation: "After total hip replacement (posterior approach), clients must avoid hip flexion greater than 90 degrees, adduction (crossing legs), and internal rotation, as these positions increase the risk of prosthetic hip dislocation."
  },
  {
    id: 210, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client with osteoporosis is prescribed alendronate (Fosamax). The nurse should instruct the client to:",
    options: ["A. Take the medication with food and lie down afterward.", "B. Take the medication first thing in the morning with water, and remain upright for at least 30 minutes.", "C. Take the medication at bedtime.", "D. Crush the tablet for easier swallowing."],
    answer: "B", explanation: "Bisphosphonates like alendronate must be taken on an empty stomach first thing in the morning with a full glass of plain water, and the client should remain upright (sitting or standing) for at least 30 minutes to reduce the risk of esophageal irritation and improve absorption."
  },
  {
    id: 211, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client with rheumatoid arthritis reports morning joint stiffness. The nurse should recommend:",
    options: ["A. Complete rest of the joints with no movement.", "B. A warm shower and gentle range-of-motion exercises in the morning.", "C. Applying ice to all joints immediately upon waking.", "D. Avoiding all physical activity permanently."],
    answer: "B", explanation: "Warm showers and gentle range-of-motion exercises help reduce morning stiffness in rheumatoid arthritis by improving joint mobility and circulation, without overstressing inflamed joints."
  },
  {
    id: 212, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client with gout is prescribed allopurinol. The nurse should teach the client that this medication works by:",
    options: ["A. Increasing uric acid production.", "B. Decreasing uric acid production.", "C. Directly relieving acute joint pain.", "D. Curing gout permanently after one dose."],
    answer: "B", explanation: "Allopurinol is a xanthine oxidase inhibitor that decreases uric acid production, helping prevent future gout attacks. It is used for long-term prevention, not for treating acute gout flares."
  },
  {
    id: 213, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client with a new below-the-knee amputation should be positioned to prevent contractures by:",
    options: ["A. Keeping a pillow under the residual limb at all times.", "B. Avoiding prolonged flexion of the hip and knee; encouraging periods of prone positioning.", "C. Elevating the limb continuously with the hip flexed.", "D. Keeping the limb in a dependent position only."],
    answer: "B", explanation: "Prolonged flexion of the hip and knee (such as with a pillow constantly under the residual limb) increases the risk of flexion contractures. Periods of prone positioning help stretch the hip flexors and prevent contracture formation."
  },
  {
    id: 214, subject: "Anatomy & Physiology", topic: "Musculoskeletal",
    year: "NMCN Review", question: "The type of joint that allows the most movement, such as the shoulder and hip joints, is the:",
    options: ["A. Hinge joint", "B. Ball-and-socket joint", "C. Pivot joint", "D. Suture joint"],
    answer: "B", explanation: "Ball-and-socket joints, such as the shoulder and hip, allow the greatest range of motion, including flexion, extension, abduction, adduction, and rotation."
  },
  {
    id: 215, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client is placed in skeletal traction with pins. The nurse should assess pin sites for signs of:",
    options: ["A. Normal healing only, with no other concerns.", "B. Infection, such as redness, drainage, or odor.", "C. Excessive callus formation.", "D. Complete bone remodeling."],
    answer: "B", explanation: "Pin sites in skeletal traction are a portal of entry for infection and must be assessed regularly for redness, purulent drainage, odor, and increased pain, which would indicate pin site infection requiring intervention."
  },
  {
    id: 216, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client with a new plaster cast should be taught that the cast will feel warm during the first 24 hours because:",
    options: ["A. This indicates infection.", "B. This is due to the chemical/exothermic drying process of the cast.", "C. This means the cast is too tight.", "D. This is a sign of poor circulation."],
    answer: "B", explanation: "Plaster casts generate heat through an exothermic chemical reaction as they dry, which is a normal, expected finding within the first 24 hours and not a cause for concern."
  },
  {
    id: 217, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client with systemic lupus erythematosus (SLE) should be taught to avoid which of the following to prevent disease exacerbation?",
    options: ["A. Sun exposure and ultraviolet light.", "B. Rest and stress management.", "C. Balanced nutrition.", "D. Regular follow-up appointments."],
    answer: "A", explanation: "Sun exposure and ultraviolet light are known triggers for SLE flares, often causing the characteristic malar (butterfly) rash and systemic exacerbation. Clients should be taught to use sunscreen and protective clothing."
  },
  {
    id: 218, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client is diagnosed with osteomyelitis. The nurse understands this condition is:",
    options: ["A. A degenerative joint disease.", "B. An infection of the bone, often requiring prolonged IV antibiotics.", "C. A benign bone tumor.", "D. A metabolic bone disorder unrelated to infection."],
    answer: "B", explanation: "Osteomyelitis is an infection of the bone, commonly caused by Staphylococcus aureus, requiring prolonged (often 4-6 weeks or more) IV antibiotic therapy and sometimes surgical debridement."
  },
  {
    id: 219, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client following spinal fusion surgery should be taught to:",
    options: ["A. Bend at the waist to pick up objects from the floor.", "B. Log-roll when turning in bed and avoid twisting the spine.", "C. Twist the torso freely without restriction.", "D. Avoid all mobility indefinitely."],
    answer: "B", explanation: "After spinal fusion, log-rolling (turning the body as a unit while keeping the spine aligned) is essential to prevent twisting or bending the fused spinal segment, which could disrupt healing."
  },
  {
    id: 220, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client with a sprained ankle is taught the RICE method for initial management. RICE stands for:",
    options: ["A. Rest, Ice, Compression, Elevation", "B. Rest, Injection, Cast, Exercise", "C. Reduce, Immobilize, Compress, Elevate", "D. Rest, Ice, Circulation, Exercise"],
    answer: "A", explanation: "RICE (Rest, Ice, Compression, Elevation) is the standard initial first-aid approach for soft tissue injuries like sprains, reducing swelling, pain, and further injury in the acute phase."
  },
{
    id: 221, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with type 1 diabetes presents with fruity breath odor, Kussmaul respirations, and blood glucose of 450 mg/dL. The nurse suspects:",
    options: ["A. Hypoglycemia", "B. Diabetic ketoacidosis (DKA)", "C. Hyperosmolar hyperglycemic state only", "D. Somogyi effect"],
    answer: "B", explanation: "Fruity (acetone) breath odor, Kussmaul respirations (deep, rapid breathing to compensate for metabolic acidosis), and markedly elevated blood glucose are classic findings of diabetic ketoacidosis, a life-threatening complication of type 1 diabetes."
  },
  {
    id: 222, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "The PRIORITY nursing intervention for a client in diabetic ketoacidosis is:",
    options: ["A. Administering oral hypoglycemic agents.", "B. IV fluid resuscitation followed by IV insulin therapy.", "C. Restricting all fluids.", "D. Administering glucagon immediately."],
    answer: "B", explanation: "The priority in DKA management is fluid resuscitation with IV isotonic saline to correct dehydration and improve perfusion, followed by IV regular insulin to lower blood glucose and halt ketone production, along with careful potassium monitoring."
  },
  {
    id: 223, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with diabetes reports shakiness, sweating, and confusion. Blood glucose is 52 mg/dL. The nurse's PRIORITY action, if the client is conscious and able to swallow, is to:",
    options: ["A. Administer 15-20 grams of a fast-acting carbohydrate.", "B. Administer regular insulin.", "C. Withhold all food until the physician arrives.", "D. Encourage the client to exercise to raise blood sugar."],
    answer: "A", explanation: "For a conscious client with hypoglycemia (glucose <70 mg/dL), the nurse should give 15-20 grams of a fast-acting carbohydrate (e.g., glucose tablets, juice), then recheck blood glucose in 15 minutes and repeat if needed (the 'rule of 15')."
  },
  {
    id: 224, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with Graves' disease (hyperthyroidism) is scheduled for radioactive iodine therapy. The nurse should teach the client that after treatment, they should:",
    options: ["A. Resume close contact with pregnant women and infants immediately.", "B. Avoid close, prolonged contact with pregnant women and young children for several days as instructed.", "C. Expect immediate resolution of all symptoms.", "D. Discontinue all thyroid monitoring afterward."],
    answer: "B", explanation: "Radioactive iodine emits radiation that can pose a risk to others, particularly pregnant women and young children. Clients are instructed to limit close, prolonged contact with these groups for a specified period following treatment as radiation safety precautions."
  },
  {
    id: 225, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with hyperthyroidism develops a fever of 104°F, tachycardia, and severe agitation postoperatively after a thyroidectomy. The nurse suspects:",
    options: ["A. Normal postoperative recovery.", "B. Thyroid storm (thyrotoxic crisis).", "C. Hypothyroidism.", "D. Wound infection only."],
    answer: "B", explanation: "Thyroid storm is a life-threatening complication of hyperthyroidism, often precipitated by surgery, infection, or stress, presenting with high fever, severe tachycardia, agitation, and can progress to cardiovascular collapse if untreated."
  },
  {
    id: 226, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client following a thyroidectomy develops tingling around the mouth and fingers, along with muscle twitching. The nurse should assess for:",
    options: ["A. Trousseau's and Chvostek's signs, indicating hypocalcemia.", "B. Signs of hyperkalemia.", "C. Signs of hyperglycemia.", "D. Signs of fluid volume excess."],
    answer: "A", explanation: "Accidental removal or damage to the parathyroid glands during thyroidectomy can cause hypocalcemia. Trousseau's sign (carpal spasm with BP cuff inflation) and Chvostek's sign (facial twitching with tapping the facial nerve) are classic assessment findings for hypocalcemia/tetany."
  },
  {
    id: 227, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with Addison's disease (adrenal insufficiency) should be taught to:",
    options: ["A. Abruptly stop corticosteroid medication if feeling well.", "B. Never abruptly discontinue corticosteroid therapy and to increase the dose during illness or stress as directed.", "C. Restrict sodium intake severely.", "D. Avoid all physician follow-up once stable."],
    answer: "B", explanation: "Clients with Addison's disease require lifelong corticosteroid replacement and must never abruptly stop the medication, as this can precipitate a life-threatening adrenal crisis. Doses are typically increased during periods of illness, surgery, or significant stress, per physician guidance."
  },
  {
    id: 228, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with Cushing's syndrome (excess cortisol) would be expected to exhibit which of the following?",
    options: ["A. Weight loss and hypotension.", "B. Moon face, truncal obesity, and hypertension.", "C. Hyperpigmentation and hypoglycemia.", "D. Muscle hypertrophy."],
    answer: "B", explanation: "Cushing's syndrome results from excess cortisol and classically presents with moon face, truncal (central) obesity with thin extremities, buffalo hump, hypertension, hyperglycemia, and muscle wasting."
  },
  {
    id: 229, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with syndrome of inappropriate antidiuretic hormone (SIADH) would be expected to have which laboratory finding?",
    options: ["A. Hypernatremia and dilute urine", "B. Hyponatremia with concentrated urine", "C. Hyperglycemia", "D. Elevated serum osmolality"],
    answer: "B", explanation: "SIADH causes excessive water retention due to inappropriate ADH secretion, resulting in dilutional hyponatremia with concentrated urine (high urine osmolality) despite low serum osmolality."
  },
  {
    id: 230, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with diabetes insipidus presents with polyuria and polydipsia. This condition results from a deficiency of:",
    options: ["A. Insulin", "B. Antidiuretic hormone (ADH)", "C. Cortisol", "D. Thyroid hormone"],
    answer: "B", explanation: "Diabetes insipidus results from insufficient ADH secretion (central) or renal insensitivity to ADH (nephrogenic), causing the kidneys to excrete large volumes of dilute urine, leading to polyuria and compensatory polydipsia."
  },
  {
    id: 231, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client is prescribed levothyroxine for hypothyroidism. The nurse should instruct the client to take this medication:",
    options: ["A. With food to enhance absorption.", "B. On an empty stomach in the morning, at least 30-60 minutes before food.", "C. At bedtime with a snack.", "D. Only when symptoms are present."],
    answer: "B", explanation: "Levothyroxine should be taken on an empty stomach, first thing in the morning, at least 30-60 minutes before eating, to ensure consistent absorption, and should be taken at the same time each day."
  },
  {
    id: 232, subject: "Anatomy & Physiology", topic: "Endocrine",
    year: "NMCN Review", question: "Which gland is often referred to as the 'master gland' because it regulates the function of other endocrine glands?",
    options: ["A. Thyroid gland", "B. Adrenal gland", "C. Pituitary gland", "D. Pancreas"],
    answer: "C", explanation: "The pituitary gland is called the 'master gland' because it secretes hormones that regulate the function of other endocrine glands, including the thyroid, adrenal glands, and gonads."
  },
  {
    id: 233, subject: "Medical-Surgical Nursing", topic: "Integumentary",
    year: "NMCN Review", question: "A client has a second-degree (partial-thickness) burn. The nurse would expect the wound to appear:",
    options: ["A. Dry, leathery, and painless.", "B. Red, blistered, moist, and painful.", "C. Charred and black.", "D. White and waxy with no sensation."],
    answer: "B", explanation: "Second-degree (partial-thickness) burns involve the epidermis and part of the dermis, presenting as red, blistered, moist wounds that are very painful due to intact nerve endings. Full-thickness (third-degree) burns, by contrast, are often dry, leathery, and painless due to nerve destruction."
  },
  {
    id: 234, subject: "Medical-Surgical Nursing", topic: "Integumentary",
    year: "NMCN Review", question: "Using the Rule of Nines, a burn covering the entire anterior trunk and both entire arms in an adult would be estimated at approximately:",
    options: ["A. 9%", "B. 18%", "C. 36%", "D. 54%"],
    answer: "C", explanation: "In the adult Rule of Nines, the anterior trunk represents 18% and each entire arm represents 9% (18% for both arms), totaling 18% + 18% = 36% total body surface area."
  },
  {
    id: 235, subject: "Medical-Surgical Nursing", topic: "Integumentary",
    year: "NMCN Review", question: "A client with major burns is at greatest risk for which complication in the first 24-48 hours?",
    options: ["A. Hypervolemia and fluid overload", "B. Hypovolemic shock from fluid shifts", "C. Chronic kidney disease", "D. Skin cancer"],
    answer: "B", explanation: "In the emergent/resuscitative phase of burn injury (first 24-48 hours), massive fluid shifts from the intravascular space into the interstitial space (third spacing) put the client at high risk for hypovolemic shock, requiring aggressive fluid resuscitation."
  },
  {
    id: 236, subject: "Medical-Surgical Nursing", topic: "Integumentary",
    year: "NMCN Review", question: "A client with a stage 2 pressure injury on the sacrum has a partial-thickness skin loss with a shallow, open ulcer. Appropriate nursing care includes:",
    options: ["A. Massaging the area to increase circulation.", "B. Repositioning the client at least every 2 hours and using appropriate wound dressings.", "C. Applying a heating pad directly to the area.", "D. Leaving the wound completely uncovered and exposed at all times."],
    answer: "B", explanation: "Frequent repositioning (at least every 2 hours) relieves pressure and prevents worsening of the injury, along with appropriate moist wound healing dressings. Massaging reddened or injured skin is contraindicated as it can cause further tissue damage."
  },
  {
    id: 237, subject: "Medical-Surgical Nursing", topic: "Integumentary",
    year: "NMCN Review", question: "A client is diagnosed with cellulitis of the lower leg. The nurse would expect which of the following findings?",
    options: ["A. Cool, pale skin with no tenderness.", "B. Warm, red, swollen, tender skin, possibly with fever.", "C. A well-demarcated, painless white patch.", "D. Excessive hair growth in the area."],
    answer: "B", explanation: "Cellulitis is a bacterial skin infection presenting with warmth, erythema, edema, tenderness, and often systemic symptoms like fever, due to the inflammatory response to infection in the skin and subcutaneous tissue."
  },
  {
    id: 238, subject: "Medical-Surgical Nursing", topic: "Integumentary",
    year: "NMCN Review", question: "A client with psoriasis is prescribed topical corticosteroids. The nurse should teach the client that long-term use can cause:",
    options: ["A. Skin thickening (hypertrophy).", "B. Skin thinning (atrophy) and striae.", "C. Increased pigmentation only.", "D. Permanent cure with no recurrence."],
    answer: "B", explanation: "Long-term or excessive use of topical corticosteroids can cause skin thinning (atrophy), striae, and telangiectasia, so use should be limited to the prescribed duration and area."
  },
  {
    id: 239, subject: "Medical-Surgical Nursing", topic: "Integumentary",
    year: "NMCN Review", question: "A client presents with a new asymmetrical mole with irregular borders, multiple colors, and a diameter greater than 6mm. The nurse should be concerned about:",
    options: ["A. A benign nevus.", "B. Malignant melanoma (based on ABCDE criteria).", "C. Normal skin aging.", "D. A insect bite."],
    answer: "B", explanation: "The ABCDE criteria (Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolving) are used to screen for malignant melanoma. A lesion meeting these criteria warrants prompt dermatological evaluation and biopsy."
  },
  {
    id: 240, subject: "Anatomy & Physiology", topic: "Integumentary",
    year: "NMCN Review", question: "The layer of skin that contains blood vessels, nerve endings, and hair follicles is the:",
    options: ["A. Epidermis", "B. Dermis", "C. Subcutaneous tissue (hypodermis)", "D. Stratum corneum"],
    answer: "B", explanation: "The dermis, located beneath the epidermis, contains blood vessels, nerve endings, hair follicles, and sweat glands, providing structural support and sensation to the skin."
  },
  {
    id: 241, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client with sickle cell disease is experiencing a vaso-occlusive crisis. The PRIORITY nursing interventions include:",
    options: ["A. Fluid restriction and applying cold compresses.", "B. Aggressive hydration, oxygen therapy, and pain management.", "C. Withholding pain medication to avoid addiction.", "D. Encouraging strenuous activity."],
    answer: "B", explanation: "A vaso-occlusive crisis in sickle cell disease is caused by sickled cells obstructing blood flow, causing severe pain and tissue ischemia. Management focuses on aggressive IV hydration (to reduce blood viscosity), oxygen therapy, and adequate pain management (often requiring opioids)."
  },
  {
    id: 242, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client with sickle cell disease should be taught to avoid which of the following, as they can precipitate a crisis?",
    options: ["A. Adequate hydration.", "B. Dehydration, extreme temperatures, and high altitudes.", "C. Regular rest.", "D. Prophylactic vaccinations."],
    answer: "B", explanation: "Dehydration, extreme cold or heat, high altitudes (low oxygen environments), infection, and stress are known triggers that can precipitate sickling of red blood cells and lead to a vaso-occlusive crisis."
  },
  {
    id: 243, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client with iron-deficiency anemia is prescribed oral ferrous sulfate. The nurse should instruct the client that this medication may cause:",
    options: ["A. Bright yellow stools.", "B. Dark, tarry stools (harmless discoloration) and possible constipation.", "C. Immediate resolution of anemia within 24 hours.", "D. Hair loss as a common side effect."],
    answer: "B", explanation: "Oral iron supplements commonly cause dark or greenish-black stools (a harmless side effect from unabsorbed iron) and constipation. Clients should be reassured that stool discoloration is expected and taught measures to manage constipation, such as increased fluid and fiber intake."
  },
  {
    id: 244, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client with pernicious anemia requires lifelong treatment with:",
    options: ["A. Oral iron supplements.", "B. Vitamin B12 injections.", "C. Folic acid supplements only.", "D. Blood transfusions monthly."],
    answer: "B", explanation: "Pernicious anemia results from a lack of intrinsic factor (needed for vitamin B12 absorption), so oral B12 is poorly absorbed. Clients require lifelong vitamin B12 injections (or high-dose oral/intranasal forms in some cases) to prevent recurrence and neurological complications."
  },
  {
    id: 245, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client is receiving a blood transfusion and develops chills, fever, back pain, and hypotension within 15 minutes. The nurse's FIRST action is to:",
    options: ["A. Slow the infusion rate and monitor.", "B. Stop the transfusion immediately, keep the IV line open with normal saline, and notify the physician.", "C. Administer acetaminophen and continue the transfusion.", "D. Increase the infusion rate to complete it quickly."],
    answer: "B", explanation: "These symptoms suggest an acute hemolytic transfusion reaction, a medical emergency. The nurse must immediately stop the transfusion, keep the IV line patent with normal saline (using new tubing), notify the physician, and monitor the client closely."
  },
  {
    id: 246, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client with hemophilia A has a deficiency in which clotting factor?",
    options: ["A. Factor V", "B. Factor VIII", "C. Factor II (prothrombin)", "D. Vitamin K"],
    answer: "B", explanation: "Hemophilia A is caused by a deficiency in clotting factor VIII, resulting in impaired clot formation and increased bleeding risk, particularly into joints and muscles."
  },
  {
    id: 247, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client with HIV has a CD4+ count of 180 cells/mm³. The nurse understands this places the client at risk for:",
    options: ["A. No increased risk, as this is a normal count.", "B. Opportunistic infections, as this count meets the criteria for AIDS.", "C. Only mild, self-limiting infections.", "D. Improved immune function."],
    answer: "B", explanation: "A CD4+ count below 200 cells/mm³ meets the diagnostic criteria for AIDS (Acquired Immunodeficiency Syndrome) and places the client at significantly increased risk for opportunistic infections such as Pneumocystis pneumonia and other AIDS-defining illnesses."
  },
  {
    id: 248, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client is receiving chemotherapy and has a neutrophil count of 400 cells/mm³ (neutropenia). Priority nursing care includes:",
    options: ["A. Encouraging visits from family with any illness.", "B. Neutropenic precautions: hand hygiene, avoiding fresh flowers/raw foods, and limiting exposure to infection sources.", "C. No special precautions are needed.", "D. Encouraging fresh salads and raw fruits for nutrition."],
    answer: "B", explanation: "Severe neutropenia significantly increases infection risk. Neutropenic precautions include strict hand hygiene, avoiding raw/undercooked foods and fresh flowers/plants (which can harbor bacteria/fungi), limiting visitors with illness, and monitoring for even subtle signs of infection."
  },
  {
    id: 249, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client is diagnosed with disseminated intravascular coagulation (DIC). The nurse understands this condition involves:",
    options: ["A. Isolated excessive clotting with no bleeding risk.", "B. Simultaneous widespread clotting and bleeding due to consumption of clotting factors.", "C. A benign, self-resolving condition requiring no treatment.", "D. Isolated bleeding with no clotting component."],
    answer: "B", explanation: "DIC is a complex, life-threatening condition where widespread activation of the clotting cascade consumes platelets and clotting factors, leading paradoxically to both excessive clotting (microthrombi) and severe bleeding, often triggered by sepsis, trauma, or obstetric complications."
  },
  {
    id: 250, subject: "Anatomy & Physiology", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "The primary function of platelets (thrombocytes) in the blood is to:",
    options: ["A. Transport oxygen.", "B. Fight infection.", "C. Assist in blood clotting.", "D. Regulate blood pH."],
    answer: "C", explanation: "Platelets play a critical role in hemostasis by aggregating at sites of vascular injury and forming a platelet plug, initiating the clotting cascade to stop bleeding."
  },
  {
    id: 251, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with type 2 diabetes is prescribed metformin. The nurse should hold this medication before procedures involving IV contrast dye because:",
    options: ["A. It can cause hypoglycemia during the procedure.", "B. It increases the risk of lactic acidosis, especially with contrast-induced renal impairment.", "C. It interferes with the contrast dye's imaging quality.", "D. It has no interaction with contrast dye."],
    answer: "B", explanation: "Metformin is typically held before and for 48 hours after procedures using iodinated IV contrast dye, as contrast can cause transient renal impairment, and reduced clearance of metformin increases the risk of life-threatening lactic acidosis."
  },
  {
    id: 252, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client newly diagnosed with type 1 diabetes asks why they need insulin instead of oral medications. The nurse's best explanation is that type 1 diabetes involves:",
    options: ["A. Insulin resistance only, which oral agents can address.", "B. Little to no insulin production due to autoimmune destruction of pancreatic beta cells, requiring exogenous insulin replacement.", "C. Excess insulin production.", "D. A condition that resolves without treatment."],
    answer: "B", explanation: "Type 1 diabetes results from autoimmune destruction of the insulin-producing beta cells in the pancreas, leading to little or no endogenous insulin production. Because oral hypoglycemic agents largely work by improving insulin sensitivity or stimulating existing beta cells, they are ineffective, and clients require exogenous insulin for survival."
  },
  {
    id: 253, subject: "Medical-Surgical Nursing", topic: "Musculoskeletal",
    year: "NMCN Review", question: "A client following a below-the-knee amputation reports feeling like the amputated foot is still there and painful. The nurse recognizes this as:",
    options: ["A. Phantom limb sensation/pain, a common and real phenomenon.", "B. A sign of psychiatric illness.", "C. Evidence of poor wound healing.", "D. An indication that the amputation was unnecessary."],
    answer: "A", explanation: "Phantom limb sensation and phantom limb pain are common, real neurological phenomena following amputation, believed to result from the brain's continued neural representation of the missing limb. The nurse should validate the client's experience and provide appropriate pain management, not dismiss it."
  },
  {
    id: 254, subject: "Medical-Surgical Nursing", topic: "Integumentary",
    year: "NMCN Review", question: "A client presents with clusters of small, painful vesicles on an erythematous base following a dermatomal (band-like) pattern on the trunk. The nurse suspects:",
    options: ["A. Contact dermatitis", "B. Herpes zoster (shingles)", "C. Impetigo", "D. Psoriasis"],
    answer: "B", explanation: "Herpes zoster (shingles), caused by reactivation of the varicella-zoster virus, classically presents as painful vesicular lesions in a unilateral, dermatomal distribution, reflecting the affected sensory nerve root."
  },
  {
    id: 255, subject: "Medical-Surgical Nursing", topic: "Hematologic/Immune",
    year: "NMCN Review", question: "A client is diagnosed with polycythemia vera. The PRIORITY nursing concern is the increased risk for:",
    options: ["A. Excessive bleeding due to low platelet count.", "B. Thrombosis due to increased blood viscosity.", "C. Severe anemia.", "D. Hypoglycemia."],
    answer: "B", explanation: "Polycythemia vera causes an overproduction of red blood cells, increasing blood viscosity and significantly raising the risk of thrombosis (stroke, MI, DVT). Management often includes therapeutic phlebotomy to reduce red cell mass."
  },
  {
    id: 256, subject: "Medical-Surgical Nursing", topic: "Renal/Genitourinary",
    year: "NMCN Review", question: "A client is scheduled for peritoneal dialysis. The nurse should monitor the dialysate outflow for which finding, which would indicate peritonitis?",
    options: ["A. Clear, pale yellow outflow.", "B. Cloudy, turbid outflow with abdominal pain and fever.", "C. Consistent outflow volume equal to inflow.", "D. Slightly pink-tinged outflow after the first exchange only."],
    answer: "B", explanation: "Cloudy or turbid dialysate outflow, accompanied by abdominal pain, tenderness, and fever, is the classic sign of peritonitis, a serious complication of peritoneal dialysis requiring prompt treatment with antibiotics."
  },
  {
    id: 257, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "A client with long-standing diabetes reports numbness and tingling in both feet in a stocking-glove distribution. The nurse recognizes this as:",
    options: ["A. Diabetic nephropathy.", "B. Diabetic peripheral neuropathy.", "C. Diabetic retinopathy.", "D. A normal effect of aging unrelated to diabetes."],
    answer: "B", explanation: "Diabetic peripheral neuropathy, a common microvascular complication of long-standing diabetes, causes numbness, tingling, and burning pain typically starting in the feet and progressing in a symmetric 'stocking-glove' distribution, increasing the risk for unnoticed foot injuries and ulcers."
  },
  {
    id: 258, subject: "Medical-Surgical Nursing", topic: "Endocrine",
    year: "NMCN Review", question: "As part of diabetic foot care teaching, the nurse should instruct the client to:",
    options: ["A. Soak the feet in hot water daily.", "B. Inspect the feet daily for cuts, blisters, or redness, and wear well-fitting shoes.", "C. Walk barefoot at home to toughen the skin.", "D. Trim corns and calluses themselves with a razor blade."],
    answer: "B", explanation: "Daily foot inspection is critical for diabetic clients due to peripheral neuropathy (reduced sensation) and impaired healing/circulation. Clients should never walk barefoot, should wear well-fitting shoes, and should have corns/calluses professionally treated rather than self-treating, which risks injury and infection."
  },
];

export const SUBJECTS = [...new Set(PAST_QUESTIONS.map(q => q.subject))];
export const YEARS = [...new Set(PAST_QUESTIONS.map(q => q.year))].sort().reverse();
export const TOPICS = [...new Set(PAST_QUESTIONS.map(q => q.topic))];
