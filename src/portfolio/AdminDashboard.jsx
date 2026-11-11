import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from './PortfolioContext';
import DiaryEditor from './DiaryEditor';

const tabs = [
 {id:'site',label:'Identity, contact & CV',kind:'siteFields'},
 {id:'about',label:'About page',kind:'siteFields'},
 {id:'updates',label:'Monthly progress journal',kind:'rows'},
 {id:'strengths',label:'Core values',kind:'rows'},
 {id:'experience',label:'Experience',kind:'rows'},
 {id:'education',label:'Education',kind:'rows'},
 {id:'certifications',label:'Certifications',kind:'rows'},
 {id:'skills',label:'Skills',kind:'rows'},
 {id:'projects',label:'Projects',kind:'rows'},
 {id:'achievements',label:'Achievements',kind:'rows'},
 {id:'study',label:'Study landing page',kind:'object'},
 {id:'anatomy',label:'Anatomy atlas content',kind:'anatomy'},
 {id:'activity',label:'My study progress',kind:'activity'},
 {id:'diary',label:'Private diary',kind:'diary'},
];
const labels = {
 name:'Full display name',shortName:'Initials',eyebrow:'Professional eyebrow',role:'Current professional status / role',
 headline:'Homepage headline',intro:'Homepage introduction',aboutHeading:'About page heading',about:'About me — biography',
 location:'Location',email:'Public contact email',telephone:'Telephone',linkedin:'LinkedIn (https URL)',website:'Website (https URL)',
 portraitUrl:'Portrait image URL',cvUrl:'CV PDF (upload or HTTPS URL)',heroNote:'Photo card caption',footerLine:'Footer description',
 studyFeatureTitle:'Study feature heading',studyFeatureDescription:'Study feature description',contactHeading:'Contact page heading',
 contactIntro:'Contact page intro',contactMessage:'Contact message',valuesStrip:'Values strip (terms separated by |)',
 showContact:'Show public contact information',showStudy:'Show Study navigation',seoTitle:'Browser title / SEO',
 seoDescription:'Search description',title:'Title / milestone',organisation:'Organisation / institution (optional)',
 period:'Date range / period (optional)',month:'Month / year (required for journal updates)',category:'Update category',
 description:'Description',url:'Reference / project URL (https)',imageUrl:'Update image URL (optional)',
 functions:'Functions (separate with |)',conditions:'Conditions (separate with |)'
};
const siteFieldGroups = {
 site: ['name','shortName','eyebrow','headline','location','email','telephone','linkedin','website','portraitUrl','cvUrl','heroNote','footerLine','studyFeatureTitle','studyFeatureDescription','contactHeading','contactIntro','contactMessage','valuesStrip','showContact','showStudy','seoTitle','seoDescription'],
 about: ['aboutHeading','about','role','intro']
};
const longFields=new Set(['intro','about','description','heroNote','seoDescription','studyFeatureDescription','contactIntro','functions','conditions']);
const categories=['Clinical placement','Education','Training','Certification','Project','Achievement','Research','Volunteering','Professional reflection','Other'];
function Field({name,value,onChange}) {
 if(typeof value==='boolean') return <label className="admin-checkbox"><input type="checkbox" checked={value} onChange={e=>onChange(e.target.checked)}/><span>{labels[name]||name}</span></label>;
 if(name==='month') return <label className="admin-field"><span>{labels[name]}</span><input type="month" min="1900-01" max="2199-12" value={value||''} onChange={e=>onChange(e.target.value)}/></label>;
 if(name==='category') return <label className="admin-field"><span>{labels[name]}</span><select value={value||''} onChange={e=>onChange(e.target.value)}><option value="">Select category</option>{[...new Set([...categories,...(value?[value]:[])])].map(c=><option key={c} value={c}>{c}</option>)}</select></label>;
 return <label className="admin-field"><span>{labels[name]||name}</span>{longFields.has(name)?<textarea rows={name==='about'?6:3} value={value??''} onChange={e=>onChange(e.target.value)}/>:<input value={value??''} type={name==='email'?'email':'text'} onChange={e=>onChange(e.target.value)}/>}</label>;
}
async function request(path,options={}) {
 const res=await fetch(path,{credentials:'same-origin',...options,headers:{'Content-Type':'application/json',...options.headers}});
 const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data.error||`Server error ${res.status}`);return data;
}
const rowFields={
 updates:['month','category','title','organisation','description','url','imageUrl'],
 strengths:['title','description'], skills:['title','description'],
 experience:['title','organisation','month','period','description'],
 education:['title','organisation','month','period','description'],
 certifications:['title','organisation','month','period','description'],
 projects:['title','organisation','month','period','description','url'],
 achievements:['title','organisation','month','period','description']
};
export default function AdminDashboard(){
 const navigate=useNavigate();const {portfolio,refresh}=usePortfolio();const mainRef=useRef(null);
 const [progress,setProgress]=useState({history:[],attempts:[]});const [anatomyIndex,setAnatomyIndex]=useState(0);
 const [auth,setAuth]=useState('checking'),[email,setEmail]=useState(''),[password,setPassword]=useState('');
 const [draft,setDraft]=useState(null),[tab,setTab]=useState('site'),[busy,setBusy]=useState(false);
 const [error,setError]=useState(''),[notice,setNotice]=useState('');
 const [diaryDirty,setDiaryDirty]=useState(false);
 useEffect(()=>{request('/api/auth/session').then(d=>setAuth(d.authenticated?'yes':'no')).catch(()=>setAuth('no'));},[]);
 useEffect(()=>{if(auth==='yes'&&!draft)setDraft(structuredClone(portfolio));},[auth,portfolio,draft]);
 useEffect(()=>{if(auth==='yes'&&tab==='activity')request('/api/study/progress').then(setProgress).catch(()=>{});},[auth,tab]);
 useEffect(()=>{mainRef.current?.scrollTo({top:0,behavior:'auto'});if(window.matchMedia('(max-width:760px)').matches)window.scrollTo({top:0,behavior:'instant'});},[tab]);
 const login=async e=>{e.preventDefault();setError('');setBusy(true);try{await request('/api/auth/login',{method:'POST',body:JSON.stringify({email,password})});setPassword('');await refresh();setDraft(null);setAuth('yes');navigate('/admin');}catch(err){setError(err.message)}finally{setBusy(false)}};
 const save=async()=>{setError('');setNotice('');setBusy(true);try{await request('/api/admin/content',{method:'PUT',body:JSON.stringify(draft)});await refresh();setNotice('Changes saved and published. Refresh the public page to see them.');mainRef.current?.scrollTo({top:0,behavior:'smooth'});}catch(err){setError(err.message)}finally{setBusy(false)}};
 const changeTab=next=>{if(next===tab)return;if(tab==='diary'&&diaryDirty&&!window.confirm('Discard your unsaved private diary changes?'))return;setDiaryDirty(false);setTab(next);setNotice('');setError('');};
 const logout=async()=>{if(tab==='diary'&&diaryDirty&&!window.confirm('Sign out and discard your unsaved private diary changes?'))return;try{await request('/api/auth/logout',{method:'POST',body:'{}'})}finally{setAuth('no');setDraft(null);navigate('/admin/login')}};
 const updateObject=(key,field,value)=>setDraft(p=>({...p,[key]:{...p[key],[field]:value}}));
 const updateRow=(key,i,field,value)=>setDraft(p=>({...p,[key]:p[key].map((r,j)=>i===j?{...r,[field]:value}:r)}));
 const removeRow=(key,i)=>setDraft(p=>({...p,[key]:p[key].filter((_,j)=>i!==j)}));
 const addRow=key=>setDraft(p=>({...p,[key]:[...p[key],Object.fromEntries(rowFields[key].map(k=>[k,'']))]}));
 const moveRow=(key,i,dir)=>setDraft(p=>{const list=[...p[key]];const j=i+dir;if(j<0||j>=list.length)return p;[list[i],list[j]]=[list[j],list[i]];return {...p,[key]:list}});
 const upload=async(file,field,section='site',rowIndex=-1)=>{
  if(!file)return;setBusy(true);setError('');try{
   const data=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result).split(',')[1]);reader.onerror=reject;reader.readAsDataURL(file)});
   const result=await request('/api/admin/media',{method:'POST',body:JSON.stringify({data,mimeType:file.type})});
   if(rowIndex>=0)updateRow(section,rowIndex,field,result.url);else updateObject(section,field,result.url);
   setNotice('Upload complete. Select Save & publish to make it visible.');
  }catch(err){setError(err.message)}finally{setBusy(false)}
 };
 if(auth==='checking')return <div className="admin-centered">Checking access…</div>;
 if(auth==='no')return <div className="admin-login-page"><div className="admin-login-card"><div className="admin-login-icon">+</div><p className="section-kicker">PRIVATE CONTENT MANAGEMENT</p><h1>Portfolio editor</h1><p>Sign in to manage Abigael's professional CV, monthly journal, and Study content.</p><form onSubmit={login}><Field name="email" value={email} onChange={setEmail}/><label className="admin-field"><span>Password</span><input required type="password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="current-password"/></label>{error&&<div className="admin-alert">{error}</div>}<button className="primary-button admin-submit" disabled={busy}>{busy?'Checking…':'Sign in securely →'}</button></form><a href="/">← Return to portfolio</a></div></div>;
 const active=tabs.find(t=>t.id===tab);
 return <div className="admin-dashboard"><aside className="admin-sidebar"><div className="admin-identity"><span className="brand-mark">+</span><div><strong>Portfolio CMS</strong><small>Abigael Akossou</small></div></div><select className="admin-mobile-select" value={tab} onChange={e=>changeTab(e.target.value)} aria-label="Choose content section">{tabs.map(t=><option value={t.id} key={t.id}>{t.label}</option>)}</select><p className="admin-nav-caption">CONTENT</p><nav>{tabs.map(t=><button className={t.id===tab?'selected':''} key={t.id} onClick={()=>changeTab(t.id)}>{t.label}<span>›</span></button>)}</nav><div className="admin-sidebar-bottom"><a href="/" target="_blank" rel="noopener noreferrer">View website ↗</a><button onClick={logout}>Sign out</button></div></aside>
 <main className="admin-main" ref={mainRef}><header className="admin-topline"><span>CONTENT MANAGEMENT / {active.label.toUpperCase()}</span><div className="admin-actions"><button className="admin-mobile-signout" onClick={logout} type="button">Sign out</button>{active.kind!=='diary'&&active.kind!=='activity'&&<><button disabled={busy} className="admin-preview" onClick={()=>{setDraft(structuredClone(portfolio));setNotice('Unsaved edits discarded.')}}>Discard edits</button><button disabled={busy} className="primary-button" onClick={save}>{busy?'Saving…':'Save & publish ↗'}</button></>}</div></header>
 <div className="admin-content">{active.kind!=='diary'&&<div className="admin-page-title"><p className="section-kicker">EDIT CONTENT</p><h1>{active.label}</h1><p>Manage public content without editing the code. Save & publish makes changes visible on the live website.</p>{tab==='updates'&&<p className="admin-help"><strong>Monthly journal:</strong> Add one milestone per entry. Set its month/year, category, heading, and description. The website automatically groups the newest updates first; visitors can filter by year and category. Only verified accomplishments should be published.</p>}{tab==='about'&&<p className="admin-help"><strong>About page:</strong> Edit the heading, biography, professional role and introduction here. These fields power the public About page and parts of the homepage and CV. Changes are published through the existing content database.</p>}{tab==='site'&&<p className="admin-help"><strong>CV PDF:</strong> Upload a PDF under “CV PDF” below, then Save & publish. The public Download CV button appears on every page and downloads the latest saved file. Leave the field empty until a PDF is ready.</p>}</div>}
 {notice&&<div className="admin-success">{notice}</div>}{error&&<div className="admin-alert">{error}</div>}
 {active.kind==='diary'?<DiaryEditor onDirtyChange={setDiaryDirty}/>:!draft?<p>Loading content…</p>:active.kind==='activity'?<div className="admin-form-panel" style={{display:'block'}}><h3>Saved study searches</h3><p style={{margin:'14px 0 28px',color:'#74889a'}}>{progress.history?.join(' · ')||'No synced searches yet.'}</p><h3>Quiz and mock exam history</h3>{progress.attempts?.length?progress.attempts.map((a,i)=><div key={i} style={{borderBottom:'1px solid #e2eaf0',padding:'14px 0',fontSize:13}}>{a.topic} — {a.correct}/{a.total} correct <span style={{color:'#8395a4',fontSize:11}}> · {new Date(a.created_at).toLocaleDateString()}</span></div>):<p style={{padding:'15px 0',color:'#74889a'}}>No saved attempts yet. Sign in before using Study to sync results.</p>}</div>
 :active.kind==='anatomy'?<div className="admin-anatomy-editor"><p>Choose a body structure to edit its public description, functions and example conditions. Separate list items with a vertical bar ( | ). Diagram positions stay fixed.</p><label className="admin-field"><span>Choose a body structure</span><select value={anatomyIndex} onChange={e=>setAnatomyIndex(Number(e.target.value))}>{draft.anatomy.map((entry,i)=><option key={entry.id} value={i}>{entry.name}</option>)}</select></label><div className="admin-form-panel">{['name','description','functions','conditions'].map(key=><Field key={key} name={key} value={draft.anatomy[anatomyIndex]?.[key]||''} onChange={value=>updateRow('anatomy',anatomyIndex,key,value)}/>)}</div><p className="admin-atlas-note">Check clinical sources before editing educational medical text.</p></div>
 :active.kind==='siteFields'?<div className="admin-form-panel">{siteFieldGroups[tab].map(key=>{const val=draft.site[key];return <div key={key}><Field name={key} value={val} onChange={value=>updateObject('site',key,value)}/>{tab==='site'&&['portraitUrl','cvUrl'].includes(key)&&<div className="upload-bar"><label className="upload-button">{key==='cvUrl'?'Upload new PDF CV':'Upload profile photo'}<input type="file" accept={key==='cvUrl'?'application/pdf':'image/png,image/jpeg,image/webp'} onChange={e=>{upload(e.target.files?.[0],key);e.target.value='';}} disabled={busy}/></label><span>{key==='cvUrl'?'PDF up to 2.7 MB':'JPG, PNG or WebP up to 2.5 MB'}</span>{val&&key==='cvUrl'&&<a href={val} target="_blank" rel="noopener noreferrer">View uploaded CV ↗</a>}</div>}</div>;})}</div>
 :active.kind==='object'?<div className="admin-form-panel">{Object.entries(draft[tab]).map(([key,val])=><div key={key}><Field name={key} value={val} onChange={value=>updateObject(tab,key,value)}/></div>)}</div>
 :<div className="admin-row-list">{draft[tab].length===0&&<div className="admin-empty"><strong>No entries yet</strong><p>Add genuine, verified information. Each entry stays editable whenever progress changes.</p></div>}{draft[tab].map((row,i)=><article className="admin-row-card" key={i}><div className="admin-row-toolbar"><strong>{tab==='updates'?`Journal entry ${i+1}`:`Entry ${i+1}`}</strong><div><button disabled={i===0} onClick={()=>moveRow(tab,i,-1)} aria-label="Move entry up">↑</button><button disabled={i===draft[tab].length-1} onClick={()=>moveRow(tab,i,1)} aria-label="Move entry down">↓</button><button className="danger-link" onClick={()=>removeRow(tab,i)}>Remove</button></div></div><div className="admin-row-fields">{Object.entries(row).map(([key,val])=><div key={key}><Field name={key} value={val} onChange={value=>updateRow(tab,i,key,value)}/>{tab==='updates'&&key==='imageUrl'&&<div className="upload-bar"><label className="upload-button">Upload journal image<input type="file" accept="image/png,image/jpeg,image/webp" onChange={e=>{upload(e.target.files?.[0],'imageUrl','updates',i);e.target.value='';}} disabled={busy}/></label></div>}</div>)}</div></article>)}<button className="admin-add-row" onClick={()=>addRow(tab)}>+ Add {tab==='updates'?'monthly update':`${active.label.toLowerCase()} entry`}</button></div>}
 {active.kind!=='diary'&&active.kind!=='activity'&&<div className="admin-bottom-actions"><button disabled={busy} onClick={save} className="primary-button">{busy?'Saving…':'Save & publish changes ↗'}</button></div>}</div></main></div>;
}
