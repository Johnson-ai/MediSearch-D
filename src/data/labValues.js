export const LAB_VALUES = [
  // ── FULL BLOOD COUNT ────────────────────────────────────────────────────────
  { test: "Haemoglobin (Male)",       abbr: "Hb",    category: "Full Blood Count",    normal: "13.5–17.5 g/dL",    low: "Anaemia, haemorrhage, haemolysis",              high: "Polycythaemia, dehydration, COPD" },
  { test: "Haemoglobin (Female)",     abbr: "Hb",    category: "Full Blood Count",    normal: "11.5–15.5 g/dL",    low: "Anaemia, pregnancy, chronic disease",           high: "Polycythaemia vera" },
  { test: "Haematocrit (Male)",       abbr: "HCT",   category: "Full Blood Count",    normal: "41–53%",            low: "Anaemia, overhydration",                        high: "Dehydration, polycythaemia" },
  { test: "Haematocrit (Female)",     abbr: "HCT",   category: "Full Blood Count",    normal: "36–46%",            low: "Anaemia, haemorrhage",                          high: "Polycythaemia, burns" },
  { test: "RBC Count (Male)",         abbr: "RBC",   category: "Full Blood Count",    normal: "4.5–5.5 ×10¹²/L",  low: "Anaemia, haemorrhage",                          high: "Polycythaemia" },
  { test: "RBC Count (Female)",       abbr: "RBC",   category: "Full Blood Count",    normal: "3.8–5.0 ×10¹²/L",  low: "Anaemia",                                       high: "Polycythaemia vera" },
  { test: "MCV",                      abbr: "MCV",   category: "Full Blood Count",    normal: "80–100 fL",         low: "Microcytic — iron deficiency, thalassaemia",    high: "Macrocytic — B12/folate deficiency, alcohol" },
  { test: "MCH",                      abbr: "MCH",   category: "Full Blood Count",    normal: "27–33 pg",          low: "Iron deficiency anaemia",                       high: "Macrocytic anaemia" },
  { test: "MCHC",                     abbr: "MCHC",  category: "Full Blood Count",    normal: "315–360 g/L",       low: "Iron deficiency, thalassaemia",                 high: "Hereditary spherocytosis" },
  { test: "White Cell Count",         abbr: "WBC",   category: "Full Blood Count",    normal: "4.0–11.0 ×10⁹/L",  low: "Neutropenia, viral infection, bone marrow failure", high: "Infection, leukaemia, inflammation" },
  { test: "Neutrophils",              abbr: "NEUT",  category: "Full Blood Count",    normal: "2.0–7.5 ×10⁹/L",   low: "Viral infection, chemotherapy, aplastic anaemia", high: "Bacterial infection, stress, steroids" },
  { test: "Lymphocytes",              abbr: "LYMPH", category: "Full Blood Count",    normal: "1.5–4.0 ×10⁹/L",   low: "HIV, steroids, chemotherapy",                   high: "Viral infection, CLL, whooping cough" },
  { test: "Monocytes",                abbr: "MONO",  category: "Full Blood Count",    normal: "0.2–0.8 ×10⁹/L",   low: "Aplastic anaemia, steroid therapy",             high: "TB, malaria, viral infections" },
  { test: "Eosinophils",              abbr: "EOS",   category: "Full Blood Count",    normal: "0.04–0.4 ×10⁹/L",  low: "Acute infection, steroid use",                  high: "Allergy, asthma, parasitic infection" },
  { test: "Platelets",                abbr: "PLT",   category: "Full Blood Count",    normal: "150–400 ×10⁹/L",   low: "Thrombocytopaenia — bleeding risk, ITP, DIC",  high: "Thrombocytosis — infection, malignancy" },

  // ── RENAL FUNCTION ──────────────────────────────────────────────────────────
  { test: "Serum Sodium",             abbr: "Na⁺",   category: "Renal Function",      normal: "135–145 mmol/L",    low: "Hyponatraemia — SIADH, heart failure, diarrhoea", high: "Hypernatraemia — dehydration, DI" },
  { test: "Serum Potassium",          abbr: "K⁺",    category: "Renal Function",      normal: "3.5–5.0 mmol/L",   low: "Hypokalaemia — diuretics, vomiting, diarrhoea", high: "Hyperkalaemia — AKI, ACE inhibitors, Addison's" },
  { test: "Serum Chloride",           abbr: "Cl⁻",   category: "Renal Function",      normal: "95–107 mmol/L",    low: "Vomiting, metabolic alkalosis",                 high: "Dehydration, metabolic acidosis" },
  { test: "Serum Bicarbonate",        abbr: "HCO₃⁻", category: "Renal Function",      normal: "22–29 mmol/L",     low: "Metabolic acidosis — DKA, AKI, diarrhoea",     high: "Metabolic alkalosis — vomiting, diuretics" },
  { test: "Serum Urea",               abbr: "BUN",   category: "Renal Function",      normal: "2.5–7.8 mmol/L",   low: "Liver failure, malnutrition, overhydration",    high: "AKI, CKD, dehydration, GI bleed, high protein" },
  { test: "Serum Creatinine (Male)",  abbr: "Cr",    category: "Renal Function",      normal: "62–106 μmol/L",    low: "Muscle wasting, malnutrition",                  high: "AKI, CKD, rhabdomyolysis" },
  { test: "Serum Creatinine (Female)",abbr: "Cr",    category: "Renal Function",      normal: "44–80 μmol/L",     low: "Muscle wasting, pregnancy",                     high: "AKI, CKD" },
  { test: "eGFR",                     abbr: "eGFR",  category: "Renal Function",      normal: "≥60 ml/min/1.73m²",low: "CKD — <60 for >3 months = CKD",                high: "Not clinically significant" },
  { test: "Uric Acid (Male)",         abbr: "UA",    category: "Renal Function",      normal: "210–420 μmol/L",   low: "Allopurinol therapy, liver disease",             high: "Gout, CKD, diuretics, malignancy" },

  // ── LIVER FUNCTION ──────────────────────────────────────────────────────────
  { test: "Total Bilirubin",          abbr: "TBIL",  category: "Liver Function",      normal: "5–21 μmol/L",      low: "Not clinically significant",                    high: "Jaundice — hepatitis, haemolysis, obstruction" },
  { test: "Direct Bilirubin",         abbr: "DBIL",  category: "Liver Function",      normal: "0–5 μmol/L",       low: "Not significant",                               high: "Obstructive jaundice, hepatitis" },
  { test: "ALT",                      abbr: "ALT",   category: "Liver Function",      normal: "7–40 U/L",         low: "Not significant",                               high: "Hepatocellular damage — hepatitis, drugs, alcohol" },
  { test: "AST",                      abbr: "AST",   category: "Liver Function",      normal: "10–40 U/L",        low: "Not significant",                               high: "Liver disease, MI, muscle damage" },
  { test: "ALP",                      abbr: "ALP",   category: "Liver Function",      normal: "40–130 U/L",       low: "Hypothyroidism, pernicious anaemia",            high: "Cholestasis, bone disease, pregnancy" },
  { test: "GGT",                      abbr: "GGT",   category: "Liver Function",      normal: "8–61 U/L",         low: "Not significant",                               high: "Alcohol use, biliary obstruction, drugs" },
  { test: "Total Protein",            abbr: "TP",    category: "Liver Function",      normal: "60–83 g/L",        low: "Malnutrition, liver disease, nephrotic syndrome", high: "Dehydration, multiple myeloma" },
  { test: "Albumin",                  abbr: "ALB",   category: "Liver Function",      normal: "35–50 g/L",        low: "Malnutrition, liver failure, nephrotic syndrome, sepsis", high: "Dehydration" },

  // ── CARDIAC MARKERS ─────────────────────────────────────────────────────────
  { test: "Troponin I",               abbr: "TnI",   category: "Cardiac Markers",     normal: "<0.04 μg/L",       low: "Not significant",                               high: "MI, myocarditis, PE, heart failure" },
  { test: "CK-MB",                    abbr: "CK-MB", category: "Cardiac Markers",     normal: "<25 U/L",          low: "Not significant",                               high: "MI (rises 4–8h, peaks 12–24h)" },
  { test: "BNP",                      abbr: "BNP",   category: "Cardiac Markers",     normal: "<100 pg/mL",       low: "Not significant",                               high: "Heart failure, cor pulmonale, fluid overload" },
  { test: "NT-proBNP",                abbr: "NT-proBNP",category:"Cardiac Markers",  normal: "<125 pg/mL",       low: "Not significant",                               high: "Heart failure, renal failure" },
  { test: "D-Dimer",                  abbr: "D-D",   category: "Cardiac Markers",     normal: "<0.5 mg/L FEU",    low: "Not significant",                               high: "DVT, PE, DIC — non-specific" },

  // ── ARTERIAL BLOOD GAS ──────────────────────────────────────────────────────
  { test: "pH",                       abbr: "pH",    category: "Arterial Blood Gas",  normal: "7.35–7.45",        low: "Acidosis",                                      high: "Alkalosis" },
  { test: "PaO₂",                     abbr: "PaO₂",  category: "Arterial Blood Gas",  normal: "10.6–13.3 kPa (80–100 mmHg)", low: "Hypoxaemia",              high: "Hyperoxia — oxygen therapy" },
  { test: "PaCO₂",                    abbr: "PaCO₂", category: "Arterial Blood Gas",  normal: "4.7–6.0 kPa (35–45 mmHg)",   low: "Respiratory alkalosis — hyperventilation", high: "Respiratory acidosis — hypoventilation, COPD" },
  { test: "HCO₃⁻ (ABG)",             abbr: "HCO₃⁻", category: "Arterial Blood Gas",  normal: "22–26 mmol/L",     low: "Metabolic acidosis",                            high: "Metabolic alkalosis" },
  { test: "Base Excess",              abbr: "BE",    category: "Arterial Blood Gas",  normal: "-2 to +2 mmol/L",  low: "Metabolic acidosis",                            high: "Metabolic alkalosis" },
  { test: "SaO₂",                     abbr: "SaO₂",  category: "Arterial Blood Gas",  normal: "95–100%",          low: "Hypoxaemia — respiratory failure",              high: "Supplemental oxygen" },

  // ── COAGULATION ─────────────────────────────────────────────────────────────
  { test: "PT",                       abbr: "PT",    category: "Coagulation",         normal: "11–14 seconds",    low: "Not clinically significant",                    high: "Warfarin, liver disease, Vit K deficiency, DIC" },
  { test: "INR",                      abbr: "INR",   category: "Coagulation",         normal: "0.8–1.2 (therapeutic 2.0–3.0)", low: "Hypercoagulable state",    high: "Warfarin therapy, liver disease, DIC" },
  { test: "APTT",                     abbr: "APTT",  category: "Coagulation",         normal: "25–35 seconds",    low: "Not significant",                               high: "Heparin therapy, haemophilia, DIC" },
  { test: "Fibrinogen",               abbr: "FIB",   category: "Coagulation",         normal: "2–4 g/L",          low: "DIC, liver failure, fibrinolysis",              high: "Acute phase response, pregnancy" },

  // ── THYROID FUNCTION ────────────────────────────────────────────────────────
  { test: "TSH",                      abbr: "TSH",   category: "Thyroid Function",    normal: "0.4–4.0 mU/L",    low: "Hyperthyroidism, pituitary failure",            high: "Hypothyroidism, Hashimoto's" },
  { test: "Free T4",                  abbr: "fT4",   category: "Thyroid Function",    normal: "9–23 pmol/L",      low: "Hypothyroidism",                                high: "Hyperthyroidism, T4 therapy" },
  { test: "Free T3",                  abbr: "fT3",   category: "Thyroid Function",    normal: "3.5–7.8 pmol/L",  low: "Hypothyroidism, sick euthyroid",               high: "Hyperthyroidism, T3 toxicosis" },

  // ── GLUCOSE & DIABETES ──────────────────────────────────────────────────────
  { test: "Fasting Glucose",          abbr: "FBG",   category: "Glucose & Diabetes",  normal: "3.9–6.1 mmol/L",  low: "Hypoglycaemia — insulin excess, alcohol",       high: "Diabetes (≥7.0), impaired fasting (6.1–6.9)" },
  { test: "Random Glucose",           abbr: "RBG",   category: "Glucose & Diabetes",  normal: "3.9–7.8 mmol/L",  low: "Hypoglycaemia",                                 high: "Diabetes (≥11.1 with symptoms)" },
  { test: "HbA1c",                    abbr: "HbA1c", category: "Glucose & Diabetes",  normal: "<42 mmol/mol (<6.0%)", low: "Haemolytic anaemia, false low",           high: "Diabetes (≥48), prediabetes (42–47)" },

  // ── INFLAMMATORY MARKERS ────────────────────────────────────────────────────
  { test: "CRP",                      abbr: "CRP",   category: "Inflammatory Markers",normal: "<10 mg/L",         low: "Not significant",                               high: "Infection, inflammation, tissue damage" },
  { test: "ESR (Male)",               abbr: "ESR",   category: "Inflammatory Markers",normal: "<15 mm/hr",        low: "Not significant",                               high: "Infection, autoimmune, malignancy, anaemia" },
  { test: "ESR (Female)",             abbr: "ESR",   category: "Inflammatory Markers",normal: "<20 mm/hr",        low: "Not significant",                               high: "Infection, inflammation, SLE, temporal arteritis" },
  { test: "Procalcitonin",            abbr: "PCT",   category: "Inflammatory Markers",normal: "<0.1 μg/L",        low: "Not significant",                               high: "Bacterial sepsis (>2.0 = severe sepsis)" },
  { test: "Serum Ferritin",           abbr: "FER",   category: "Inflammatory Markers",normal: "20–300 μg/L",      low: "Iron deficiency",                               high: "Iron overload, inflammation, liver disease" },

  // ── LIPID PROFILE ───────────────────────────────────────────────────────────
  { test: "Total Cholesterol",        abbr: "TC",    category: "Lipid Profile",       normal: "<5.0 mmol/L",      low: "Malnutrition, liver disease, hyperthyroidism",  high: "CVD risk, familial hypercholesterolaemia" },
  { test: "LDL Cholesterol",          abbr: "LDL",   category: "Lipid Profile",       normal: "<3.0 mmol/L",      low: "Malnutrition",                                  high: "Atherosclerosis risk, familial hypercholesterolaemia" },
  { test: "HDL Cholesterol (Male)",   abbr: "HDL",   category: "Lipid Profile",       normal: ">1.0 mmol/L",      low: "CVD risk, metabolic syndrome",                  high: "Protective against CVD" },
  { test: "HDL Cholesterol (Female)", abbr: "HDL",   category: "Lipid Profile",       normal: ">1.2 mmol/L",      low: "CVD risk",                                      high: "Protective — exercise increases HDL" },
  { test: "Triglycerides",            abbr: "TG",    category: "Lipid Profile",       normal: "<1.7 mmol/L",      low: "Malnutrition, hyperthyroidism",                 high: "Pancreatitis risk, metabolic syndrome, alcohol" },
];

export const LAB_CATEGORIES = [...new Set(LAB_VALUES.map(l => l.category))];
