import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from './PortfolioContext';
import { CVDownload, ProgressTimeline } from './PortfolioPages';
import AnatomyTeaser from '../anatomy/AnatomyTeaser';

const Arrow = ({diagonal=false}) => <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
const Heartbeat = ({className=''}) => <svg className={className} viewBox="0 0 280 72" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path className="med-ecg-line" d="M1 39H58L72 39L83 17L96 58L108 27L119 39H163L176 39L187 18L200 58L211 30L225 39H279"/></svg>;
function ClinicalPortrait({site:s}) {
 const ref=useRef(null);
 const tilt=e=>{if(!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;const b=ref.current.getBoundingClientRect();ref.current.style.setProperty('--tilt-x',`${(0.5-(e.clientY-b.top)/b.height)*9}deg`);ref.current.style.setProperty('--tilt-y',`${((e.clientX-b.left)/b.width-0.5)*10}deg`)};
 const reset=()=>{ref.current?.style.setProperty('--tilt-x','0deg');ref.current?.style.setProperty('--tilt-y','0deg')};
 return <div className="med-hero-stage" ref={ref} onPointerMove={tilt} onPointerLeave={reset}>
   <div className="med-stage-halo" aria-hidden="true"/><div className="med-stage-orbit med-orbit-one" aria-hidden="true"/><div className="med-stage-orbit med-orbit-two" aria-hidden="true"/>
   <div className="med-portrait-shell"><div className="med-portrait-stripe"/><div className="med-portrait-photo">
    {s.portraitUrl ? <img src={s.portraitUrl} alt={`Portrait of ${s.name}`} /> : <div className="med-placeholder"><svg viewBox="0 0 380 440" fill="none" aria-hidden="true"><ellipse cx="190" cy="127" rx="70" ry="83" fill="#bdd5e7"/><path d="M119 154C129 203 150 219 190 219C230 219 252 196 261 154" fill="#a7c7dc"/><path d="M71 434V341C71 261 114 229 190 227C266 229 309 261 309 341V434" fill="#eaf3f9" stroke="#82b0d1" strokeWidth="3"/><path d="M143 233L190 313L237 233" stroke="#91b7d3" strokeWidth="6"/><path d="M166 266L190 359L215 266" fill="#c1dbee"/><path d="M187 353L171 396L190 420L209 396L193 353" fill="#7daed1"/><path d="M113 310C135 330 148 339 170 343M268 310C246 330 232 339 211 343" stroke="#aecde2" strokeWidth="3"/><circle cx="258" cy="319" r="13" fill="#fff" stroke="#75a3c5" strokeWidth="3"/><path d="M258 312V326M251 319H265" stroke="#4388b5" strokeWidth="2.7"/></svg><span>UPLOAD ABIGAEL'S PORTRAIT IN THE CMS</span></div>}
   </div><div className="med-portrait-bottom"><span><i/> CLINICAL PORTFOLIO</span><span>AA / 001</span></div></div>
   <div className="med-float-card med-float-card-top" aria-hidden="true"><span className="med-float-square">✚</span><div><small>FIELD OF INTEREST</small><strong>Nursing & health sciences</strong></div></div>
   <div className="med-monitor-card" aria-hidden="true"><div className="med-monitor-top"><span><i/> CARE IN MOTION</span><span>01 / 03</span></div><Heartbeat className="med-monitor-wave"/><div className="med-monitor-bottom"><strong>Knowledge</strong><span>Care</span><span>Growth</span></div></div>
   <div className="med-floating-plus med-plus-a" aria-hidden="true">+</div><div className="med-floating-plus med-plus-b" aria-hidden="true">+</div>
 </div>;
}

export default function PortfolioHome() {
 const { portfolio:p } = usePortfolio(); const s=p.site;
 useEffect(()=>{
   const parent=document.querySelector('.portfolio-home');
   if(!parent||!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   const nodes=parent.querySelectorAll('.motion-reveal');
   const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -25px 0px'});
   nodes.forEach(node=>observer.observe(node));parent.classList.add('motion-enabled');
   return()=>{observer.disconnect();parent.classList.remove('motion-enabled')};
 },[p]);
 const directories=[
  ['01','About','/about','The person, values and motivation behind the professional journey','Personal profile'],
  ['02','Professional CV','/cv','Experience, education, credentials and professional skills together','Complete career profile'],
  ['03','Certifications','/certifications','Courses, licences and completed training','Professional development'],
  ['04','Projects','/projects','Research, clinical projects and contributions','Projects & research'],
  ['05','Achievements','/achievements','Milestones, recognition and growth','Milestones'],
  ['06','Monthly progress','/progress','The living timeline of a developing career','Month by month'],
 ];
 return <div className="portfolio-home">
   <section className="portfolio-hero"><div className="hero-noise" aria-hidden="true"/><div className="med-hero-bg-cross" aria-hidden="true">+</div><div className="site-container portfolio-hero-grid">
    <div className="hero-copy"><div className="hero-eyebrow"><span className="med-eyebrow-icon">+</span>{s.eyebrow}</div><p className="hero-hello"><span className="hero-hello-line"/> A LIVING MEDICAL PORTFOLIO</p><h1>{s.name}<span>.</span></h1><div className="med-hero-rule"><span/><span/><span/></div><h2>{s.headline}</h2><p className="hero-intro">{s.intro}</p>
     <div className="hero-actions"><Link className="primary-button" to="/about">Meet Abigael <Arrow diagonal/></Link><CVDownload cvUrl={s.cvUrl}/><Link className="secondary-button" to="/progress">Explore my progress <Arrow diagonal/></Link></div>
     <div className="hero-bottom-meta"><span><span className="hero-meta-pip"/>{s.role}</span>{s.location&&<span>{s.location}</span>}</div>
     <div className="med-hero-note"><span>01 / HUMAN-CENTRED CARE</span><Heartbeat/></div>
    </div><div className="hero-visual"><ClinicalPortrait site={s}/></div>
   </div><div className="hero-edge" aria-hidden="true"><span>AA / PROFESSIONAL PROFILE</span><span>PROFILE · PRACTICE · PROGRESS</span></div></section>
   <div className="marquee-line"><div className="site-container marquee-inner">{s.valuesStrip.split('|').filter(Boolean).map((word,i)=><span key={`${word}-${i}`} className="strip-word">{word.trim()}<i aria-hidden="true">✳</i></span>)}</div></div>
   <section className="site-container home-directory"><div className="home-directory-header motion-reveal"><div><p className="section-kicker">THE PROFESSIONAL PROFILE</p><h2>Explore the journey, <em>one chapter at a time.</em></h2></div><p>Every section is a dedicated page, kept current through Abigael’s private content dashboard.</p></div><div className="home-directory-grid">{directories.map(([num,title,to,description,eyebrow])=><Link className="home-directory-card motion-reveal" to={to} key={to}><div className="directory-card-top"><span>{num} / {eyebrow.toUpperCase()}</span><span aria-hidden="true">✚</span></div><h3>{title}</h3><p>{description}</p><div className="directory-card-cta">View page <span aria-hidden="true">↗</span></div></Link>)}</div></section>
   <section className="home-progress-section"><div className="site-container"><div className="home-progress-header motion-reveal"><div><p className="section-kicker">LATEST / THE PROFESSIONAL JOURNAL</p><h2>A career written <em>month by month.</em></h2></div><Link className="secondary-button" to="/progress">View the full journal <Arrow diagonal/></Link></div><ProgressTimeline compact updates={p.updates}/></div></section>
   {s.showStudy&&<><AnatomyTeaser/><section className="study-feature"><div className="site-container study-feature-content"><div className="motion-reveal"><p className="section-kicker">THE CLINICAL STUDY LIBRARY</p><h2>{s.studyFeatureTitle}</h2><p>{s.studyFeatureDescription}</p><Link className="study-feature-link" to="/study">Explore the Study library <Arrow diagonal/></Link></div><div className="study-feature-art" aria-hidden="true"><div className="ring ring-one"/><div className="ring ring-two"/><div className="ring ring-three"/><span>+</span><Heartbeat className="study-wave"/></div></div></section></>}
   {s.showContact&&<section className="home-contact-strip"><div className="site-container home-contact-inner"><div><span className="section-kicker">PROFESSIONAL CONNECTIONS</span><h2>{s.contactHeading}</h2><p>{s.contactIntro}</p></div><Link className="primary-button" to="/contact">Contact Abigael <Arrow diagonal/></Link></div></section>}
 </div>;
}
