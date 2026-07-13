const GROQ_API = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const CLINICAL_CATEGORIES = [
  { id: "overview",   label: "Overview",         short: "OVR" },
  { id: "symptoms",   label: "Symptoms & Signs",  short: "SYM" },
  { id: "diagnosis",  label: "Diagnosis",         short: "DX"  },
  { id: "treatment",  label: "Treatment",         short: "TX"  },
  { id: "drugs",      label: "Drugs & Dosage",    short: "DRG" },
  { id: "nursing",    label: "Nursing Care Plan", short: "NCP" },
  { id: "references", label: "References",        short: "REF" },
];

export const BODY_CATEGORIES = [
  { id: "anatomy",      label: "Anatomy",         short: "ANT" },
  { id: "physiology",   label: "Physiology",      short: "PHY" },
  { id: "biochemistry", label: "Biochemistry",    short: "BCH" },
  { id: "histology",    label: "Histology",       short: "HIS" },
  { id: "embryology",   label: "Embryology",      short: "EMB" },
  { id: "pathophys",    label: "Pathophysiology", short: "PPH" },
];

export const CLINICAL_SEARCHES = [
  "Hypertension","Type 2 Diabetes","Pneumonia","Sepsis",
  "Heart Failure","Stroke","Appendicitis","Preeclampsia",
  "Anemia","DVT","COPD","Meningitis","Malaria","Typhoid Fever",
  "Tuberculosis","Asthma","Acute Kidney Injury","Liver Cirrhosis",
  "Eclampsia","Sickle Cell Crisis","Cholera","COVID-19 Complications",
];

export const BODY_SEARCHES = [
  "Heart anatomy","Kidney anatomy","Brachial plexus","Cranial nerves",
  "Brain anatomy","Spinal cord","Lymphatic system","Reproductive system",
  "Cardiac cycle","Renal physiology","Respiratory physiology",
  "Action potential","Muscle contraction","Blood coagulation",
  "Immune response","GI physiology","Hormonal regulation",
  "Krebs cycle","Glycolysis","ATP production","Protein synthesis",
  "Lipid metabolism","DNA replication","Acid-base balance",
  "Epithelial tissue","Connective tissue","Bone histology","Blood cells",
  "Liver histology","Kidney histology","Nervous tissue",
  "Fetal development","Placenta formation","Neural tube development","Organogenesis",
];

export const BODY_SYSTEMS = [
  { name: "Cardiovascular", topics: ["Heart anatomy","Cardiac cycle","Blood pressure regulation","Coronary circulation","Cardiac conduction system"] },
  { name: "Respiratory",    topics: ["Lung anatomy","Respiratory physiology","Gas exchange","Ventilation-perfusion ratio","Surfactant function"] },
  { name: "Renal",          topics: ["Kidney anatomy","Nephron function","Glomerular filtration","Tubular reabsorption","Acid-base balance"] },
  { name: "Nervous",        topics: ["Brain anatomy","Spinal cord","Cranial nerves","Action potential","Neurotransmitters","Blood-brain barrier"] },
  { name: "Endocrine",      topics: ["Pituitary gland","Thyroid physiology","Adrenal glands","Insulin secretion","Hormonal feedback loops"] },
  { name: "Musculoskeletal",topics: ["Bone histology","Muscle contraction","Joint anatomy","Brachial plexus","Calcium regulation"] },
  { name: "Gastrointestinal",topics: ["GI physiology","Liver anatomy","Pancreatic enzymes","Bile production","Intestinal absorption"] },
  { name: "Haematology",    topics: ["Blood cells","Blood coagulation","Haematopoiesis","Immune response","Complement system"] },
  { name: "Reproductive",   topics: ["Reproductive system","Menstrual cycle","Fetal development","Placenta formation","Hormonal control"] },
  { name: "Biochemistry",   topics: ["Krebs cycle","Glycolysis","ATP production","Protein synthesis","Lipid metabolism","DNA replication"] },
];

export const DRUG_CLASSES = [
  { name: "Antihypertensives", drugs: ["Amlodipine","Lisinopril","Hydralazine","Metoprolol","Losartan"] },
  { name: "Antibiotics",       drugs: ["Amoxicillin","Ceftriaxone","Ciprofloxacin","Metronidazole","Gentamicin"] },
  { name: "Analgesics",        drugs: ["Morphine","Paracetamol","Ibuprofen","Tramadol","Codeine"] },
  { name: "Antidiabetics",     drugs: ["Metformin","Insulin Glargine","Glibenclamide","Sitagliptin"] },
  { name: "Diuretics",         drugs: ["Furosemide","Spironolactone","Hydrochlorothiazide","Mannitol"] },
  { name: "Obstetrics",        drugs: ["Oxytocin","Magnesium Sulfate","Misoprostol","Nifedipine"] },
  { name: "Cardiovascular",    drugs: ["Digoxin","Warfarin","Heparin","Atorvastatin","Aspirin"] },
  { name: "Respiratory",       drugs: ["Salbutamol","Ipratropium","Budesonide","Theophylline"] },
  { name: "Antimalarials",     drugs: ["Artemether-Lumefantrine","Chloroquine","Quinine","Artesunate"] },
  { name: "CNS",               drugs: ["Diazepam","Phenytoin","Haloperidol","Amitriptyline","Levodopa"] },
];

