import { send, checkOrigin, hasSession, readJson, db, internalError } from '../../lib/server.js';
import { validDiaryId, validateDiaryEntry, DIARY_BUCKET, validDiaryImagePath } from '../../lib/diary.js';

async function cleanup(images=[]) {
  // A best-effort purge of removed private media: never expose the service key to the client.
  for(const path of images) {
    if(!validDiaryImagePath(path))continue;
    try {
      const url=`${process.env.SUPABASE_URL.replace(/\/$/,'')}/storage/v1/object/${encodeURIComponent(DIARY_BUCKET)}/${encodeURIComponent(path)}`;
      const result=await fetch(url,{method:'DELETE',headers:{apikey:process.env.SUPABASE_SERVICE_ROLE_KEY,Authorization:`Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`},redirect:'error'});
      if(!result.ok && result.status!==404)console.error('Private diary photo cleanup failed',result.status);
    } catch(error) { console.error('Private diary photo cleanup failed',error); }
  }
}

export default async function handler(req, res) {
  // No public diary route or responses. Check authorization before contacting the database.
  if (!hasSession(req)) return send(res, 401, { error:'Sign in to access the private diary.' });
  if (!['GET','POST','PUT','DELETE'].includes(req.method)) return send(res,405,{error:'Method not allowed.'},{Allow:'GET, POST, PUT, DELETE'});
  if (req.method !== 'GET' && !checkOrigin(req)) return send(res,403,{error:'Invalid request origin.'});
  try {
    if (req.method === 'GET') {
      const rawOffset = new URL(req.url || '/', 'http://localhost').searchParams.get('offset') || '0';
      if (!/^(0|[1-9]\d{0,5})$/.test(rawOffset)) return send(res,400,{error:'Invalid page offset.'});
      const offset = Number(rawOffset);
      const rows = await db(`private_diary_entries?owner=eq.owner&select=id,title,body,mood,entry_date,image_paths,created_at,updated_at&order=entry_date.desc,created_at.desc&limit=51&offset=${offset}`);
      return send(res,200,{entries:(rows || []).slice(0,50),nextOffset:rows?.length>50?offset+50:null});
    }
    const id = new URL(req.url || '/', 'http://localhost').searchParams.get('id');
    if (req.method !== 'POST' && !validDiaryId(id)) return send(res,400,{error:'Invalid diary entry ID.'});
    if (req.method === 'DELETE') {
      const rows = await db(`private_diary_entries?id=eq.${id}&owner=eq.owner`,{method:'DELETE',prefer:'return=representation'});
      if(!rows?.length)return send(res,404,{error:'Diary entry not found.'});
      await cleanup(rows[0].image_paths);
      return send(res,200,{ok:true});
    }
    let data;
    try { data = validateDiaryEntry(await readJson(req,50_000)); }
    catch(error) { return send(res,error.message==='Request too large.'?413:400,{error:error.message}); }
    if (req.method === 'POST') {
      const rows = await db('private_diary_entries',{method:'POST',body:{owner:'owner',...data},prefer:'return=representation'});
      return send(res,201,{entry:rows?.[0]});
    }
    const old = await db(`private_diary_entries?id=eq.${id}&owner=eq.owner&select=image_paths&limit=1`);
    if(!old?.length) return send(res,404,{error:'Diary entry not found.'});
    const rows = await db(`private_diary_entries?id=eq.${id}&owner=eq.owner`,{method:'PATCH',body:{...data,updated_at:new Date().toISOString()},prefer:'return=representation'});
    if(!rows?.length)return send(res,404,{error:'Diary entry not found.'});
    await cleanup((old[0].image_paths || []).filter(path=>!data.image_paths.includes(path)));
    return send(res,200,{entry:rows[0]});
  } catch(error) { internalError(res,error); }
}
