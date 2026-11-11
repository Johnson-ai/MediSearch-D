import React from 'react';

function AnatomicalForm({view}) {
  return <g className="atlas-form">
    <defs>
      <linearGradient id="skinwash" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e7f1f9"/><stop offset="0.55" stopColor="#f9fdff"/><stop offset="1" stopColor="#cbdff0"/></linearGradient>
      <linearGradient id="organwash" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#78b9df"/><stop offset="1" stopColor="#e3f3fb"/></linearGradient>
      <linearGradient id="nervwash" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#91bbdc"/><stop offset="1" stopColor="#d6e6f5"/></linearGradient>
      <pattern id="atlas-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#dce9f4" strokeWidth=".7"/></pattern>
    </defs>
    <rect x="166" y="27" width="320" height="974" rx="158" fill="url(#atlas-grid)" opacity=".35" />
    <ellipse cx="325" cy="509" rx="151" ry="468" fill="#deedf8" opacity=".27"/>
    <g fill="url(#skinwash)" stroke="#8fb4d0" strokeWidth="2.2" strokeLinejoin="round">
      <path d="M277 655L319 660L310 757L306 836L300 944L304 963Q302 985 286 989Q273 989 268 978L267 953L268 864L258 787L250 702L263 650Z"/>
      <path d="M373 655L331 660L340 757L344 836L350 944L346 963Q348 985 364 989Q377 989 382 978L383 953L382 864L392 787L400 702L387 650Z"/>
      <path d="M240 233Q219 225 213 254L190 355L177 465L166 538Q161 560 176 585Q189 599 199 579Q204 566 201 552L210 499L225 422L258 296Z"/>
      <path d="M410 233Q431 225 437 254L460 355L473 465L484 538Q489 560 474 585Q461 599 451 579Q446 566 449 552L440 499L425 422L392 296Z"/>
      <path d="M301 180L299 197Q267 211 246 225Q234 236 240 263L258 373Q268 432 267 487L262 576Q254 619 270 657Q280 681 325 691Q370 681 380 657Q396 619 388 576L383 487Q382 432 392 373L410 263Q416 236 404 225Q383 211 351 197L349 180Z"/>
      <path d="M279 110C279 71 300 48 325 48C350 48 371 71 371 110C371 145 355 180 325 180C295 180 279 145 279 110Z"/>
      <ellipse cx="276" cy="126" rx="7" ry="16"/><ellipse cx="374" cy="126" rx="7" ry="16"/>
    </g>
    <g fill="none" stroke="#b4d0e4" strokeWidth="1.3" opacity=".9">
      <path d="M299 196Q325 211 351 196M325 213V650M269 656Q325 671 381 656"/>
      <path d="M284 695L280 792M366 695L370 792M282 835L278 921M368 835L372 921"/>
      <path d="M216 314L198 402M434 314L452 402"/>
    </g>
    {view === 'front' ? <g className="atlas-internal-art">
      <g fill="none" stroke="#94b6d0" strokeWidth="1.5"><path d="M303 101Q313 85 325 99Q341 82 350 106M305 116Q326 124 342 114M310 132Q327 123 342 134"/><path d="M304 157Q325 176 345 157"/></g>
      <path d="M308 212Q301 225 313 235Q310 245 325 248Q340 245 337 235Q350 225 342 212Q335 214 325 223Q315 214 308 212Z" fill="#89bddb" stroke="#4f8eb8" strokeWidth="1.3"/>
      <path d="M324 232V295" fill="none" stroke="#7eaac9" strokeWidth="7" strokeLinecap="round" strokeDasharray="3 6"/>
      <path d="M312 247Q291 242 275 258Q266 272 269 307L280 362Q295 374 313 352Q321 328 319 287Z" fill="url(#organwash)" stroke="#5993bc" strokeWidth="1.8"/>
      <path d="M338 247Q359 242 375 258Q384 272 381 307L370 362Q355 374 337 352Q329 328 331 287Z" fill="url(#organwash)" stroke="#5993bc" strokeWidth="1.8"/>
      <path d="M330 302C344 277 360 296 356 318Q351 337 335 350Q312 332 315 312C318 301 325 299 330 302Z" fill="#4e8faf" stroke="#255c87" strokeWidth="2"/>
      <g stroke="#bdd7e9" strokeWidth="2" fill="none" opacity=".95">{[270,289,309,329,348].map((y,i)=><React.Fragment key={i}><path d={`M324 ${y} Q287 ${y-14} 266 ${y+7}`}/><path d={`M326 ${y} Q363 ${y-14} 384 ${y+7}`}/></React.Fragment>)}</g>
      <path d="M271 386Q297 369 339 391L337 424Q314 448 275 430Q266 421 271 386Z" fill="#86b6d2" stroke="#4c8faf" strokeWidth="1.8"/>
      <path d="M357 385Q375 373 386 400Q388 429 370 443Q350 434 352 417Z" fill="#a3c9de" stroke="#6597b9" strokeWidth="1.8"/>
      <path d="M331 448Q352 443 374 450" fill="none" stroke="#5d9cc3" strokeWidth="11" strokeLinecap="round"/>
      <path d="M281 468Q263 485 277 509Q291 520 302 500L303 472Q292 457 281 468ZM366 468Q385 485 371 509Q357 520 346 500L345 472Q356 457 366 468Z" fill="#bad5e7" stroke="#6d9dbf" strokeWidth="1.8"/>
      <path d="M291 501Q275 526 290 571H362Q375 526 357 501Z" fill="none" stroke="#6fa7c9" strokeWidth="12" strokeLinejoin="round"/>
      <path d="M303 515Q340 508 341 528Q304 530 317 547Q343 537 347 553Q325 563 315 568" stroke="#7fb8da" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M314 599Q325 587 337 599Q345 620 325 631Q305 620 314 599Z" fill="#91bcd6" stroke="#5e94b7" strokeWidth="1.5"/>
      <path d="M313 639Q325 645 337 639L332 661H318Z" fill="#b1cee1" stroke="#649abe" strokeWidth="1.5"/>
      <path d="M293 385Q304 384 318 391" stroke="#5a98bf" fill="none" strokeWidth="2"/>
    </g> : <g className="atlas-back-art" fill="none">
      <path d="M325 183V619" stroke="#79a8ca" strokeWidth="14" strokeLinecap="round" opacity=".35"/>
      {[194,213,233,253,273,293,313,333,353,373,393,413,433,453,473,493,513,533,553].map((y,i)=><ellipse key={i} cx="325" cy={y} rx={i<3?10:12} ry="8" stroke="#467eaa" fill="#c3ddea" strokeWidth="1.2" />)}
      <path d="M312 245Q282 243 268 285L296 367L318 345ZM338 245Q368 243 382 285L354 367L332 345Z" fill="#b0d2e6" stroke="#6398bf" strokeWidth="2"/>
      <path d="M285 221Q250 263 266 353L305 303Z" fill="#aed0e6" stroke="#8bb9d9" opacity=".6"/>
      <path d="M365 221Q400 263 384 353L345 303Z" fill="#aed0e6" stroke="#8bb9d9" opacity=".6"/>
      <path d="M282 468Q267 484 279 506Q295 518 308 496L307 470Q296 462 282 468ZM367 468Q383 484 371 506Q355 518 342 496L343 470Q354 462 367 468Z" fill="#87b8d8" stroke="#5a91bb" strokeWidth="2"/>
      <path d="M325 639Q300 640 277 658L288 697Q315 706 325 679Q335 706 362 697L373 658Q350 640 325 639Z" fill="#a5c9e0" stroke="#6496bc" strokeWidth="1.5"/>
      <path d="M285 702L275 784M365 702L375 784M281 832L283 927M369 832L367 927" stroke="#87b4d2" strokeWidth="11" strokeLinecap="round"/>
      <path d="M311 108Q322 123 339 113M312 129Q324 140 341 132" stroke="#6a9cc0" strokeWidth="2"/>
    </g>}
  </g>;
}

