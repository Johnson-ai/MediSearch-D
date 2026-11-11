import { randomUUID } from 'node:crypto';
import { send, checkOrigin, hasSession, readJson, rateLimit, internalError } from '../../../lib/server.js';
import { DIARY_BUCKET, detectDiaryImage, validDiaryImagePath } from '../../../lib/diary.js';

function storageUrl(path) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) throw new Error('Storage is not configured.');
  const base = process.env.SUPABASE_URL.replace(/\/$/,'');
  return `${base}/storage/v1/object/${encodeURIComponent(DIARY_BUCKET)}/${encodeURIComponent(path)}`;
}
function serviceHeaders(extra={}) {
  return { apikey:process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization:`Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,...extra };
}
export default async function handler(req,res) {
  if (!hasSession(req)) return send(res,401,{error:'Sign in to access private images.'});
  if (!['GET','POST','DELETE'].includes(req.method)) return send(res,405,{error:'Method not allowed.'},{Allow:'GET, POST, DELETE'});
  if (req.method !== 'GET' && !checkOrigin(req)) return send(res,403,{error:'Invalid request origin.'});
  try {
    if (req.method === 'GET') {
      const path = new URL(req.url || '/', 'http://localhost').searchParams.get('path');
      if (!validDiaryImagePath(path)) return send(res,400,{error:'Invalid image path.'});
      const response = await fetch(storageUrl(path),{headers:serviceHeaders(),redirect:'error'});
      if (response.status === 404) return send(res,404,{error:'Image not found.'});
      if (!response.ok) throw new Error('Private image fetch failed.');
      const contentType = response.headers.get('content-type') || '';
      if (!['image/jpeg','image/png','image/webp'].includes(contentType.split(';')[0].trim().toLowerCase())) throw new Error('Invalid stored image MIME type.');
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length > MAX_GET_BYTES) throw new Error('Image size limit exceeded.');
      res.statusCode=200;
      res.setHeader('Content-Type',contentType);
      res.setHeader('Content-Length',String(bytes.length));
      res.setHeader('Cache-Control','private, no-store, max-age=0');
      res.setHeader('Pragma','no-cache');
      res.setHeader('Vary','Cookie');
      res.setHeader('X-Content-Type-Options','nosniff');
      res.setHeader('X-Robots-Tag','noindex, nofollow, noarchive');
      return res.end(bytes);
    }
    if (req.method === 'DELETE') {
      const path=new URL(req.url || '/', 'http://localhost').searchParams.get('path');
      if(!validDiaryImagePath(path)) return send(res,400,{error:'Invalid image path.'});
      const response=await fetch(storageUrl(path),{method:'DELETE',headers:serviceHeaders(),redirect:'error'});
      if(!response.ok && response.status!==404) throw new Error('Private image deletion failed.');
      return send(res,200,{ok:true});
    }
    if (!(await rateLimit(req,'diary-media',30,3600))) return send(res,429,{error:'Too many image uploads. Try again later.'});
    let image;
    try { const {data,mimeType} = await readJson(req,3_700_000); image=detectDiaryImage(data,mimeType); image.mimeType=mimeType; }
    catch(error){ return send(res,error.message==='Request too large.'?413:400,{error:error.message}); }
    const path=`${randomUUID()}.${image.extension}`;
    const result=await fetch(storageUrl(path),{method:'POST',headers:serviceHeaders({'Content-Type':image.mimeType,'Cache-Control':'private, no-store','x-upsert':'false'}),body:image.bytes,redirect:'error'});
    if (!result.ok) throw new Error('Private image upload failed. Verify diary migration created a private bucket.');
    return send(res,201,{path});
  } catch(error){internalError(res,error);}
}
const MAX_GET_BYTES = 3_000_000;
