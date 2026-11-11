import { content, configured, requireMethod, send, internalError } from '../lib/server.js';

// Always stream PDFs uploaded to this site's own Storage bucket, with an attachment
// header. This forces a genuine download even though Storage uses another origin.
export default async function handler(req, res) {
 if (!requireMethod(req,res,'GET')) return;
 try {
  const url=(await content()).site?.cvUrl;
  if (!url) return send(res,404,{error:'The CV has not been uploaded yet.'});
  if (!/^https:\/\/[^\s]+$/i.test(url)) return send(res,400,{error:'Invalid CV URL.'});
  if (!configured()) return send(res,503,{error:'CV storage is not configured.'});
  const storageBase=`${process.env.SUPABASE_URL.replace(/\/$/,'')}/storage/v1/object/public/${encodeURIComponent(process.env.SUPABASE_STORAGE_BUCKET||'portfolio-assets')}/`;
  const pdfUrl=new URL(url);
  if (!url.startsWith(storageBase) || !pdfUrl.pathname.toLowerCase().endsWith('.pdf')) {
   // An external HTTPS link entered in the CMS remains usable, though only
   // uploaded PDFs can be forced to download with an attachment header.
   res.writeHead(302,{Location:url,'Cache-Control':'no-store'});res.end();return;
  }
  const file=await fetch(url,{headers:{Accept:'application/pdf'},signal:AbortSignal.timeout(8000)});
  if (!file.ok) return send(res,502,{error:'CV file is unavailable.'});
  const bytes=Buffer.from(await file.arrayBuffer());
  if (bytes.length>3_000_000 || bytes.subarray(0,5).toString('ascii')!=='%PDF-') return send(res,502,{error:'Invalid stored CV file.'});
  res.writeHead(200,{'Content-Type':'application/pdf','Content-Disposition':'attachment; filename="Abigael-Akossou-CV.pdf"','Content-Length':bytes.length,'Cache-Control':'public, max-age=120','X-Content-Type-Options':'nosniff'});
  res.end(bytes);
 }catch(error){internalError(res,error)}
}
