import { useEffect, useMemo, useRef, useState } from 'react';
import './diary.css';

const API = '/api/admin/diary';
const MEDIA = '/api/admin/diary/media';
const moods = ['','Reflective','Grateful','Happy','Motivated','Thoughtful','Tired','Challenged','Other'];
const newEntry = () => { const today=new Date(); const iso=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-'); return {title:'',body:'',mood:'',entry_date:iso,image_paths:[]}; };
const snapshot = entry => JSON.stringify({title:entry.title,body:entry.body,mood:entry.mood,entry_date:entry.entry_date,image_paths:entry.image_paths});
const imageSrc = path => `${MEDIA}?path=${encodeURIComponent(path)}`;

async function diaryRequest(path, options={}) {
 const res=await fetch(path,{credentials:'same-origin',cache:'no-store',...options,headers:{...((options.method && options.method !== 'GET')?{'Content-Type':'application/json'}:{}),...options.headers}});
 const data=await res.json().catch(()=>({}));
 if(!res.ok)throw new Error(data.error || `Request failed (${res.status})`);
 return data;
}
async function fileAsBase64(file){
 return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result).split(',')[1]);reader.onerror=()=>reject(new Error('Image could not be read.'));reader.readAsDataURL(file);});
}
function displayDate(date){try{return new Date(`${date}T12:00:00`).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});}catch{return date}}

