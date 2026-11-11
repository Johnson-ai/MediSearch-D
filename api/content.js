import { content, send, requireMethod, internalError } from '../lib/server.js';
export default async function handler(req, res) {
  if (!requireMethod(req, res, 'GET')) return;
  try { send(res, 200, { content: await content() }); }
  catch (error) { internalError(res, error); }
}
