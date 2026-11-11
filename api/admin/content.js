import { send, requireMethod, checkOrigin, hasSession, readJson, db, validatePortfolio, internalError } from '../../lib/server.js';
export default async function handler(req, res) {
  if (!requireMethod(req, res, 'PUT')) return;
  if (!checkOrigin(req)) return send(res, 403, { error: 'Invalid request origin.' });
  if (!hasSession(req)) return send(res, 401, { error: 'Authentication required.' });
  try {
    const body = await readJson(req, 750_000);
    let value;
    try { value = validatePortfolio(body); } catch(error) { return send(res, 400, { error: error.message }); }
    await db('portfolio_content?on_conflict=key', {
      method: 'POST', prefer: 'resolution=merge-duplicates,return=minimal', body: { key:'main', content:value, updated_at: new Date().toISOString() }
    });
    send(res, 200, { ok: true });
  } catch (error) { if (error.message?.includes('Request too large')) return send(res, 413, { error: 'Content too large.' }); internalError(res, error); }
}