const CLINICAL_PROMPTS = {
  overview: (q) => `You are MediSearch AI, a clinical knowledge engine for final-year nursing students.
Provide a comprehensive clinical overview of: "${q}"
Sections: ## Definition & Classification, ## Epidemiology & Prevalence, ## Pathophysiology, ## Etiology & Risk Factors, ## Clinical Significance.
Use precise medical terminology. Include epidemiological data and statistics. Format lists with bullet points.`,

  symptoms: (q) => `You are MediSearch AI, a clinical knowledge engine for final-year nursing students.
Provide detailed clinical presentation of: "${q}"
Sections: ## Cardinal Symptoms (Subjective), ## Clinical Signs (Objective), ## Vital Sign Abnormalities (with specific values), ## Laboratory Findings (with normal reference ranges and abnormal values), ## Imaging Findings, ## Symptom Progression & Staging, ## Complications to Monitor.
Include specific numbers, cut-off values, and clinical descriptors.`,

  diagnosis: (q) => `You are MediSearch AI, a clinical knowledge engine for final-year nursing students.
Provide full diagnostic workup for: "${q}"
Sections: ## Diagnostic Criteria (gold standard — WHO, DSM, ACC/AHA where applicable), ## History Taking (key clinical questions), ## Physical Examination Findings, ## Laboratory Investigations (with expected results), ## Imaging & Special Tests, ## Differential Diagnoses (rule-in vs rule-out), ## Scoring Systems & Clinical Tools (Wells, SOFA, GCS, etc.).
Include sensitivity/specificity and cut-off values.`,

  treatment: (q) => `You are MediSearch AI, a clinical knowledge engine for final-year nursing students.
Provide complete evidence-based treatment protocols for: "${q}"
Sections: ## Emergency & Acute Management (first-hour priorities), ## First-Line Pharmacological Treatment, ## Second-Line & Adjunct Therapy, ## Non-Pharmacological Interventions, ## Surgical or Procedural Options, ## Monitoring Parameters, ## Treatment Targets (specific values), ## Complications Management, ## Prognosis & Outcomes.
Reference WHO, NICE, AHA, or relevant society guidelines.`,

  drugs: (q) => `You are MediSearch AI, a clinical knowledge engine for final-year nursing students.
List ALL medications used for: "${q}" — first-line, second-line, adjunct, and emergency drugs.
For each drug provide: Drug class header, Generic name (Brand name), Mechanism of action, Specific dosage (dose/route/frequency), Onset and duration, Absolute contraindications, Common and serious adverse effects, Clinically significant drug interactions, Nursing considerations and monitoring parameters.`,

  nursing: (q) => `You are MediSearch AI, a clinical knowledge engine for final-year nursing students.
Provide a complete evidence-based nursing care plan for: "${q}"
Sections: ## Nursing Assessment (subjective and objective data), ## Priority Nursing Diagnoses — list 5 in NANDA-I format (Problem related to Etiology as evidenced by Data), ## Nursing Interventions for each diagnosis (independent, collaborative, with rationale), ## Expected Outcomes in SMART format, ## Patient and Family Education, ## Discharge Planning, ## Multidisciplinary Referrals.
Use NANDA-I 2021-2023 terminology throughout.`,

  references: (q) => `You are MediSearch AI, a clinical knowledge engine for final-year nursing students.
Provide academic and evidence-based references for: "${q}"
Sections: ## International Clinical Practice Guidelines (WHO, CDC, NICE, AHA, ESC), ## Regional/African Guidelines where applicable, ## Landmark Clinical Trials & Studies, ## Recommended Nursing Textbooks (Medical-Surgical, Pharmacology, Pathophysiology), ## Online Evidence-Based Resources, ## Key Journals, ## Clinical Mnemonics & Study Aids.`,
};

