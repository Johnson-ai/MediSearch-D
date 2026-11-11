import { randomUUID } from 'node:crypto';
import { send, requireMethod, checkOrigin, hasSession, readJson, internalError } from '../../lib/server.js';
export default async function handler(req, res) {
  if (!requireMethod(req, res, 'POST')) return;
  if (!checkOrigin(req)) return send(res, 403, { error: 'Invalid request origin.' });
  if (!hasSession(req)) return send(res, 401, { error: 'Authentication required.' });
  if (!process.env.SUPABASE_STORAGE_BUCKET) return send(res, 503, { error:'Storage bucket is not configured.' });
  try {
    const { data, mimeType } = await readJson(req, 4_100_000);
    const supported = { 'image/jpeg': ['jpg', 2_500_000], 'image/png': ['png', 2_500_000], 'image/webp': ['webp', 2_500_000], 'application/pdf': ['pdf', 2_700_000] };
    if (!supported[mimeType] || typeof data !== 'string' || data.length > 3_900_000 || !/^[A-Za-z0-9+/]+={0,2}$/.test(data)) return send(res, 400, { error: 'Upload a JPG, PNG, WebP or PDF within the size limit.' });
    const bytes = Buffer.from(data, 'base64');
    const magic = { 'image/jpeg': bytes[0] === 0xff && bytes[1] === 0xd8, 'image/png': bytes.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex')), 'image/webp': bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP', 'application/pdf': bytes.toString('ascii', 0, 5) === '%PDF-' };
    if (!bytes.length || bytes.length > supported[mimeType][1] || !magic[mimeType]) return send(res, 400, { error:'Invalid file or size.' });
    const bucket = encodeURIComponent(process.env.SUPABASE_STORAGE_BUCKET);
    const filename = `${randomUUID()}.${supported[mimeType][0]}`;
    const base = process.env.SUPABASE_URL.replace(/\/$/, '');
    const uploaded = await fetch(`${base}/storage/v1/object/${bucket}/${filename}`, {
      method: 'POST', headers: { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`, 'Content-Type': mimeType, 'Cache-Control':'public, max-age=3600', 'x-upsert':'false' }, body: bytes
    });
    if (!uploaded.ok) throw new Error('Storage upload failed.');
    send(res, 200, { url: `${base}/storage/v1/object/public/${bucket}/${filename}` });
  } catch(error) { if (error.message?.includes('Request too large')) return send(res, 413, { error:'File too large.' }); internalError(res, error); }
}
