import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AnatomyIllustration from './AnatomyIllustration';
import { anatomyParts, anatomySystems, anatomyCopy } from '../data/anatomy';
import { usePortfolio } from '../portfolio/PortfolioContext';

const toList = text => String(text || '').split('|').map(item=>item.trim()).filter(Boolean);

export function AnatomyDetail({part, compact=false}) {
 if(!part) return <div className="atlas-empty-detail">No matching structure. Try another search or body system.</div>;
 return <div className={`atlas-detail ${compact?'atlas-detail-compact':''}`} key={part.id}>
  <div className="atlas-detail-index"><span className="atlas-live-dot"/> BODY STRUCTURE / {part.system.toUpperCase()}</div>
  <h2>{part.name}</h2>
  <p className="atlas-description">{part.description}</p>
  <div className="atlas-info-block"><span className="atlas-info-overline">01 — PURPOSE & FUNCTIONS</span><ul>{toList(part.functions).map(s=><li key={s}><span aria-hidden="true">+</span>{s}</li>)}</ul></div>
  <div className="atlas-info-block"><span className="atlas-info-overline">02 — COMMON CONDITIONS</span><div className="atlas-conditions">{toList(part.conditions).map(s=><span key={s}>{s}</span>)}</div></div>
  {!compact && <div className="atlas-detail-source"><p>Conditions are examples for study, not a diagnosis. Anatomy positions are illustrative and may not represent individual variation.</p><a href="https://medlineplus.gov/anatomy.html" target="_blank" rel="noopener noreferrer">NIH anatomy resources ↗</a><a href="https://medlineplus.gov/healthtopics.html" target="_blank" rel="noopener noreferrer">Explore health topics ↗</a></div>}
 </div>;
}

export default function AnatomyAtlas() {
 const {portfolio}=usePortfolio();
 const [view,setView]=useState('front');
 const [system,setSystem]=useState('All systems');
 const [query,setQuery]=useState('');
 const [selectedId,setSelectedId]=useState('heart');
 const parts=useMemo(()=>anatomyParts.map(p=>anatomyCopy(p,portfolio.anatomy)),[portfolio.anatomy]);
 const matched=parts.filter(p=>(system==='All systems'||p.system===system) && `${p.name} ${p.description} ${p.conditions}`.toLowerCase().includes(query.trim().toLowerCase()));
 const viewed=matched.filter(p=>p.view===view);
 const selected=viewed.find(p=>p.id===selectedId)||viewed[0]||null;
 const selectPart = part => {setSelectedId(part.id);setView(part.view);};
 return <div className="anatomy-page">
  <section className="atlas-intro"><div className="site-container"><div className="atlas-breadcrumb"><Link to="/">Portfolio</Link><span>/</span><Link to="/study">Study</Link><span>/</span>Anatomy atlas</div><div className="atlas-intro-grid"><div><p className="atlas-kicker"><span className="atlas-live-dot"/> THE INTERACTIVE BODY ATLAS</p><h1>Inside the <em>human</em> body.</h1><p>Explore major organs and anatomical regions. Select a labelled point to learn what the structure does and review conditions associated with it.</p></div><div className="atlas-intro-aside"><span>INTERACTIVE REFERENCE / 01</span><strong>{anatomyParts.length}</strong><small>illustrated structures<br/>across two body views</small></div></div></div></section>
  <section className="site-container atlas-workspace" aria-label="Interactive body atlas">
   <div className="atlas-toolbar"><div className="atlas-filter-label">EXPLORE BY SYSTEM</div><div className="atlas-system-select"><select aria-label="Filter body system" value={system} onChange={e=>setSystem(e.target.value)}>{anatomySystems.map(s=><option key={s} value={s}>{s}</option>)}</select></div><label className="atlas-search"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search organ, region or condition" aria-label="Search body structures" /></label></div>
   <div className="atlas-main-grid"><div className="atlas-figure-card"><div className="atlas-figure-top"><div><span className="atlas-figure-kicker">ANATOMY / VISUAL EXPLORER</span><h2>{view==='front'?'Anterior view':'Posterior view'}</h2></div><div className="atlas-view-switch" role="group" aria-label="Select diagram view"><button className={view==='front'?'active':''} onClick={()=>setView('front')} aria-pressed={view==='front'}>Front</button><button className={view==='back'?'active':''} onClick={()=>setView('back')} aria-pressed={view==='back'}>Back</button></div></div>
    <div className="atlas-mobile-picker"><label htmlFor="mobile-anatomy-part">Choose a body part</label><select id="mobile-anatomy-part" value={selected?.id || ''} onChange={e=>setSelectedId(e.target.value)} disabled={!viewed.length}>{viewed.length?viewed.map(part=><option key={part.id} value={part.id}>{part.name}</option>):<option value="">No structures in this view</option>}</select><a href="#atlas-details">Read selected part details ↓</a></div>
    <div className="atlas-diagram"><AnatomyIllustration view={view} points={viewed} selectedId={selected?.id} onSelect={setSelectedId}/></div>
    <div className="atlas-figure-footer"><span><i aria-hidden="true"/> {viewed.length} visible structures</span><span>SELECT A LABEL OR BLUE MARKER</span></div>
   </div>
   <aside id="atlas-details" className="atlas-detail-card" aria-live="polite"><AnatomyDetail part={selected}/></aside>
   </div>
   <div className="atlas-browser"><div className="atlas-browser-heading"><div><p className="atlas-kicker">STRUCTURE INDEX</p><h2>Browse the body</h2></div><span>{matched.length} matching structures</span></div>
   {matched.length ? <div className="atlas-structure-list">{matched.map(p=><button key={p.id} className={`atlas-structure-row ${selected?.id===p.id?'active':''}`} onClick={()=>selectPart(p)}><span className="atlas-structure-dot"/><strong>{p.name}</strong><small>{p.system}</small><span aria-hidden="true">↗</span></button>)}</div> : <div className="atlas-no-match">No structures match. Try a different system or search term.</div>}
   </div>
   <p className="atlas-edu-disclaimer">Educational, simplified anatomy only. The positions, sizes and organs shown are not anatomically exact or exhaustive. Information is not intended to diagnose or treat disease. Content should be independently verified using trusted medical references.</p>
  </section>
 </div>;
}