const BODY_PROMPTS = {
  anatomy: (q) => `You are MediSearch AI, an expert anatomy resource for final-year nursing students.
Provide comprehensive anatomical detail on: "${q}"
Sections: ## Location & Anatomical Position, ## Gross Structure (shape, dimensions, surfaces, borders), ## Internal Structure & Subdivisions, ## Blood Supply (named arteries and veins), ## Lymphatic Drainage, ## Nerve Supply (specific nerves and plexuses), ## Anatomical Relations (adjacent structures), ## Surface Anatomy & Palpable Landmarks, ## Clinical Correlates.
Use precise anatomical terminology. Include specific measurements and named structures.`,

  physiology: (q) => `You are MediSearch AI, an expert physiology resource for final-year nursing students.
Provide comprehensive physiological explanation of: "${q}"
Sections: ## Overview & Biological Purpose, ## Mechanism (detailed step-by-step cellular and molecular process), ## Regulatory Factors (hormones, neural input, feedback loops), ## Normal Reference Values (specific numbers with units), ## Integration with Other Body Systems, ## Factors That Alter Function, ## Applied Clinical Physiology, ## Nursing Relevance.
Include specific values, timings, and clinical applications.`,

  biochemistry: (q) => `You are MediSearch AI, an expert biochemistry resource for final-year nursing students.
Explain in full detail: "${q}"
Sections: ## Biological Significance, ## Cellular Location, ## Step-by-Step Pathway (numbered steps with key enzymes and intermediates), ## Substrates, Products & Cofactors, ## Energy Yield (ATP produced or consumed), ## Regulatory Enzymes (activators and inhibitors), ## Connections to Other Metabolic Pathways, ## Clinical Relevance in Disease, ## Pharmacological Drug Targets, ## Nursing Relevance.
Include molecule names, enzyme names, and specific energy values.`,

  histology: (q) => `You are MediSearch AI, an expert histology resource for final-year nursing students.
Describe in full histological detail: "${q}"
Sections: ## Tissue Classification, ## Microscopic Appearance on H&E Stain, ## Cell Types Present (name, morphology, function of each), ## Extracellular Matrix & Fibres, ## Special Stains & What They Demonstrate, ## Electron Microscopy Features, ## Functional Significance of Each Component, ## Regional Variations, ## Pathological Changes & Clinical Significance.
Include staining characteristics and diagnostic relevance.`,

  embryology: (q) => `You are MediSearch AI, an expert embryology resource for final-year nursing students.
Explain the embryological development of: "${q}"
Sections: ## Germ Layer of Origin (ectoderm/mesoderm/endoderm), ## Developmental Timeline (specific weeks and days), ## Key Developmental Stages (step by step), ## Molecular Signals & Induction, ## Critical Periods, ## Teratogens & Their Effects, ## Congenital Anomalies When Development Fails, ## Fetal vs Postnatal Structure, ## Clinical & Nursing Correlates.
Include specific embryological weeks and named developmental landmarks.`,

  pathophys: (q) => `You are MediSearch AI, an expert pathophysiology resource for final-year nursing students.
Explain the pathophysiology of: "${q}"
Sections: ## Normal Baseline Function, ## Initiating Event or Trigger, ## Cellular & Molecular Mechanisms of Injury, ## Cascade of Pathological Events (step by step), ## Compensatory Mechanisms, ## When Compensation Fails (decompensation), ## Organ & System Consequences, ## Clinical Manifestations Explained by Pathophysiology (link each sign/symptom to its mechanism), ## Nursing Implications.`,
};

async function callGroq(prompt) {
  const response = await fetch(GROQ_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 2000,
      temperature: 0.3,
    }),
  });
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.error?.message || "API error " + response.status);
  }
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
}

export async function fetchMedicalData(query, category, isBodyMode = false) {
  const promptFn = isBodyMode ? BODY_PROMPTS[category] : CLINICAL_PROMPTS[category];
  const prompt = promptFn ? promptFn(query) : CLINICAL_PROMPTS.overview(query);
  return await callGroq(prompt);
}

export async function fetchDrugInfo(drugName) {
  const prompt = `You are a clinical pharmacology expert providing drug reference information for nursing students.
Provide a complete drug monograph for: "${drugName}"
Sections:
## Drug Classification — Generic name, brand names, drug class, WHO Essential Medicine status
## Pharmacology — Mechanism of action, Pharmacokinetics (absorption, distribution, metabolism, excretion), Half-life, Protein binding percentage
## Clinical Use — Licensed indications, Adult dosage (dose/route/frequency), Paediatric dosage, Available formulations
## Safety Profile — Absolute contraindications, Relative contraindications, Common adverse effects (incidence %), Serious and rare adverse effects, Clinically significant drug-drug interactions, Drug-food interactions, Pregnancy category (FDA/WHO), Use in renal impairment, Use in hepatic impairment
## Nursing Implications — Pre-administration assessment, Administration technique and precautions, Monitoring parameters (specific values), Patient education points, Antidote or reversal agent if applicable
Be specific with all dosages, percentages, and clinical thresholds.`;
  return await callGroq(prompt);
}

export async function fetchQuizQuestions(topic) {
  const prompt = `Generate 5 multiple-choice questions appropriate for a final-year nursing student exam on: "${topic}".
Return ONLY valid JSON with no markdown formatting or backticks:
{"questions":[{"question":"Full question text?","options":["A. Option","B. Option","C. Option","D. Option"],"answer":"A","explanation":"Clinical explanation of the correct answer referencing anatomy, physiology, pharmacology, or nursing practice as relevant."}]}
Questions should cover a mix of anatomy, physiology, pharmacology, clinical assessment, and nursing interventions as appropriate to the topic. Make them genuinely challenging at finals level.`;
  const text = await callGroq(prompt);
  const clean = text.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}
