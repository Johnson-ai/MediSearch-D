import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePortfolio } from './PortfolioContext';
import { groupUpdates, monthName, orderedUpdates, validMonth } from './portfolioDates';

const SECTIONS = {
  experience: {number:'03', eyebrow:'CLINICAL EXPOSURE & WORK', title:'Experience', lead:'The places, people and practical experiences shaping my professional journey.'},
  education: {number:'04', eyebrow:'EDUCATION & TRAINING', title:'Education', lead:'A record of learning, training and the academic foundations of my healthcare journey.'},
  certifications: {number:'05', eyebrow:'PROFESSIONAL DEVELOPMENT', title:'Certifications', lead:'Verified credentials, courses and additional training.'},
  skills: {number:'06', eyebrow:'KNOWLEDGE & CAPABILITIES', title:'Skills', lead:'The areas of knowledge and practical capabilities I continue to develop.'},
  projects: {number:'07', eyebrow:'RESEARCH & CONTRIBUTIONS', title:'Projects', lead:'Selected academic work, clinical projects and contributions.'},
  achievements: {number:'08', eyebrow:'MILESTONES', title:'Achievements', lead:'Professional and learning milestones worth documenting.'},
};

function PageHero({number='01',eyebrow,title,description,children}) {
  return <section className="inner-page-hero"><div className="inner-page-grid" aria-hidden="true"/><div className="site-container inner-page-hero-content"><p className="section-kicker"><span className="clinical-mini-cross">+</span> {number} / {eyebrow}</p><h1>{title}<span className="page-hero-dot">.</span></h1><p className="inner-page-description">{description}</p>{children}</div><span className="inner-page-cross" aria-hidden="true">+</span></section>;
}
function EmptySection({text='Information will be published here as it is verified and added.'}) {return <div className="portfolio-empty"><span className="empty-icon" aria-hidden="true">✚</span><h2>A journey in progress</h2><p>{text}</p><Link to="/progress">View the progress journal <span aria-hidden="true">↗</span></Link></div>}
function DatePill({entry}) {return (validMonth(entry.month) || entry.period) ? <time className="medical-date-pill" dateTime={validMonth(entry.month)?entry.month:undefined}>{validMonth(entry.month)?monthName(entry.month):entry.period}</time> : null;}
function EntryCard({entry,kind}) {return <article className="medical-entry-card"><div className="medical-entry-head"><span className="medical-entry-cross" aria-hidden="true">✚</span><DatePill entry={entry}/></div><h2>{entry.title}</h2>{entry.organisation && <p className="medical-entry-org">{entry.organisation}</p>}{entry.description && <p className="medical-entry-description">{entry.description}</p>}{entry.url && <a className="medical-card-link" href={entry.url} rel="noopener noreferrer" target="_blank">{kind==='projects'?'Visit project':'View reference'} <span aria-hidden="true">↗</span></a>}</article>}
function NextPageLinks({current}) {
  return <nav className="site-container section-next-pages" aria-label="Explore more portfolio pages"><p className="section-kicker">EXPLORE THE PORTFOLIO</p><div>{Object.entries(SECTIONS).filter(([key])=>key!==current).slice(0,4).map(([key,v])=><Link key={key} to={`/${key}`}>{v.title}<span aria-hidden="true">↗</span></Link>)}</div></nav>;
}
export function SectionPage({section}) {
  const {portfolio}=usePortfolio();const info=SECTIONS[section];const entries=portfolio[section] || [];
  if (!info) return null;
  return <div className="portfolio-detail"><PageHero number={info.number} eyebrow={info.eyebrow} title={info.title} description={info.lead}/><div className="site-container detail-content"><div className="detail-section-intro"><span className="section-kicker">{entries.length} {entries.length===1?'RECORD':'RECORDS'}</span><h2>Every step counts.</h2><p>Entries can be added, updated or removed from the private content dashboard.</p></div>{entries.length ? <div className="medical-entry-grid">{[...entries].sort((a,b)=>(b.month||'').localeCompare(a.month||'')).map((item,i)=><EntryCard key={`${item.title}-${i}`} entry={item} kind={section}/>)}</div> : <EmptySection/>}</div><NextPageLinks current={section}/></div>;
}
export function AboutPage() {
 const {portfolio:p}=usePortfolio();const s=p.site;
 return <div className="portfolio-detail"><PageHero number="02" eyebrow="PERSONAL & PROFESSIONAL PROFILE" title="About me" description={s.aboutHeading}/><section className="site-container about-page-layout"><div className="about-page-portrait">{s.portraitUrl?<img src={s.portraitUrl} alt={`Portrait of ${s.name}`}/>:<div className="profile-placeholder"><span aria-hidden="true">+</span><p>Professional portrait can be uploaded in the CMS</p></div>}<small>PROFILE / {s.shortName}</small></div><div className="about-page-copy"><span className="section-kicker">INTRODUCTION</span><h2>{s.name}</h2><p className="about-page-role">{s.role}</p><p className="about-page-bio">{s.about}</p><div className="about-value-grid">{p.strengths.map((v,i)=><article key={i}><span>0{i+1}</span><h3>{v.title}</h3><p>{v.description}</p></article>)}</div><div className="detail-actions"><Link className="primary-button" to="/progress">Follow my journey <span>↗</span></Link>{s.showContact&&<Link className="secondary-button" to="/contact">Get in touch <span>↗</span></Link>}</div></div></section></div>;
}
export function ProgressTimeline({updates=[],compact=false}) {
 const [year,setYear]=useState('all'); const [category,setCategory]=useState('all');
 const dated=useMemo(()=>orderedUpdates(updates),[updates]);
 const years=useMemo(()=>[...new Set(dated.map(e=>e.month.slice(0,4)))],[dated]);
 const categories=useMemo(()=>[...new Set(dated.map(e=>e.category).filter(Boolean))].sort(),[dated]);
 const visible=compact?dated.slice(0,3):dated.filter(e=>(year==='all'||e.month.startsWith(year))&&(category==='all'||e.category===category));
 const groups=groupUpdates(visible);
 return <div className="progress-feed">{!compact && dated.length>0 && <div className="progress-filters"><label>Year<select value={year} onChange={e=>setYear(e.target.value)}><option value="all">All years</option>{years.map(y=><option key={y} value={y}>{y}</option>)}</select></label><label>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option value="all">All updates</option>{categories.map(c=><option key={c} value={c}>{c}</option>)}</select></label><span>{visible.length} {visible.length===1?'update':'updates'}</span></div>}
 {groups.length?groups.map(([month,items])=><section key={month} className="progress-month"><div className="progress-month-heading"><div className="progress-month-dot"/><h2>{monthName(month)}</h2><span>{items.length} {items.length===1?'entry':'entries'}</span></div><div className="progress-cards">{items.map((entry,i)=><article className="progress-card" key={`${entry.title}-${i}`}><div className="progress-card-top"><span className="progress-category">{entry.category||'Professional update'}</span><span className="progress-card-cross" aria-hidden="true">✚</span></div>{entry.imageUrl&&<img className="progress-card-image" src={entry.imageUrl} alt={entry.title} loading="lazy"/>}<h3>{entry.title}</h3>{entry.organisation&&<p className="progress-organisation">{entry.organisation}</p>}{entry.description&&<p className="progress-description">{entry.description}</p>}{entry.url&&<a href={entry.url} target="_blank" rel="noopener noreferrer">View related work <span aria-hidden="true">↗</span></a>}</article>)}</div></section>):<EmptySection text={dated.length?'There are no entries matching these filters. Select another year or category.':'Monthly highlights, placements, coursework, training and personal achievements can be published from the admin dashboard.'}/>}
 </div>;
}
export function ProgressPage() {
 const {portfolio}=usePortfolio();const count=orderedUpdates(portfolio.updates).length;
 return <div className="portfolio-detail"><PageHero number="09" eyebrow="A LIVING PROFESSIONAL CV" title="My progress" description="A month-by-month journal of learning, training, clinical exposure, projects and milestones."/><div className="site-container detail-content"><div className="detail-section-intro"><span className="section-kicker">THE MONTHLY JOURNAL</span><h2>Progress, documented.</h2><p>{count?`${count} dated ${count===1?'entry':'entries'} published. Browse by month and filter by year or category.`:'New updates will appear here once published in the CMS.'}</p></div><ProgressTimeline updates={portfolio.updates}/></div></div>;
}
export function ContactPage() {
 const {portfolio:p}=usePortfolio();const s=p.site;
 const contact=[{label:'Email',value:s.email,href:s.email?`mailto:${s.email}`:''},{label:'Phone',value:s.telephone,href:s.telephone?`tel:${s.telephone.replace(/[^+\d]/g,'')}`:''},{label:'LinkedIn',value:s.linkedin,href:s.linkedin},{label:'Website',value:s.website,href:s.website}].filter(item=>item.value);
 return <div className="portfolio-detail"><PageHero number="10" eyebrow="PROFESSIONAL CONNECTIONS" title={s.contactHeading} description={s.contactIntro}/><section className="site-container detail-content contact-detail-layout"><div><span className="section-kicker">LET'S CONNECT</span><h2>{s.contactMessage}</h2><p>For professional inquiries, learning opportunities and meaningful collaborations, the following channels are available.</p><Link to="/about" className="medical-card-link">About {s.name} ↗</Link></div><div className="contact-detail-cards">{contact.length?contact.map(c=><a href={c.href} key={c.label} rel={c.href.startsWith('https')?'noopener noreferrer':undefined} target={c.href.startsWith('https')?'_blank':undefined}><span>{c.label}</span><strong>{c.value}</strong><span aria-hidden="true">↗</span></a>):<div className="portfolio-empty"><h2>Contact details coming soon</h2><p>Abigael can add public contact information in the CMS.</p></div>}</div></section></div>;
}
const CV_SECTION_LABELS = {
 experience: { title: 'Professional & clinical experience', description: 'Placements, responsibilities and work experience, in context.' },
 education: { title: 'Education & training', description: 'Qualifications, education and formal professional development.' },
 certifications: { title: 'Certifications & licences', description: 'Verified credentials and additional training.' },
 skills: { title: 'Skills & competencies', description: 'Practical skills, knowledge and developing capabilities.' },
 projects: { title: 'Projects & research', description: 'Academic projects, research and contributions.' },
 achievements: { title: 'Achievements', description: 'Awards, milestones and professional recognition.' },
};
function CVRecordSection({id, items, number}) {
 const definition=CV_SECTION_LABELS[id];
 const ordered=[...items].sort((a,b)=>(b.month||'').localeCompare(a.month||''));
 return <section id={id} className="cv-record-section" aria-labelledby={`cv-section-${id}`}>
   <div className="cv-record-heading"><span className="cv-record-number">{String(number).padStart(2,'0')} / RECORD</span><div><h2 id={`cv-section-${id}`}>{definition.title}</h2><p>{definition.description}</p></div><span className="cv-record-count">{items.length} {items.length===1?'entry':'entries'}</span></div>
   {ordered.length ? <div className="cv-record-grid">{ordered.map((item,i)=><EntryCard kind={id} key={`${item.title}-${i}`} entry={item}/>)}</div>
    : <div className="cv-record-empty">Verified {id==='experience'?'experience': 'education'} will appear here once Abigael publishes it through her CMS.</div>}
 </section>;
}
export function CVPage() {
 const {portfolio:p}=usePortfolio();const s=p.site;const location=useLocation();
 const groups=Object.keys(CV_SECTION_LABELS).filter(group=>['experience','education'].includes(group)||Boolean(p[group]?.length));
 useEffect(()=>{
  if(!location.hash)return;
  const target=location.hash.slice(1);
  if(!Object.hasOwn(CV_SECTION_LABELS,target))return;
  const frame=requestAnimationFrame(()=>document.getElementById(target)?.scrollIntoView({behavior:'auto',block:'start'}));
  return ()=>cancelAnimationFrame(frame);
 },[location.hash]);
 const contact=[s.location,s.email,s.telephone].filter(Boolean);
 return <div className="portfolio-detail cv-resume-page">
  <PageHero number="03" eyebrow="PROFESSIONAL PROFILE" title="Curriculum vitae" description="Professional experience, education, credentials and developing competencies — together in one comprehensive CV."><div className="detail-actions"><CVDownload cvUrl={s.cvUrl}/><Link className="secondary-button" to="/progress">Monthly progress journal <span aria-hidden="true">↗</span></Link></div></PageHero>
  <div className="site-container cv-resume-layout">
   <aside className="cv-resume-sidebar" aria-label="CV profile and sections"><div className="cv-resume-profile"><span className="section-kicker">PROFESSIONAL SUMMARY</span><h2>{s.name}</h2><p className="cv-resume-role">{s.role}</p><p className="cv-resume-summary">{s.intro}</p>{contact.length>0&&<div className="cv-resume-contact">{contact.map(item=><span key={item}>{item}</span>)}</div>}<Link to="/about" className="medical-card-link">Read my full biography <span aria-hidden="true">↗</span></Link></div>
    <nav className="cv-resume-index" aria-label="Sections in this CV"><span>IN THIS CV</span>{groups.map((group,i)=><a key={group} href={`#${group}`}><small>{String(i+1).padStart(2,'0')}</small>{CV_SECTION_LABELS[group].title}</a>)}</nav>
   </aside>
   <div className="cv-resume-body"><div className="cv-resume-intro"><span className="cv-resume-kicker">A LIVING PROFESSIONAL RECORD <span aria-hidden="true">✚</span></span><h2>Experience. Education. <em>Purpose.</em></h2><p>This page brings together the professional record in one place. The latest month-by-month developments are documented separately in the <Link to="/progress">progress journal</Link>.</p></div>{groups.map((group,i)=><CVRecordSection key={group} id={group} number={i+1} items={p[group]||[]}/>)}</div>
  </div>
 </div>;
}
export function CVDownload({cvUrl, small=false}) {
 return cvUrl?<a className={small?'cv-download-small':'secondary-button'} href="/api/cv" download="Abigael-Akossou-CV.pdf" type="application/pdf">Download CV <span aria-hidden="true">↓</span></a> : <span className={small?'cv-download-small cv-disabled':'secondary-button cv-disabled'} aria-disabled="true" title="CV PDF not uploaded yet">Download CV <span aria-hidden="true">↓</span><small>Upload pending</small></span>;
}
