import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { usePortfolio } from './PortfolioContext';
import { CVDownload } from './PortfolioPages';
const LINKS = [
  {to:'/', label:'Home'}, {to:'/about',label:'About'}, {to:'/cv',label:'CV'},
  {to:'/progress',label:'Progress'}, {to:'/contact',label:'Contact'}
];
function Mark() { return <span className="brand-mark" aria-hidden="true"><span>+</span></span>; }
export default function SiteHeader() {
  const { portfolio } = usePortfolio(); const [open,setOpen]=useState(false);const location=useLocation();
  useEffect(()=>{setOpen(false);window.scrollTo({top:0,behavior:'auto'});},[location.pathname]);
  const base=portfolio.site.showContact?LINKS:LINKS.filter(l=>l.to!=='/contact');
  const links=portfolio.site.showStudy?[...base.filter(l=>l.to!=='/contact'),{to:'/study/anatomy',label:'Anatomy'},{to:'/study',label:'Study'},...base.filter(l=>l.to==='/contact')]:base;
  const navigation=links.map(l=><NavLink key={l.to} end={l.to==='/'} className={({isActive})=>isActive?'site-active':''} to={l.to} onClick={()=>setOpen(false)}>{l.label}</NavLink>);
  return <header className="site-header"><div className="site-header-inner">
    <Link className="brand" to="/" aria-label={`${portfolio.site.name} home`}><Mark/><span>{portfolio.site.name}<small>MEDICAL PORTFOLIO</small></span></Link>
    <nav className="site-links" aria-label="Main navigation">{navigation}</nav>
    <div className="site-header-actions"><CVDownload cvUrl={portfolio.site.cvUrl} small/><button className="site-menu-button" type="button" aria-label={open?'Close menu':'Open menu'} aria-controls="portfolio-menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button></div>
  </div>{open&&<nav id="portfolio-menu" className="site-mobile-nav" aria-label="Mobile navigation">{navigation}<div className="site-mobile-extra"><Link to="/certifications" onClick={()=>setOpen(false)}>Certifications</Link><Link to="/skills" onClick={()=>setOpen(false)}>Skills</Link><Link to="/projects" onClick={()=>setOpen(false)}>Projects</Link><Link to="/achievements" onClick={()=>setOpen(false)}>Achievements</Link></div></nav>}</header>;
}
