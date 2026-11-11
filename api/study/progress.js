import { send, checkOrigin, hasSession, readJson, db, internalError } from '../../lib/server.js';
export default async function handler(req,res) {
 if(!hasSession(req)) return send(res,401,{error:'Owner access required.'});
 try {
  if(req.method==='GET'){
   const [rows,attempts]=await Promise.all([db('study_progress?owner=eq.owner&select=history&limit=1'), db('study_attempts?owner=eq.owner&select=type,topic,correct,total,created_at&order=created_at.desc&limit=60')]);
   return send(res,200,{history:rows?.[0]?.history||[],attempts:attempts||[]});
  }
  if(req.method==='PUT'){
   if(!checkOrigin(req))return send(res,403,{error:'Invalid origin.'});
   const {history}=await readJson(req,5000);
   if(!Array.isArray(history)||history.length>30||history.some(t=>typeof t!=='string'||t.length>160))return send(res,400,{error:'Invalid history.'});
   await db('study_progress?on_conflict=owner',{method:'POST',prefer:'resolution=merge-duplicates,return=minimal',body:{owner:'owner',history,updated_at:new Date().toISOString()}});
   return send(res,200,{ok:true});
  }
  return send(res,405,{error:'Method not allowed.'});
 }catch(err){internalError(res,err)}
}
