import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { usePortfolio } from './PortfolioContext';
import { CVDownload } from './PortfolioPages';
const LINKS = [
  {to:'/', label:'Home'}, {to:'/about',label:'About'}, {to:'/cv',label:'CV'},
  {to:'/progress',label:'Progress'}, {to:'/contact',label:'Contact'}
];
function Mark() { return <span className="brand-mark" aria-hidden="true"><span>+</span></span>; }
export default function SiteHeader() {
  const { portfolio } = usePortfolio(); const [open,setOpen]=useState(false);const location=useLocation(); const menuButton=useRef(null); const mobileMenu=useRef(null);
  useEffect(()=>{setOpen(false);window.scrollTo({top:0,behavior:'auto'});},[location.pathname]);
  useEffect(()=>{
    if(!open)return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    const onKeyDown=(event)=>{
      if(event.key==='Escape'){setOpen(false);menuButton.current?.focus();}
      if(event.key!=='Tab'||!mobileMenu.current)return;
      const focusable=Array.from(mobileMenu.current.querySelectorAll('a[href], button:not([disabled])'));
      if(!focusable.length)return;
      const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    };
    const mq=window.matchMedia('(min-width:1111px)');
    const onWide=()=>{if(mq.matches)setOpen(false)};
    document.addEventListener('keydown',onKeyDown);
    mq.addEventListener?.('change',onWide);
    mobileMenu.current?.querySelector('a[href]')?.focus();
    return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',onKeyDown);mq.removeEventListener?.('change',onWide)};
  },[open]);
  const base=portfolio.site.showContact?LINKS:LINKS.filter(l=>l.to!=='/contact');
  const links=portfolio.site.showStudy?[...base.filter(l=>l.to!=='/contact'),{to:'/study/anatomy',label:'Anatomy'},{to:'/study',label:'Study'},...base.filter(l=>l.to==='/contact')]:base;
  const navigation=links.map(l=><NavLink key={l.to} end={l.to==='/'} className={({isActive})=>isActive?'site-active':''} to={l.to} onClick={()=>setOpen(false)}>{l.label}</NavLink>);
  return <header className="site-header"><a className="skip-to-content" href="#main">Skip to content</a><div className="site-header-inner">
    <Link className="brand" to="/" aria-label={`${portfolio.site.name} home`}><Mark/><span>{portfolio.site.name}<small>MEDICAL PORTFOLIO</small></span></Link>
    <nav className="site-links" aria-label="Main navigation">{navigation}</nav>
    <div className="site-header-actions"><span className="header-cv-action"><CVDownload cvUrl={portfolio.site.cvUrl} small/></span><button ref={menuButton} className="site-menu-button" type="button" aria-label={open?'Close menu':'Open menu'} aria-controls="portfolio-menu" aria-expanded={open} onClick={()=>setOpen(!open)}><span aria-hidden="true">{open?'×':'☰'}</span></button></div>
  </div>{open&&<><button className="site-menu-backdrop" type="button" aria-label="Close navigation" onClick={()=>{setOpen(false);menuButton.current?.focus()}}/><nav id="portfolio-menu" ref={mobileMenu} className="site-mobile-nav" aria-label="Mobile navigation">{navigation}<div className="site-mobile-extra"><Link to="/certifications" onClick={()=>setOpen(false)}>Certifications</Link><Link to="/skills" onClick={()=>setOpen(false)}>Skills</Link><Link to="/projects" onClick={()=>setOpen(false)}>Projects</Link><Link to="/achievements" onClick={()=>setOpen(false)}>Achievements</Link></div><div className="site-mobile-download"><CVDownload cvUrl={portfolio.site.cvUrl}/></div></nav></>}</header>;
}
