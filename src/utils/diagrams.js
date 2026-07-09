// Fetches medical images live from Wikimedia Commons API
// Free, no API key, covers diseases + anatomy + histology + everything

const WIKI_API = "https://en.wikipedia.org/w/api.php";

// Maps search terms to the best Wikipedia article title for image results
function getBestWikiTitle(query) {
  const q = query.toLowerCase().trim();

  const mappings = {
    // Diseases
    "hypertension": "Hypertension",
    "high blood pressure": "Hypertension",
    "type 2 diabetes": "Type_2_diabetes",
    "type 1 diabetes": "Type_1_diabetes",
    "diabetes": "Diabetes_mellitus",
    "pneumonia": "Pneumonia",
    "sepsis": "Sepsis",
    "heart failure": "Heart_failure",
    "stroke": "Stroke",
    "appendicitis": "Appendicitis",
    "preeclampsia": "Pre-eclampsia",
    "eclampsia": "Eclampsia",
    "anemia": "Anemia",
    "anaemia": "Anemia",
    "dvt": "Deep_vein_thrombosis",
    "deep vein thrombosis": "Deep_vein_thrombosis",
    "copd": "Chronic_obstructive_pulmonary_disease",
    "meningitis": "Meningitis",
    "malaria": "Malaria",
    "typhoid": "Typhoid_fever",
    "typhoid fever": "Typhoid_fever",
    "tuberculosis": "Tuberculosis",
    "tb": "Tuberculosis",
    "asthma": "Asthma",
    "acute kidney injury": "Acute_kidney_injury",
    "liver cirrhosis": "Cirrhosis",
    "cirrhosis": "Cirrhosis",
    "sickle cell": "Sickle_cell_disease",
    "sickle cell crisis": "Sickle_cell_disease",
    "cholera": "Cholera",
    "covid": "COVID-19",
    "covid-19": "COVID-19",
    "myocardial infarction": "Myocardial_infarction",
    "heart attack": "Myocardial_infarction",
    "pulmonary embolism": "Pulmonary_embolism",
    "atrial fibrillation": "Atrial_fibrillation",
    "arrhythmia": "Cardiac_arrhythmia",
    "hepatitis": "Hepatitis",
    "hepatitis b": "Hepatitis_B",
    "hepatitis c": "Hepatitis_C",
    "hiv": "HIV/AIDS",
    "aids": "HIV/AIDS",
    "dengue": "Dengue_fever",
    "lassa fever": "Lassa_fever",
    "ebola": "Ebola_virus_disease",
    "gastroenteritis": "Gastroenteritis",
    "peptic ulcer": "Peptic_ulcer_disease",
    "appendix": "Appendix_(anatomy)",
    "pancreatitis": "Pancreatitis",
    "cholecystitis": "Cholecystitis",
    "gallstones": "Gallstone",
    "kidney stones": "Kidney_stone_disease",
    "urinary tract infection": "Urinary_tract_infection",
    "uti": "Urinary_tract_infection",
    "pyelonephritis": "Pyelonephritis",
    "glomerulonephritis": "Glomerulonephritis",
    "nephrotic syndrome": "Nephrotic_syndrome",
    "epilepsy": "Epilepsy",
    "seizure": "Epileptic_seizure",
    "parkinson": "Parkinson's_disease",
    "alzheimer": "Alzheimer's_disease",
    "multiple sclerosis": "Multiple_sclerosis",
    "cerebral malaria": "Cerebral_malaria",
    "hydrocephalus": "Hydrocephalus",
    "thyroid": "Thyroid",
    "hypothyroidism": "Hypothyroidism",
    "hyperthyroidism": "Hyperthyroidism",
    "goitre": "Goitre",
    "anaemia": "Anemia",
    "lymphoma": "Lymphoma",
    "leukaemia": "Leukemia",
    "leukemia": "Leukemia",
    "malnutrition": "Malnutrition",
    "kwashiorkor": "Kwashiorkor",
    "marasmus": "Marasmus",
    "schistosomiasis": "Schistosomiasis",
    "fibroids": "Uterine_fibroid",
    "ectopic pregnancy": "Ectopic_pregnancy",
    "placenta previa": "Placenta_praevia",
    "abruption": "Placental_abruption",
    "postpartum hemorrhage": "Postpartum_hemorrhage",

    // Anatomy
    "heart anatomy": "Heart",
    "cardiac anatomy": "Heart",
    "heart structure": "Heart",
    "lung anatomy": "Lung",
    "kidney anatomy": "Kidney",
    "liver anatomy": "Liver",
    "brain anatomy": "Brain",
    "spinal cord": "Spinal_cord",
    "brachial plexus": "Brachial_plexus",
    "cranial nerves": "Cranial_nerves",
    "lymphatic system": "Lymphatic_system",
    "reproductive system": "Reproductive_system",
    "urinary system": "Urinary_system",
    "digestive system": "Human_digestive_system",
    "endocrine system": "Endocrine_system",
    "skeletal system": "Human_skeleton",
    "muscular system": "Muscle",
    "nervous system": "Nervous_system",
    "cardiovascular system": "Circulatory_system",
    "pituitary gland": "Pituitary_gland",
    "adrenal glands": "Adrenal_gland",
    "thyroid gland": "Thyroid",
    "pancreas": "Pancreas",
    "spleen": "Spleen",
    "appendix anatomy": "Appendix_(anatomy)",

    // Physiology
    "cardiac cycle": "Cardiac_cycle",
    "action potential": "Action_potential",
    "muscle contraction": "Muscle_contraction",
    "blood coagulation": "Coagulation",
    "immune response": "Immune_response",
    "renal physiology": "Kidney",
    "respiratory physiology": "Respiratory_physiology",
    "gas exchange": "Pulmonary_gas_exchange",
    "menstrual cycle": "Menstrual_cycle",
    "hormonal regulation": "Hormone",
    "blood pressure regulation": "Blood_pressure",
    "nephron": "Nephron",
    "nephron function": "Nephron",
    "glomerular filtration": "Glomerulus_(kidney)",

    // Biochemistry
    "krebs cycle": "Citric_acid_cycle",
    "citric acid cycle": "Citric_acid_cycle",
    "glycolysis": "Glycolysis",
    "atp production": "Adenosine_triphosphate",
    "dna replication": "DNA_replication",
    "protein synthesis": "Translation_(biology)",
    "lipid metabolism": "Lipid_metabolism",
    "acid-base balance": "Acid–base_homeostasis",
    "oxidative phosphorylation": "Oxidative_phosphorylation",
    "electron transport": "Electron_transport_chain",

    // Histology
    "epithelial tissue": "Epithelium",
    "connective tissue": "Connective_tissue",
    "nervous tissue": "Nervous_tissue",
    "muscle tissue": "Muscle_tissue",
    "bone histology": "Bone",
    "blood cells": "Blood_cell",
    "liver histology": "Liver",
    "kidney histology": "Kidney",

    // Embryology
    "fetal development": "Embryonic_development",
    "placenta formation": "Placenta",
    "placenta": "Placenta",
    "neural tube": "Neural_tube",
    "organogenesis": "Organogenesis",

    // Drugs (show pharmacology/mechanism images)
    "morphine": "Morphine",
    "paracetamol": "Paracetamol",
    "aspirin": "Aspirin",
    "insulin": "Insulin",
    "warfarin": "Warfarin",
    "heparin": "Heparin",
    "furosemide": "Furosemide",
    "metformin": "Metformin",
    "amlodipine": "Amlodipine",
    "amoxicillin": "Amoxicillin",
    "ciprofloxacin": "Ciprofloxacin",
    "artemether": "Artemether/lumefantrine",
  };

  // Direct match first
  if (mappings[q]) return mappings[q];

  // Partial match
  for (const [key, val] of Object.entries(mappings)) {
    if (q.includes(key) || key.includes(q)) return val;
  }

  // Fallback — capitalise query words and try directly
  return query.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("_");
}

