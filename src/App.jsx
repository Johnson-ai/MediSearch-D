import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PasswordGate from "./components/PasswordGate";
import Home from "./pages/Home";
import BodySciences from "./pages/BodySciences";
import DrugLookup from "./pages/DrugLookup";
import DrugInteractions from "./pages/DrugInteractions";
import Quiz from "./pages/Quiz";
import PastQuestions from "./pages/PastQuestions";
import Calculators from "./pages/Calculators";
import LabValues from "./pages/LabValues";
import NANDALibrary from "./pages/NANDALibrary";
import Flashcards from "./pages/Flashcards";
import Mnemonics from "./pages/Mnemonics";
import CaseStudies from "./pages/CaseStudies";
import VitalsInterpreter from "./pages/VitalsInterpreter";
import About from "./pages/About";

export default function App() {
  return (
    <PasswordGate>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"                  element={<Home />} />
            <Route path="/body"              element={<BodySciences />} />
            <Route path="/drug-lookup"       element={<DrugLookup />} />
            <Route path="/drug-interactions" element={<DrugInteractions />} />
            <Route path="/quiz"              element={<Quiz />} />
            <Route path="/past-questions"    element={<PastQuestions />} />
            <Route path="/calculators"       element={<Calculators />} />
            <Route path="/lab-values"        element={<LabValues />} />
            <Route path="/nanda"             element={<NANDALibrary />} />
            <Route path="/flashcards"        element={<Flashcards />} />
            <Route path="/mnemonics"         element={<Mnemonics />} />
            <Route path="/case-studies"      element={<CaseStudies />} />
            <Route path="/vitals"            element={<VitalsInterpreter />} />
            <Route path="/about"             element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </PasswordGate>
  );
}