export default function AnatomyIllustration({view='front', points=[], selectedId, onSelect, showLabels=true, className=''}) {
 const arrange = side => points.filter(part=>part.side===side).sort((a,b)=>a.y-b.y).map((part,i,arr)=>({part,labelY:arr.length===1 ? part.y : 96 + i*(873/Math.max(1,arr.length-1))}));
 const arranged=[...arrange('left'),...arrange('right')];
 const activate=(event,part)=>{if(event.type==='keydown' && event.key!=='Enter' && event.key!==' ')return; event.preventDefault(); onSelect?.(part.id);};
 return <svg className={`anatomy-svg ${className}`} viewBox="0 0 650 1030" role="img" aria-label={`Interactive ${view} human body diagram with ${points.length} labelled selectable structures`}>
   <title>{view === 'front' ? 'Anterior human anatomy' : 'Posterior human anatomy'}</title>
   <AnatomicalForm view={view}/>
   {arranged.map(({part,labelY})=>{
     const isActive=part.id===selectedId;const fromX=part.side==='left'?167:483; const endX=part.side==='left'?26:626;const isLeft=part.side==='left';
     return <g key={part.id} className={`anatomy-hotspot ${isActive?'is-active':''}`} role="button" tabIndex={0} aria-label={`${part.name}: view functions and conditions`} onClick={event=>activate(event,part)} onKeyDown={event=>activate(event,part)}>
      {showLabels && <>
       <path className="anatomy-leader" d={`M${part.x} ${part.y} C${isLeft?part.x-35:part.x+35} ${part.y} ${isLeft?fromX+35:fromX-35} ${labelY} ${fromX} ${labelY}`} fill="none"/>
       <circle cx={fromX} cy={labelY} r="2.5" className="anatomy-line-end" />
       <rect x={isLeft?9:486} y={labelY-16} width="156" height="32" rx="7" fill="transparent"/>
       <text className="anatomy-label" x={endX} y={labelY+4} textAnchor={isLeft?'start':'end'}>{part.name}</text>
      </>}
      <circle className="anatomy-halo" cx={part.x} cy={part.y} r={isActive?20:14}/><circle className="anatomy-target" cx={part.x} cy={part.y} r="7.5"/><circle cx={part.x} cy={part.y} r="2.2" fill="#fff" pointerEvents="none"/>
     </g>;
   })}
   <text x="325" y="1016" textAnchor="middle" className="anatomy-svg-caption">SCHEMATIC · NOT TO SCALE · {view==='front'?'ANTERIOR':'POSTERIOR'} VIEW</text>
 </svg>;
}
