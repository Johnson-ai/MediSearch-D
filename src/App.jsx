import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { PortfolioProvider } from './portfolio/PortfolioContext';
import SiteHeader from './portfolio/SiteHeader';
import SiteFooter from './portfolio/SiteFooter';
import PortfolioHome from './portfolio/PortfolioHome';
import StudyLanding from './portfolio/StudyLanding';
import AdminDashboard from './portfolio/AdminDashboard';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BodySciences from './pages/BodySciences';
import DrugLookup from './pages/DrugLookup';
import DrugInteractions from './pages/DrugInteractions';
import Quiz from './pages/Quiz';
import PastQuestions from './pages/PastQuestions';
import MockExam from './pages/MockExam';
import Calculators from './pages/Calculators';
import LabValues from './pages/LabValues';
import NANDALibrary from './pages/NANDALibrary';
import Flashcards from './pages/Flashcards';
import Mnemonics from './pages/Mnemonics';
import CaseStudies from './pages/CaseStudies';
import VitalsInterpreter from './pages/VitalsInterpreter';
import SBARBuilder from './pages/SBARBuilder';
import About from './pages/About';
import AnatomyAtlas from './anatomy/AnatomyAtlas';
import { AboutPage, CVPage, ContactPage, ProgressPage, SectionPage } from './portfolio/PortfolioPages';
function StudyLayout({ children }) { return <div className="study-shell"><Navbar/><div className="study-tool-content">{children}</div><div className="site-container study-tool-warning">Medical and AI-generated content is for education only. Verify information with current local guidelines, accredited references, and a licensed clinician before clinical use.</div></div>; }
function View() {
 const location=useLocation(); const isAdmin=location.pathname.startsWith('/admin'); const isStudy=location.pathname.startsWith('/study');
 const studyPages=[['search',Home],['body',BodySciences],['drug-lookup',DrugLookup],['drug-interactions',DrugInteractions],['quiz',Quiz],['past-questions',PastQuestions],['mock-exam',MockExam],['calculators',Calculators],['lab-values',LabValues],['nanda',NANDALibrary],['flashcards',Flashcards],['mnemonics',Mnemonics],['case-studies',CaseStudies],['vitals',VitalsInterpreter],['sbar',SBARBuilder],['about',About]];
 return <div className={isAdmin?'admin-root':'site-root'}>{!isAdmin&&<SiteHeader/>}<main id="main" className="main-area"><Routes>
  <Route path="/" element={<PortfolioHome/>}/>
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/cv" element={<CVPage/>}/>
  <Route path="/contact" element={<ContactPage/>}/>
  <Route path="/experience" element={<Navigate to="/cv#experience" replace/>}/>
  <Route path="/education" element={<Navigate to="/cv#education" replace/>}/>
  <Route path="/progress" element={<ProgressPage/>}/>
  {['certifications','skills','projects','achievements'].map(section=><Route key={section} path={`/${section}`} element={<SectionPage section={section}/>}/>)}
  <Route path="/study" element={<StudyLanding/>}/>
  <Route path="/study/anatomy" element={<AnatomyAtlas/>}/>
  {studyPages.map(([path,Page])=><Route key={path} path={`/study/${path}`} element={<StudyLayout><Page/></StudyLayout>}/>)}
  <Route path="/admin/login" element={<AdminDashboard/>}/><Route path="/admin" element={<AdminDashboard/>}/>
  <Route path="/admin/*" element={<Navigate to="/admin" replace/>}/>
  <Route path="*" element={<div className="site-container not-found"><h1>Page not found</h1><p>That page is no longer here.</p><a href="/">Return to portfolio →</a></div>}/>
 </Routes></main>{!isAdmin&&<SiteFooter/>}</div>;
}
export default function App() { return <BrowserRouter><PortfolioProvider><View/></PortfolioProvider></BrowserRouter>; }
