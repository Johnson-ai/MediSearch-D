import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnatomyIllustration from './AnatomyIllustration';
import { anatomyCopy, anatomyParts } from '../data/anatomy';
import { usePortfolio } from '../portfolio/PortfolioContext';
const previewIds=['brain','right-lung','heart','liver','stomach','left-kidney','bladder'];
export default function AnatomyTeaser() {
 const {portfolio}=usePortfolio();
 const [id,setId]=useState('heart');
 const points=anatomyParts.filter(p=>previewIds.includes(p.id)).map(p=>anatomyCopy(p,portfolio.anatomy));
 const selected=points.find(p=>p.id===id)||points[0];
 return <section className="home-atlas" aria-label="Interactive anatomy preview">
  <div className="site-container home-atlas-inner">
   <div className="home-atlas-copy motion-reveal"><span className="med-section-label"><span className="med-cross-small">+</span> THE STUDY LAB / INTERACTIVE ATLAS</span><h2>A closer look at <em>life beneath the surface.</em></h2><p>Learn the body one structure at a time. Explore a labelled human-body illustration and discover its vital functions and common conditions.</p>
    <div className="home-atlas-part"><span>NOW EXPLORING</span><strong>{selected.name}</strong><p>{selected.description}</p><div className="atlas-teaser-tags">{selected.functions.split('|').slice(0,2).map(t=><span key={t}>{t.trim()}</span>)}</div></div>
    <Link className="primary-button" to="/study/anatomy">Open the anatomy atlas <span aria-hidden="true">↗</span></Link>
   </div>
   <div className="home-atlas-device motion-reveal"><div className="home-atlas-device-top"><span><i/> INTERACTIVE PREVIEW</span><span>FRONT / 01</span></div><AnatomyIllustration view="front" points={points} showLabels={false} selectedId={id} onSelect={setId}/><div className="home-atlas-device-bottom"><span>SELECT ANY HIGHLIGHTED POINT</span><span>{previewIds.length} REGIONS</span></div></div>
  </div>
 </section>;
}
