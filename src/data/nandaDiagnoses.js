// Source: NANDA International, Nursing Diagnoses: Definitions and Classification 2021–2023
// Herdman, T.H., Kamitsuru, S., & Lopes, C.T. (Eds.). (2021). NANDA International
// Nursing Diagnoses: Definitions and Classification, 2021-2023 (12th ed.). Thieme.

export const NANDA_DIAGNOSES = [
  // ── DOMAIN 1: HEALTH PROMOTION ──────────────────────────────────────────────
  { code: "00078", label: "Ineffective health management", domain: "Health Promotion",
    definition: "Pattern of regulating and integrating into daily living a therapeutic regimen that is unsatisfactory for meeting specific health goals.",
    related_factors: ["Complexity of therapeutic regimen", "Decisional conflicts", "Insufficient knowledge of therapeutic regimen", "Perceived barriers"],
    defining_characteristics: ["Failure to include treatment in daily living", "Ineffective choices in daily living for meeting health goal", "Reports difficulty with prescribed regimen"] },

  { code: "00188", label: "Risk-prone health behaviour", domain: "Health Promotion",
    definition: "Impaired ability to modify lifestyle/behaviours in a manner that improves health status.",
    related_factors: ["Inadequate comprehension", "Insufficient social support", "Low self-efficacy", "Smoking"],
    defining_characteristics: ["Failure to achieve optimal sense of control", "Minimises health status change", "Failure to take action that prevents health problems"] },

  // ── DOMAIN 2: NUTRITION ─────────────────────────────────────────────────────
  { code: "00002", label: "Imbalanced nutrition: less than body requirements", domain: "Nutrition",
    definition: "Intake of nutrients insufficient to meet metabolic needs.",
    related_factors: ["Biological factors", "Inability to absorb nutrients", "Inability to ingest food", "Psychological factors"],
    defining_characteristics: ["Body weight 20% or more under ideal", "Hyperactive bowel sounds", "Pale mucous membranes", "Weakness of muscles required for swallowing", "Reported food intake less than RDA"] },

  { code: "00025", label: "Risk for imbalanced fluid volume", domain: "Nutrition",
    definition: "Susceptible to a decrease, increase, or rapid shift from one to the other of intravascular, interstitial, and/or intracellular fluid.",
    related_factors: ["Abdominal surgery", "Ascites", "Burns", "Intestinal obstruction", "Pancreatitis", "Trauma"],
    defining_characteristics: [] },

  { code: "00027", label: "Deficient fluid volume", domain: "Nutrition",
    definition: "Decreased intravascular, interstitial, and/or intracellular fluid. This refers to dehydration, water loss alone without change in sodium.",
    related_factors: ["Active fluid volume loss", "Failure of regulatory mechanisms"],
    defining_characteristics: ["Decreased blood pressure", "Decreased pulse volume", "Decreased skin turgor", "Decreased urine output", "Dry skin", "Dry mucous membranes", "Increased body temperature", "Increased haematocrit", "Sudden weight loss"] },

  { code: "00026", label: "Excess fluid volume", domain: "Nutrition",
    definition: "Surplus intake and/or retention of fluid.",
    related_factors: ["Compromised regulatory mechanism", "Excess fluid intake", "Excess sodium intake"],
    defining_characteristics: ["Adventitious breath sounds", "Altered blood pressure", "Anasarca", "Anxiety", "Azotaemia", "Change in mental status", "Decreased haematocrit", "Dyspnoea", "Oedema", "Jugular vein distension", "Oliguria", "Orthopnoea", "Pulmonary congestion"] },

  // ── DOMAIN 3: ELIMINATION ───────────────────────────────────────────────────
  { code: "00016", label: "Impaired urinary elimination", domain: "Elimination & Exchange",
    definition: "Dysfunction in urine elimination.",
    related_factors: ["Anatomic obstruction", "Multiple causality", "Sensory motor impairment", "Urinary tract infection"],
    defining_characteristics: ["Dysuria", "Frequency", "Hesitancy", "Incontinence", "Nocturia", "Retention", "Urgency"] },

  { code: "00011", label: "Constipation", domain: "Elimination & Exchange",
    definition: "Decrease in normal frequency of defaecation accompanied by difficult or incomplete passage of stool.",
    related_factors: ["Abdominal muscle weakness", "Average daily physical activity less than recommended", "Depression", "Emotional disturbance", "Habitually ignores urge to defaecate", "Inadequate dietary habits", "Inadequate fluid intake", "Opioid use"],
    defining_characteristics: ["Abdominal tenderness", "Absence of flatus", "Anorexia", "Atypical presentations in older adults", "Bright-red blood with stool", "Change in bowel pattern", "Decreased frequency", "Decreased volume of stool", "Distended abdomen", "Hard, dry stool"] },

  // ── DOMAIN 4: ACTIVITY/REST ─────────────────────────────────────────────────
  { code: "00032", label: "Ineffective breathing pattern", domain: "Activity/Rest",
    definition: "Inspiration and/or expiration that does not provide adequate ventilation.",
    related_factors: ["Anxiety", "Body position", "Fatigue", "Hyperventilation", "Musculoskeletal impairment", "Neurological immaturity", "Neuromuscular dysfunction", "Pain"],
    defining_characteristics: ["Accessory muscle use", "Altered chest excursion", "Bradypnoea", "Dyspnoea", "Increased anterior-posterior diameter", "Nasal flaring", "Orthopnoea", "Prolonged expiration phase", "Pursed-lip breathing", "Tachypnoea"] },

  { code: "00029", label: "Decreased cardiac output", domain: "Activity/Rest",
    definition: "Inadequate blood pumped by the heart to meet the metabolic demands of the body.",
    related_factors: ["Altered heart rate/rhythm", "Altered preload", "Altered afterload", "Altered contractility"],
    defining_characteristics: ["Altered blood pressure", "Arrhythmia", "Bradycardia", "Decreased peripheral pulses", "Dyspnoea", "Oedema", "Fatigue", "Oliguria", "Tachycardia", "S3 heart sound"] },

  { code: "00085", label: "Impaired physical mobility", domain: "Activity/Rest",
    definition: "Limitation in independent, purposeful physical movement of the body or of one or more extremities.",
    related_factors: ["Activity intolerance", "Anxiety", "Body mass index above normal range", "Cognitive impairment", "Contractures", "Cultural beliefs", "Decreased endurance", "Deficient knowledge", "Discomfort", "Joint stiffness", "Musculoskeletal impairment", "Neuromuscular impairment", "Pain", "Prescribed movement restrictions", "Reluctance to initiate movement", "Sedentary lifestyle", "Sensorium disturbances"],
    defining_characteristics: ["Decreased fine/gross motor skills", "Decreased range of motion", "Difficulty turning", "Dyspnoea on exertion", "Gait changes", "Postural instability", "Slowed movement", "Tremor on movement"] },

  { code: "00093", label: "Fatigue", domain: "Activity/Rest",
    definition: "An overwhelming, sustained sense of exhaustion and decreased capacity for physical and mental work at the usual level.",
    related_factors: ["Anxiety", "Depression", "Environmental humidity", "Humid environment", "Malnutrition", "Non-restorative sleep pattern", "Physiological factors", "Stress"],
    defining_characteristics: ["Decreased performance", "Disinterest in surroundings", "Drowsiness", "Inability to maintain usual physical activity", "Inability to restore energy after sleep", "Insufficient energy", "Introspection", "Lethargy", "Perceived need for additional energy"] },

  { code: "00095", label: "Insomnia", domain: "Activity/Rest",
    definition: "A disruption in amount and quality of sleep that impairs functioning.",
    related_factors: ["Activity level average daily less than recommended", "Anxiety", "Depression", "Environmental disturbances", "Frequent naps", "Inadequate sleep hygiene", "Pharmaceutical agent", "Physical discomfort", "Stressors"],
    defining_characteristics: ["Affect disturbances", "Alteration in concentration", "Alteration in mood", "Decreased health status", "Decreased quality of life", "Difficulty initiating sleep", "Difficulty maintaining sleep state", "Dissatisfaction with sleep", "Early awakening", "Increased accidents", "Non-restorative sleep pattern"] },

  // ── DOMAIN 5: PERCEPTION/COGNITION ─────────────────────────────────────────
  { code: "00128", label: "Acute confusion", domain: "Perception/Cognition",
    definition: "Abrupt onset of reversible disturbances of consciousness, attention, cognition, and perception that develop over a short period of time.",
    related_factors: ["Alteration in sleep-wake cycle", "Dehydration", "Dementia", "Impaired mobility", "Infection", "Pharmaceutical agent", "Substance misuse", "Urine retention"],
    defining_characteristics: ["Agitation", "Alteration in cognitive functioning", "Alteration in level of consciousness", "Alteration in psychomotor activity", "Hallucination", "Misperception", "Restlessness"] },

  // ── DOMAIN 6: SELF-PERCEPTION ───────────────────────────────────────────────
  { code: "00124", label: "Hopelessness", domain: "Self-Perception",
    definition: "Subjective state in which an individual sees limited or no alternatives or personal choices available and is unable to mobilise energy on own behalf.",
    related_factors: ["Chronic stress", "Deteriorating physiological condition", "Isolation", "Long-term stress", "Loss of belief in spiritual power", "Loss of belief in transcendent values"],
    defining_characteristics: ["Decreased affect", "Decreased appetite", "Decreased response to stimuli", "Decreased verbalisations", "Despondent verbal cues", "Inadequate involvement in care", "Passivity", "Shrugging in response to speaker", "Turning away from speaker"] },

  // ── DOMAIN 7: ROLE RELATIONSHIPS ────────────────────────────────────────────
  { code: "00058", label: "Risk for impaired attachment", domain: "Role Relationships",
    definition: "Susceptible to disruption of the interactive process between parent/significant other and child that fosters the development of a protective and nurturing reciprocal relationship.",
    related_factors: ["Anxiety", "Ill child", "Inability of parent to meet personal needs", "Infant-parent separation", "Premature infant", "Substance misuse"],
    defining_characteristics: [] },

  // ── DOMAIN 9: COPING/STRESS TOLERANCE ──────────────────────────────────────
  { code: "00146", label: "Anxiety", domain: "Coping/Stress Tolerance",
    definition: "Vague, uneasy feeling of discomfort or dread accompanied by an autonomic response; a feeling of apprehension caused by anticipation of danger.",
    related_factors: ["Conflict about life goals", "Exposure to toxins", "Familial association", "Interpersonal contagion", "Interpersonal transmission", "Situational crises", "Stress", "Substance misuse", "Threat of death", "Unmet needs"],
    defining_characteristics: ["Behavioural: Diminished productivity, Scanning behaviour, Vigilance", "Affective: Apprehensive, Distressed, Fearful, Feelings of inadequacy", "Physiological: Increased blood pressure, Increased respiration, Trembling", "Sympathetic: Anorexia, Diarrhoea, Dry mouth, Facial flushing, Heart palpitations"] },

  { code: "00148", label: "Fear", domain: "Coping/Stress Tolerance",
    definition: "Response to perceived threat that is consciously recognised as a danger.",
    related_factors: ["Innate origin", "Learned response", "Language barrier", "Phobic stimulus", "Sensory deficit", "Separation from support system"],
    defining_characteristics: ["Report of alarm, apprehension, dread, excitement, jitteriness, panic, terror", "Increased alertness", "Avoidance behaviour", "Decreased self-assurance", "Increased heart rate"] },

  { code: "00136", label: "Grieving", domain: "Coping/Stress Tolerance",
    definition: "A normal complex process that includes emotional, physical, spiritual, social, and intellectual responses and behaviours by which individuals, families, and communities incorporate an actual, anticipated, or perceived loss into their daily lives.",
    related_factors: ["Anticipatory loss of significant object", "Anticipatory loss of significant other", "Death of significant other", "Loss of significant object"],
    defining_characteristics: ["Alteration in activity level", "Alteration in dream pattern", "Alteration in immune function", "Alteration in neuroendocrine function", "Alteration in sleep pattern", "Anger", "Blame", "Despair", "Detachment", "Disorganisation"] },

  // ── DOMAIN 11: SAFETY/PROTECTION ────────────────────────────────────────────
  { code: "00004", label: "Risk for infection", domain: "Safety/Protection",
    definition: "Susceptible to invasion and multiplication of pathogenic organisms, which may compromise health.",
    related_factors: ["Alteration in skin integrity", "Chronic disease", "Decrease in ciliary action", "Immunosuppression", "Inadequate primary defences", "Inadequate secondary defences", "Insufficient knowledge", "Invasive procedures", "Malnutrition", "Obesity", "Smoking", "Stasis of body fluids"],
    defining_characteristics: [] },

  { code: "00035", label: "Risk for injury", domain: "Safety/Protection",
    definition: "Susceptible to physical damage due to environmental conditions interacting with the individual's adaptive and defensive resources.",
    related_factors: ["External: Exposure to pathogen, Exposure to toxic chemical, Physical obstruction", "Internal: Alteration in cognitive functioning", "Autoimmune dysfunction", "Biochemical dysfunction", "Malnutrition", "Psychomotor agitation"],
    defining_characteristics: [] },

  { code: "00046", label: "Impaired skin integrity", domain: "Safety/Protection",
    definition: "Altered epidermis and/or dermis.",
    related_factors: ["External: Humidity", "Hyperthermia", "Hypothermia", "Moisture", "Physical immobilisation", "Radiation", "Internal: Alteration in fluid volume", "Alteration in metabolism", "Alteration in sensation", "Hormonal change", "Imbalanced nutritional state", "Impaired circulation", "Medication agents"],
    defining_characteristics: ["Alteration in skin integrity", "Foreign matter piercing skin"] },

  { code: "00047", label: "Risk for impaired skin integrity", domain: "Safety/Protection",
    definition: "Susceptible to alteration in epidermis and/or dermis, which may compromise health.",
    related_factors: ["External: Chemical injury agent", "Excretions", "Extremes of age", "Humidity", "Hyperthermia", "Hypothermia", "Moisture", "Physical immobilisation", "Radiation", "Internal: Alteration in fluid volume", "Alteration in metabolism", "Imbalanced nutritional state", "Impaired circulation", "Psychogenic factor"],
    defining_characteristics: [] },

  { code: "00206", label: "Risk for bleeding", domain: "Safety/Protection",
    definition: "Susceptible to a decrease in blood volume, which may compromise health.",
    related_factors: ["Aneurysm", "Circumcision", "Disseminated intravascular coagulation", "Gastrointestinal condition", "Impaired liver function", "Inherent coagulopathy", "Postpartum complication", "Pregnancy complication", "Trauma", "Treatment regimen"],
    defining_characteristics: [] },

  // ── DOMAIN 12: COMFORT ──────────────────────────────────────────────────────
  { code: "00132", label: "Acute pain", domain: "Comfort",
    definition: "Unpleasant sensory and emotional experience associated with actual or potential tissue damage with sudden or slow onset of any intensity from mild to severe with an anticipated or predictable end.",
    related_factors: ["Biological injury agent", "Chemical injury agent", "Physical injury agent"],
    defining_characteristics: ["Change in physiological parameter", "Diaphoresis", "Distraction behaviour", "Evidence of pain using standardised checklist", "Expressive behaviour", "Facial expression of pain", "Guarding behaviour", "Positioning to ease pain", "Protective behaviour", "Proxy report of pain behaviour", "Self-focused", "Self-report of pain intensity using standardised scale"] },

  { code: "00133", label: "Chronic pain", domain: "Comfort",
    definition: "Unpleasant sensory and emotional experience associated with actual or potential tissue damage with sudden or slow onset of any intensity from mild to severe, constant or recurring without an anticipated or predictable end.",
    related_factors: ["Age >50 years", "Alteration in sleep pattern", "Emotional distress", "Fatigue", "Prolonged computer use", "Social isolation", "Weight >recommended"],
    defining_characteristics: ["Alteration in ability to continue previous activities", "Alteration in sleep pattern", "Anorexia", "Evidence of pain using standardised checklist", "Facial expression of pain", "Self-focused"] },

  { code: "00214", label: "Impaired comfort", domain: "Comfort",
    definition: "Perceived lack of ease, relief, and transcendence in physical, psychospiritual, environmental, cultural, and social dimensions.",
    related_factors: ["Illness-related symptoms", "Inadequate environmental control", "Inadequate privacy", "Inadequate situational control", "Insufficient resources", "Noxious environmental stimuli", "Unpleasant treatment side effects"],
    defining_characteristics: ["Alteration in sleep pattern", "Anxiety", "Crying", "Distress", "Fear", "Inability to relax", "Irritability", "Moaning", "Reports being uncomfortable", "Reports cold", "Reports hunger", "Reports itching", "Reports lack of contentment", "Restlessness"] },
];

export const NANDA_DOMAINS = [...new Set(NANDA_DIAGNOSES.map(d => d.domain))];
export const NANDA_SOURCE = {
  citation: "Herdman, T.H., Kamitsuru, S., & Lopes, C.T. (Eds.). (2021). NANDA International Nursing Diagnoses: Definitions and Classification, 2021–2023 (12th ed.). Thieme.",
  isbn: "978-1-68420-422-4",
  publisher: "NANDA International / Thieme",
  edition: "12th Edition, 2021–2023",
};
