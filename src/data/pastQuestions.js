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
];

export const SUBJECTS = [...new Set(PAST_QUESTIONS.map(q => q.subject))];
export const YEARS = [...new Set(PAST_QUESTIONS.map(q => q.year))].sort().reverse();
export const TOPICS = [...new Set(PAST_QUESTIONS.map(q => q.topic))];
