import { send, checkOrigin, requireMethod, readJson, isAdminConfigured, rateLimit, comparePassword, setSession, internalError } from '../../lib/server.js';
export default async function handler(req, res) {
  if (!requireMethod(req, res, 'POST')) return;
  if (!checkOrigin(req)) return send(res, 403, { error: 'Invalid request origin.' });
  if (!isAdminConfigured()) return send(res, 503, { error: 'Admin setup is incomplete. Check the deployment configuration.' });
  try {
    if (!(await rateLimit(req, 'admin-login', 7, 900))) return send(res, 429, { error: 'Too many login attempts. Try again later.' });
    const { email, password } = await readJson(req, 4096);
    if (typeof email !== 'string' || typeof password !== 'string' || password.length > 512) return send(res, 400, { error: 'Invalid credentials.' });
    // Always verify the hash, even if email does not match, to reduce timing information.
    const correctPassword = comparePassword(password, process.env.ADMIN_PASSWORD_SCRYPT);
    if (email.trim().toLowerCase() !== process.env.ADMIN_EMAIL.trim().toLowerCase() || !correctPassword) return send(res, 401, { error: 'Invalid credentials.' });
    setSession(res, req);
    send(res, 200, { ok: true });
  } catch (error) { if (error.message?.includes('Request too large') || error.message?.includes('Invalid JSON')) return send(res, 400, { error: error.message }); internalError(res, error); }
}