export default function DiaryEditor({onDirtyChange}){
 const [entries,setEntries]=useState([]);
 const [loading,setLoading]=useState(true);
 const [nextOffset,setNextOffset]=useState(null);
 const [loadingMore,setLoadingMore]=useState(false);
 const [busy,setBusy]=useState(false);
 const [selectedId,setSelectedId]=useState(null);
 const [editor,setEditor]=useState(newEntry);
 const [baseline,setBaseline]=useState(()=>snapshot(newEntry()));
 const [pending,setPending]=useState([]);
 const pendingRef=useRef([]);
 const [search,setSearch]=useState('');
 const [month,setMonth]=useState('');
 const [mobileView,setMobileView]=useState('list');
 const [error,setError]=useState('');
 const [notice,setNotice]=useState('');
 const dirty=snapshot(editor)!==baseline||pending.length>0;
 const visible=useMemo(()=>entries.filter(entry=>{
  if(month&&!entry.entry_date.startsWith(month))return false;
  const term=search.trim().toLowerCase();return !term||`${entry.title} ${entry.body} ${entry.mood}`.toLowerCase().includes(term);
 }),[entries,month,search]);
 const canLeave=()=>!dirty||window.confirm('You have unsaved diary changes. Discard them?');
 const update=(key,value)=>setEditor(old=>({...old,[key]:value}));
 const release=(images)=>images.forEach(item=>URL.revokeObjectURL(item.preview));
 useEffect(()=>{pendingRef.current=pending;},[pending]);
 useEffect(()=>()=>release(pendingRef.current),[]);
 useEffect(()=>{onDirtyChange?.(dirty);},[dirty,onDirtyChange]);
 useEffect(()=>{
  let cancelled=false;
  diaryRequest(API).then(result=>{if(!cancelled){setEntries(result.entries||[]);setNextOffset(result.nextOffset);}}).catch(err=>{if(!cancelled)setError(err.message);}).finally(()=>{if(!cancelled)setLoading(false)});
  return ()=>{cancelled=true;};
 },[]);
 async function loadOlder(){
  if(nextOffset===null||loadingMore)return;setLoadingMore(true);setError('');
  try{const result=await diaryRequest(`${API}?offset=${nextOffset}`);setEntries(old=>{const ids=new Set(old.map(item=>item.id));return [...old,...result.entries.filter(item=>!ids.has(item.id))]});setNextOffset(result.nextOffset);}
  catch(error){setError(error.message);}finally{setLoadingMore(false);}
 }
 function setCurrent(entry){
  release(pending);setPending([]);setSelectedId(entry?.id||null);
  const form=entry?{title:entry.title,body:entry.body,mood:entry.mood,entry_date:entry.entry_date,image_paths:[...entry.image_paths]}:newEntry();
  setEditor(form);setBaseline(snapshot(form));setNotice('');setError('');setMobileView('editor');
 }
 function select(entry){if(!canLeave())return;setCurrent(entry)}
 function addFiles(event){
  const files=[...event.target.files||[]];event.target.value='';if(!files.length)return;
  if(editor.image_paths.length+pending.length+files.length>8){setError('A diary entry can contain up to 8 images.');return;}
  for(const file of files) if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>2_500_000||!file.size){setError('Images must be JPEG, PNG or WebP files under 2.5 MB each.');return;}
  setPending(old=>[...old,...files.map(file=>({id:crypto.randomUUID(),file,preview:URL.createObjectURL(file)}))]);setError('');
 }
 function removePending(id){setPending(old=>{const item=old.find(p=>p.id===id);if(item)URL.revokeObjectURL(item.preview);return old.filter(p=>p.id!==id);})}
 async function save(){
  setError('');setNotice('');setBusy(true);
  const uploaded=[];
  try{
   const form={...editor,image_paths:[...editor.image_paths]};
   for(const p of pending){
    const data=await fileAsBase64(p.file);
    const response=await diaryRequest(MEDIA,{method:'POST',body:JSON.stringify({data,mimeType:p.file.type})});
    uploaded.push(response.path);form.image_paths.push(response.path);
   }
   const creating=!selectedId;
   const result=await diaryRequest(selectedId?`${API}?id=${encodeURIComponent(selectedId)}`:API,{method:selectedId?'PUT':'POST',body:JSON.stringify(form)});
   const saved=result.entry;
   setEntries(old=>[saved,...old.filter(item=>item.id!==saved.id)].sort((a,b)=>b.entry_date.localeCompare(a.entry_date)||b.created_at.localeCompare(a.created_at)));
   if(creating)setNextOffset(old=>old===null?null:old+1);
   release(pending);setPending([]);setSelectedId(saved.id);
   const clean={title:saved.title,body:saved.body,mood:saved.mood,entry_date:saved.entry_date,image_paths:[...saved.image_paths]};
   setEditor(clean);setBaseline(snapshot(clean));setNotice('Entry saved privately. It is not visible on the public website.');
  }catch(err){
   // Uploaded images are not public. Attempt to delete unreferenced images if saving the entry failed.
   await Promise.allSettled(uploaded.map(path=>diaryRequest(`${MEDIA}?path=${encodeURIComponent(path)}`,{method:'DELETE'})));
   setError(err.message);
  }finally{setBusy(false)}
 }
 async function removeEntry(){
  if(!selectedId||!window.confirm('Permanently delete this private diary entry? This cannot be undone.'))return;
  setBusy(true);setError('');setNotice('');
  try{await diaryRequest(`${API}?id=${encodeURIComponent(selectedId)}`,{method:'DELETE'});setEntries(old=>old.filter(item=>item.id!==selectedId));setNextOffset(old=>old===null?null:Math.max(0,old-1));setCurrent(null);setMobileView('list');setNotice('Entry deleted.');}
  catch(err){setError(err.message)}finally{setBusy(false)}
 }
 return <div className="diary-shell" data-mobile-view={mobileView}>
   <div className="diary-intro"><div><p className="section-kicker">PRIVATE SPACE · OWNER ONLY</p><h2>Personal diary</h2><p>Write reflections, keep photographs, and revisit moments. Diary entries are never published to the portfolio or Study pages.</p></div><span className="diary-private-label">Private</span></div>
   {error&&<div className="admin-alert" role="alert">{error}</div>}{notice&&<div className="admin-success" role="status">{notice}</div>}
   <div className="diary-layout">
    <section className="diary-list-panel" aria-label="Diary entries">
     <div className="diary-list-heading"><strong>Entries <span>({entries.length})</span></strong><button type="button" className="diary-new" disabled={busy} onClick={()=>select(null)}>+ New entry</button></div>
     <div className="diary-filters"><input type="search" aria-label="Search diary" placeholder="Search your diary" value={search} onChange={e=>setSearch(e.target.value)}/><input type="month" aria-label="Filter by month" value={month} onChange={e=>setMonth(e.target.value)}/>{month&&<button type="button" className="diary-clear" onClick={()=>setMonth('')}>Clear month</button>}</div>
     {loading?<div className="diary-empty">Loading private entries…</div>:visible.length? <div className="diary-items">{visible.map(entry=><button type="button" key={entry.id} onClick={()=>select(entry)} className={`diary-item ${selectedId===entry.id?'active':''}`}><span className="diary-item-date">{displayDate(entry.entry_date)}{entry.mood&&` · ${entry.mood}`}</span><strong>{entry.title}</strong><span>{entry.body?.slice(0,115)||'Photo entry'}</span>{entry.image_paths.length>0&&<small>{entry.image_paths.length} image{entry.image_paths.length===1?'':'s'}</small>}</button>)}</div>:<div className="diary-empty">{entries.length?'No loaded entries match those filters.':'No diary entries yet. Create your first private entry.'}</div>}{nextOffset!==null&&<button type="button" className="diary-load-more" onClick={loadOlder} disabled={loadingMore}>{loadingMore?'Loading…':'Load older entries'}</button>}
    </section>
    <section className="diary-editor-panel" aria-label="Diary editor">
      <div className="diary-editor-heading"><button type="button" className="diary-back" onClick={()=>setMobileView('list')}>← All entries</button><div><strong>{selectedId?'Edit diary entry':'New diary entry'}</strong><span>Only Abigael's administrator account can read this.</span></div></div>
      <div className="diary-form-grid"><label className="admin-field"><span>Date</span><input type="date" value={editor.entry_date} onChange={e=>update('entry_date',e.target.value)} disabled={busy}/></label><label className="admin-field"><span>How are you feeling? (optional)</span><select value={editor.mood} onChange={e=>update('mood',e.target.value)} disabled={busy}>{moods.map(m=><option key={m} value={m}>{m||'No mood selected'}</option>)}</select></label></div>
      <label className="admin-field"><span>Title</span><input maxLength={160} value={editor.title} onChange={e=>update('title',e.target.value)} placeholder="Give this memory a name" disabled={busy}/></label>
      <label className="admin-field"><span>Diary entry</span><textarea rows={10} maxLength={24000} value={editor.body} onChange={e=>update('body',e.target.value)} placeholder="Write freely. Only you can view this in the private dashboard." disabled={busy}/><small>{editor.body.length.toLocaleString()} / 24,000 characters</small></label>
      <div className="diary-photo-heading"><strong>Private photographs</strong><span>{editor.image_paths.length+pending.length} of 8</span></div>
      <div className="diary-photo-grid">{editor.image_paths.map(path=><div className="diary-photo" key={path}><img src={imageSrc(path)} alt="Private diary attachment" loading="lazy"/><button type="button" disabled={busy} onClick={()=>update('image_paths',editor.image_paths.filter(p=>p!==path))} aria-label="Remove stored image from this entry">Remove</button></div>)}{pending.map(item=><div className="diary-photo" key={item.id}><img src={item.preview} alt={`New image ${item.file.name}`}/><button type="button" disabled={busy} onClick={()=>removePending(item.id)} aria-label={`Remove ${item.file.name}`}>Remove</button></div>)}</div>
      <label className="diary-file-picker"><span>+ Add photographs</span><small>JPG, PNG, WebP · Up to 2.5 MB each · Max 8 per entry</small><input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={addFiles} disabled={busy||editor.image_paths.length+pending.length>=8}/></label>
      <div className="diary-editor-actions"><button type="button" className="primary-button" disabled={busy||loading} onClick={save}>{busy?'Saving…':'Save private entry'}</button>{selectedId&&<button type="button" className="diary-delete" onClick={removeEntry} disabled={busy}>Delete entry</button>}</div>
      <p className="diary-security-note">Photos are served only after administrator authentication and stored in a separate private bucket. This diary is not part of the public CV or monthly progress journal.</p>
    </section>
   </div>
  </div>;
}
