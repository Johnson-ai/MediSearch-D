import React from 'react';
// Render model output as React text, not HTML. **emphasis** is supported without trusting markup.
function InlineText({ value }) {
  return String(value).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2,-2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={i}>{part.slice(1,-1)}</em>;
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
export default function ResultRenderer({ text }) {
  if (!text) return null;
  return <div className="result-section">{String(text).split('\n').map((line,i) => {
    const clean=line.trim();
    if(!clean) return <div key={i} className="h-2"/>;
    if(clean.startsWith('### ')) return <h2 key={i}><InlineText value={clean.slice(4)}/></h2>;
    if(clean.startsWith('## ')) return <h1 key={i}><InlineText value={clean.slice(3)}/></h1>;
    if(clean.startsWith('# ')) return <h1 key={i}><InlineText value={clean.slice(2)}/></h1>;
    if(/^[-•]\s/.test(clean)) return <div key={i} className="study-bullet"><span aria-hidden="true">•</span><p><InlineText value={clean.replace(/^[-•]\s/,'')}/></p></div>;
    if(/^\d+\.\s/.test(clean)) return <div key={i} className="study-bullet"><span>{clean.split('.')[0]}.</span><p><InlineText value={clean.replace(/^\d+\.\s/,'')}/></p></div>;
    return <p key={i}><InlineText value={clean}/></p>;
  })}</div>;
}
