import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AnatomyIllustration from './AnatomyIllustration';
import { anatomyCopy, anatomyParts } from '../data/anatomy';
import { usePortfolio } from '../portfolio/PortfolioContext';

const previewIds = ['brain', 'right-lung', 'heart', 'liver', 'stomach', 'left-kidney', 'bladder'];
const splitItems = text => String(text || '').split('|').map(item => item.trim()).filter(Boolean);

function SelectedStructure({ part, mobile = false, detailRef }) {
  return <div
    ref={detailRef}
    className={mobile ? 'home-atlas-mobile-detail' : 'home-atlas-part'}
    aria-live="polite"
    aria-atomic="true"
    role="status"
  >
    <span>{mobile ? 'SELECTED BODY PART' : 'NOW EXPLORING'}</span>
    <strong>{part.name}</strong>
    <p>{part.description}</p>
    <div className="atlas-teaser-tags" aria-label="Functions">
      {splitItems(part.functions).map(item => <span key={item}>{item}</span>)}
    </div>
    {mobile && <div className="home-atlas-conditions">
      <span>COMMON CONDITIONS</span>
      <p>{splitItems(part.conditions).join(' · ')}</p>
    </div>}
  </div>;
}

export default function AnatomyTeaser() {
  const { portfolio } = usePortfolio();
  const [id, setId] = useState('heart');
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches);
  const mobileDetailRef = useRef(null);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)');
    const update = () => setIsMobile(media.matches);
    update();
    if (media.addEventListener) media.addEventListener('change', update);
    else media.addListener(update);
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', update);
      else media.removeListener(update);
    };
  }, []);
  const points = anatomyParts
    .filter(part => previewIds.includes(part.id))
    .map(part => anatomyCopy(part, portfolio.anatomy));
  const selected = points.find(part => part.id === id) || points[0];

  const selectPart = nextId => {
    setId(nextId);
    if (isMobile) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      // The selected text is below the illustration on phones; keep the result in view.
      window.requestAnimationFrame(() => mobileDetailRef.current?.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest'
      }));
    }
  };

  return <section className="home-atlas" aria-label="Interactive anatomy preview">
    <div className="site-container home-atlas-inner">
      <div className="home-atlas-copy motion-reveal">
        <span className="med-section-label"><span className="med-cross-small">+</span> STUDY / ANATOMY</span>
        <h2>Explore the <em>human body.</em></h2>
        <p>Select a highlighted organ to see what it does and conditions associated with it. The full anatomy atlas includes front and back views.</p>
        <SelectedStructure part={selected} />
        <Link className="primary-button" to="/study/anatomy">Open the full anatomy atlas <span aria-hidden="true">↗</span></Link>
      </div>

      <div className="home-atlas-device motion-reveal">
        <div className="home-atlas-device-top"><span><i/> INTERACTIVE ANATOMY</span><span>FRONT VIEW</span></div>
        <AnatomyIllustration
          view="front" points={points} showLabels={false}
          viewport={isMobile ? '145 70 360 660' : '0 0 650 1030'}
          largeTargets={isMobile}
          selectedId={selected.id} onSelect={selectPart}
        />
        <div className="home-atlas-device-bottom"><span>TAP A MARKER OR CHOOSE AN ORGAN</span><span>{points.length} REGIONS</span></div>

        <div className="home-atlas-mobile-controls">
          <p className="home-atlas-mobile-hint">Choose a body part</p>
          <div className="home-atlas-choice-grid" role="group" aria-label="Select an organ to learn about">
            {points.map(part => <button
              key={part.id} type="button"
              className={`home-atlas-choice ${selected.id === part.id ? 'is-selected' : ''}`}
              aria-pressed={selected.id === part.id}
              onClick={() => selectPart(part.id)}
            >{part.name}</button>)}
          </div>
          <SelectedStructure part={selected} mobile detailRef={mobileDetailRef} />
          <p className="home-atlas-mobile-disclaimer">Educational anatomy illustration; not a diagnostic tool.</p>
          <Link className="home-atlas-mobile-atlas-link" to="/study/anatomy">
            Explore all body structures <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  </section>;
}
