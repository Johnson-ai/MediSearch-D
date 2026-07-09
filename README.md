# MediSearch AI 🩺
### Clinical Intelligence Engine for Damilare Akossou

A medically sophisticated, AI-powered clinical search platform built for final-year nursing students.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## 📁 Project Structure

```
medisearch/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Fixed top navigation
│   │   ├── Footer.jsx         # Site footer
│   │   ├── SearchBar.jsx      # Reusable search input
│   │   ├── ResultRenderer.jsx # Formats AI clinical text
│   │   └── LoadingSpinner.jsx # ECG-style loading animation
│   ├── hooks/
│   │   └── useSearch.js       # Search state + caching logic
│   ├── pages/
│   │   ├── Home.jsx           # Main clinical search page
│   │   ├── DrugLookup.jsx     # Drug reference / monographs
│   │   ├── Quiz.jsx           # MCQ exam quiz generator
│   │   └── About.jsx          # About + how to use
│   ├── utils/
│   │   └── api.js             # Anthropic API calls + prompts
│   ├── App.jsx                # Router + layout
│   ├── index.css              # Global styles + animations
│   └── main.jsx               # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔬 Clinical Search | 7 categories: Overview, Symptoms, Diagnosis, Treatment, Drugs, Nursing Care, References |
| ⚕️ Drug Lookup | Full pharmacological monographs with nursing implications |
| 📝 Exam Quiz | AI-generated MCQs with explanations |
| 💾 Smart Caching | Results cached per query+category — instant tab switching |
| 📜 Search History | Persisted to localStorage |

---

## 🛠 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** — deep navy/blue medical theme
- **React Router v6** — multi-page navigation
- **Claude AI (Sonnet)** — medical intelligence engine

---

## ⚠️ Disclaimer

Educational use only. Always verify with BNF, MIMS, WHO guidelines, or a licensed healthcare professional.

---

*Made with 💙 for Damilare Akossou · Finals 2026*
