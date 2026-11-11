import { send, requireMethod, checkOrigin, clearSession } from '../../lib/server.js';
export default function handler(req, res) {
  if (!requireMethod(req, res, 'POST')) return;
  if (!checkOrigin(req)) return send(res, 403, { error: 'Invalid request origin.' });
  clearSession(res, req); send(res, 200, { ok: true });
}
