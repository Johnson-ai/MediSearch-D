import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const NAV_GROUPS = [
  {label:'Explore',links:[['Interactive anatomy atlas','/study/anatomy'],['Clinical search','/study/search'],['Body sciences','/study/body']]},
  {label:'Medicines',links:[['Drug lookup','/study/drug-lookup'],['Interactions','/study/drug-interactions']]},
  {label:'Exam prep',links:[['Practice quiz','/study/quiz'],['Past questions','/study/past-questions'],['Mock exam','/study/mock-exam'],['Flashcards','/study/flashcards']]},
  {label:'Clinical tools',links:[['Calculators','/study/calculators'],['NANDA diagnoses','/study/nanda'],['Case studies','/study/case-studies'],['Vitals','/study/vitals'],['SBAR','/study/sbar']]},
  {label:'Resources',links:[['Lab values','/study/lab-values'],['Mnemonics','/study/mnemonics'],['About','/study/about']]},
];
export default function Navbar() {
 const [expanded,setExpanded]=useState(''); const [menuOpen,setMenuOpen]=useState(false); const location=useLocation();
 useEffect(()=>{setMenuOpen(false);setExpanded('');},[location.pathname]);
 useEffect(()=>{
  if(!menuOpen)return;
  const close=event=>{if(event.key==='Escape')setMenuOpen(false)};
  document.addEventListener('keydown',close);
  return()=>document.removeEventListener('keydown',close);
 },[menuOpen]);
 return <div className="study-subnav"><div className="site-container study-subnav-inner"><Link to="/study" className="study-subnav-home">Study <span>/</span> Library</Link><div className="study-desktop-links">{NAV_GROUPS.map(g=><div className="study-dropdown" key={g.label} onMouseEnter={()=>setExpanded(g.label)} onMouseLeave={()=>setExpanded('')}><button aria-expanded={expanded===g.label} onClick={()=>setExpanded(expanded===g.label?'':g.label)}>{g.label}<span>⌄</span></button>{expanded===g.label&&<div className="study-dropdown-pop">{g.links.map(([label,path])=><Link key={path} className={location.pathname===path?'active':''} to={path} onClick={()=>setExpanded('')}>{label}</Link>)}</div>}</div>)}</div><button className="study-mobile-toggle" type="button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="study-tool-menu">{menuOpen?'Close tools':'Browse tools'} <span aria-hidden="true">{menuOpen?'−':'+'}</span></button></div>
 {menuOpen&&<div id="study-tool-menu" className="study-mobile-menu">{NAV_GROUPS.map(g=><div className="study-mobile-group" key={g.label}><button type="button" className="study-mobile-group-toggle" aria-expanded={expanded===g.label} onClick={()=>setExpanded(expanded===g.label?'':g.label)}>{g.label}<span aria-hidden="true">{expanded===g.label?'−':'+'}</span></button>{expanded===g.label&&<div className="study-mobile-group-links">{g.links.map(([label,path])=><Link className={location.pathname===path?'active':''} to={path} onClick={()=>setMenuOpen(false)} key={path}>{label}<span aria-hidden="true">↗</span></Link>)}</div>}</div>)}</div>}
 </div>;
}
