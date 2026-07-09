import { useState, useEffect } from "react";
import { getDiagram } from "../utils/diagrams";

export default function DiagramCard({ query }) {
  const [diagram, setDiagram] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!query) return;
    let cancelled = false;
    setDiagram(null);
    setImgLoaded(false);
    setImgFailed(false);
    setFetching(true);

    getDiagram(query).then(result => {
      if (!cancelled) {
        setDiagram(result);
        setFetching(false);
      }
    }).catch(() => {
      if (!cancelled) setFetching(false);
    });

    return () => { cancelled = true; };
  }, [query]);

  if (!query || (!fetching && !diagram)) return null;

  if (fetching) {
    return (
      <div className="mb-6 glass border border-blue-900/25 rounded-xl p-4 flex items-center gap-3">
        <div className="dot-loader flex gap-1.5"><span /><span /><span /></div>
        <span className="text-[11px] text-slate-700 font-mono">Loading clinical diagram...</span>
      </div>
    );
  }

  if (!diagram || imgFailed) return null;

  return (
    <div className="mb-6 glass border border-blue-900/25 rounded-xl overflow-hidden animate-fade-in">
      <div className="border-b border-blue-900/20 px-4 py-2.5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-blue-700 uppercase tracking-widest">Clinical Diagram</span>
        <a
          href={`https://en.wikipedia.org/wiki/${diagram.wikiTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-mono text-slate-700 hover:text-blue-500 transition-colors"
        >
          {diagram.source}
        </a>
      </div>
      <div className="p-4">
        {!imgLoaded && (
          <div className="h-48 flex items-center justify-center">
            <div className="dot-loader flex gap-1.5"><span /><span /><span /></div>
          </div>
        )}
        <img
          src={diagram.url}
          alt={diagram.caption}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgFailed(true)}
          className={`w-full max-h-80 object-contain rounded-lg bg-white/5 transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0 h-0"}`}
        />
        {imgLoaded && (
          <p className="text-[11px] text-slate-600 font-mono text-center mt-3 leading-relaxed">
            {diagram.caption}
          </p>
        )}
      </div>
    </div>
  );
}