function isGoodMedicalImage(title) {
  const t = title.toLowerCase();
  // Exclude icons, logos, flags, portraits, maps, audio files
  const bad = ["icon","logo","flag","map","locator","emblem","coat","arms",
    ".svg","ribbon","symbol","portrait","photo","person","politician",
    ".ogg",".wav",".mp3","stamp","coin","medal","award","signature"];
  return !bad.some(b => t.includes(b));
}

export async function getDiagram(query) {
  if (!query || query.trim().length < 2) return null;

  const wikiTitle = getBestWikiTitle(query);

  try {
    const url = new URL(WIKI_API);
    url.searchParams.set("action", "query");
    url.searchParams.set("titles", wikiTitle);
    url.searchParams.set("prop", "images");
    url.searchParams.set("imlimit", "20");
    url.searchParams.set("format", "json");
    url.searchParams.set("origin", "*");

    const res = await fetch(url.toString());
    const data = await res.json();

    const pages = Object.values(data?.query?.pages || {});
    if (!pages.length) return null;

    const images = pages[0]?.images || [];
    const filtered = images
      .map(img => img.title)
      .filter(isGoodMedicalImage)
      .slice(0, 8);

    if (!filtered.length) return null;

    // Get actual image URLs from Wikimedia
    const infoUrl = new URL("https://en.wikipedia.org/w/api.php");
    infoUrl.searchParams.set("action", "query");
    infoUrl.searchParams.set("titles", filtered.join("|"));
    infoUrl.searchParams.set("prop", "imageinfo");
    infoUrl.searchParams.set("iiprop", "url|size|mime");
    infoUrl.searchParams.set("format", "json");
    infoUrl.searchParams.set("origin", "*");
    infoUrl.searchParams.set("iiurlwidth", "800");

    const infoRes = await fetch(infoUrl.toString());
    const infoData = await infoRes.json();

    const imagePages = Object.values(infoData?.query?.pages || {});

    // Pick best image — prefer PNG/JPG, reasonable size, not tiny icons
    const candidates = imagePages
      .map(p => ({
        url: p?.imageinfo?.[0]?.thumburl || p?.imageinfo?.[0]?.url,
        mime: p?.imageinfo?.[0]?.mime || "",
        width: p?.imageinfo?.[0]?.width || 0,
        title: p.title?.replace("File:", "").replace(/_/g, " ").replace(/\.[^.]+$/, ""),
      }))
      .filter(img =>
        img.url &&
        (img.mime.includes("png") || img.mime.includes("jpeg") || img.mime.includes("jpg") || img.mime.includes("svg")) &&
        img.width >= 200
      )
      .sort((a, b) => b.width - a.width);

    if (!candidates.length) return null;

    return {
      url: candidates[0].url,
      caption: candidates[0].title,
      source: "Wikimedia Commons / Wikipedia",
      wikiTitle,
    };

  } catch (err) {
    console.error("Diagram fetch failed:", err);
    return null;
  }
}
