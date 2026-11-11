import { send, requireMethod, hasSession } from '../../lib/server.js';
export default function handler(req, res) {
  if (!requireMethod(req, res, 'GET')) return;
  send(res, 200, { authenticated: hasSession(req) });
}
