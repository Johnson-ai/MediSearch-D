import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual, randomUUID } from 'node:crypto';
import { defaultPortfolio } from '../src/data/portfolioDefault.js';
import { anatomyParts } from '../src/data/anatomy.js';

export function send(res, status, data, extra = {}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  for (const [k, v] of Object.entries(extra)) res.setHeader(k, v);
  res.end(JSON.stringify(data));
}
export function requireMethod(req, res, method) { if (req.method !== method) { send(res, 405, { error: 'Method not allowed.' }, { Allow: method }); return false; } return true; }
export async function readJson(req, maxBytes = 750_000) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    const stringified = JSON.stringify(req.body);
    if (Buffer.byteLength(stringified) > maxBytes) throw new Error('Request too large.');
    return req.body;
  }
  let text = '';
  for await (const chunk of req) {
    text += chunk.toString('utf8');
    if (Buffer.byteLength(text) > maxBytes) throw new Error('Request too large.');
  }
  try { return JSON.parse(text); } catch { throw new Error('Invalid JSON.'); }
}
export function checkOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return false;
  try {
    const allowed = process.env.SITE_URL ? new URL(process.env.SITE_URL).origin :
      `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers['x-forwarded-host'] || req.headers.host}`;
    return new URL(origin).origin === allowed;
  } catch { return false; }
}
export function configured() { return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY); }
export function isAdminConfigured() { return configured() && Boolean(process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD_SCRYPT && process.env.SESSION_SECRET?.length >= 32); }
export async function db(path, { method = 'GET', body, headers = {}, prefer } = {}) {
  if (!configured()) throw new Error('Database not configured.');
  const base = process.env.SUPABASE_URL.replace(/\/$/, '');
  const response = await fetch(`${base}/rest/v1/${path}`, {
    method, headers: { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json', ...(prefer ? { Prefer: prefer } : {}), ...headers },
    ...(body === undefined ? {} : { body: JSON.stringify(body) })
  });
  if (!response.ok) { const error = await response.text(); console.error('Database operation failed', response.status, error.slice(0, 300)); throw new Error('Database unavailable.'); }
  const output = await response.text();
  return output ? JSON.parse(output) : null;
}
export async function content() {
  if (!configured()) return defaultPortfolio;
  const rows = await db('portfolio_content?key=eq.main&select=content&limit=1');
  return rows?.[0]?.content || defaultPortfolio;
}
export async function rateLimit(req, category, limit, seconds) {
  if (!configured()) return false;
  const ip = String(req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim().slice(0, 100);
  const key = createHmac('sha256', process.env.SESSION_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY).update(`${category}|${ip}`).digest('hex');
  const result = await db('rpc/consume_rate_limit', { method: 'POST', body: { p_key: key, p_limit: limit, p_window_seconds: seconds } });
  return result === true;
}
export function hashPassword(password, salt = randomBytes(24).toString('hex')) {
  return `scrypt$${salt}$${scryptSync(password, salt, 64).toString('hex')}`;
}
export function comparePassword(password, encoded = '') {
  try {
    const [prefix, salt, digest] = encoded.split('$');
    if (prefix !== 'scrypt' || !salt || !/^[a-f\d]{128}$/i.test(digest)) return false;
    return timingSafeEqual(scryptSync(password, salt, 64), Buffer.from(digest, 'hex'));
  } catch { return false; }
}
function sign(payload) { return createHmac('sha256', process.env.SESSION_SECRET).update(payload).digest('base64url'); }
const TTL = 8 * 3600 * 1000;
export function setSession(res, req) {
  const expiry = Date.now() + TTL;
  const token = Buffer.from(JSON.stringify({ email: process.env.ADMIN_EMAIL.toLowerCase(), expiry, nonce: randomUUID(), version: process.env.ADMIN_SESSION_VERSION || '1' })).toString('base64url');
  res.setHeader('Set-Cookie', `${cookieName(req)}=${token}.${sign(token)}; HttpOnly; Path=/; SameSite=Strict; Max-Age=28800${isSecure(req) ? '; Secure' : ''}`);
}
function isSecure(req) { return process.env.NODE_ENV === 'production' || req.headers['x-forwarded-proto'] === 'https'; }
function cookieName(req) { return isSecure(req) ? '__Host-abigael_admin' : 'abigael_admin_dev'; }
export function clearSession(res, req) { res.setHeader('Set-Cookie', `${cookieName(req)}=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0${isSecure(req) ? '; Secure' : ''}`); }
export function hasSession(req) {
  if (!isAdminConfigured()) return false;
  try {
    const cookies = Object.fromEntries((req.headers.cookie || '').split(';').map(s => s.trim().split(/=(.*)/s).slice(0,2)));
    const value = cookies[cookieName(req)]; if (!value) return false;
    const [token, signature] = value.split('.'); if (!signature || !token) return false;
    const a = Buffer.from(sign(token)); const b = Buffer.from(signature);
    if (a.length !== b.length || !timingSafeEqual(a,b)) return false;
    const payload = JSON.parse(Buffer.from(token, 'base64url').toString());
    return payload.expiry > Date.now() && payload.email === process.env.ADMIN_EMAIL.toLowerCase() && payload.version === (process.env.ADMIN_SESSION_VERSION || '1');
  } catch { return false; }
}
export function validatePortfolio(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Invalid portfolio data.');
  const shapes = {
    site: ['name', 'shortName', 'eyebrow', 'role', 'headline', 'intro', 'aboutHeading', 'about', 'location', 'email', 'telephone', 'linkedin', 'website', 'portraitUrl', 'cvUrl', 'heroNote', 'footerLine', 'studyFeatureTitle', 'studyFeatureDescription', 'contactHeading', 'contactIntro', 'contactMessage', 'valuesStrip', 'showContact', 'showStudy', 'seoTitle', 'seoDescription'],
    study: ['eyebrow','title','description']
  };
  const output = structuredClone(defaultPortfolio);
  for (const [section, keys] of Object.entries(shapes)) {
    if (!input[section] || typeof input[section] !== 'object') throw new Error(`Invalid ${section} section.`);
    for (const key of keys) {
      const value = input[section][key];
      if (typeof output[section][key] === 'boolean') { if (typeof value !== 'boolean') throw new Error(`Invalid ${key}.`); }
      else if (typeof value !== 'string' || value.length > 6000) throw new Error(`Invalid ${key}.`);
      if ((key.endsWith('Url') || ['linkedin','website'].includes(key)) && value && !/^https:\/\/[^\s]+$/i.test(value)) throw new Error(`${key} must use https://`);
      output[section][key] = value;
    }
  }
  const arrays = { strengths: ['title','description'], updates: ['month','category','title','organisation','description','url','imageUrl'], education: ['title','organisation','month','period','description'], experience: ['title','organisation','month','period','description'], certifications: ['title','organisation','month','period','description'], skills: ['title','description'], projects: ['title','organisation','month','period','description','url'], achievements: ['title','organisation','month','period','description'] };
  for (const [section, keys] of Object.entries(arrays)) {
    if (!Array.isArray(input[section]) || input[section].length > (section === 'updates' ? 300 : 120)) throw new Error(`Invalid ${section} entries.`);
    output[section] = input[section].map((row) => {
      if (!row || typeof row !== 'object') throw new Error(`Invalid ${section} entry.`);
      const result = {};
      for (const key of keys) {
        const value = row[key] ?? '';
        if (typeof value !== 'string' || value.length > 3000) throw new Error(`Invalid ${section}.${key}.`);
        if (['url','imageUrl'].includes(key) && value && !/^https:\/\/[^\s]+$/i.test(value)) throw new Error('Links and images must use https://');
        if (key === 'month' && value && !/^(19\d\d|20\d\d|21\d\d)-(0[1-9]|1[0-2])$/.test(value)) throw new Error('Month must use YYYY-MM.');
        result[key] = value;
      }
      if (section === 'updates' && (!result.title.trim() || !result.month)) throw new Error('Every journal update needs a title and a valid month/year.');
      return result;
    });
  }
  if (input.anatomy !== undefined) {
    if (!Array.isArray(input.anatomy) || input.anatomy.length !== anatomyParts.length) throw new Error('Invalid anatomy entries.');
    const entries = new Map();
    for (const item of input.anatomy) {
      if (!item || typeof item !== 'object' || typeof item.id !== 'string' || entries.has(item.id)) throw new Error('Invalid anatomy entry.');
      const copy = { id: item.id };
      for (const key of ['name','description','functions','conditions']) {
        if (typeof item[key] !== 'string' || item[key].length > 4000) throw new Error(`Invalid anatomy.${key}.`);
        copy[key] = item[key];
      }
      entries.set(item.id, copy);
    }
    if (anatomyParts.some(part => !entries.has(part.id))) throw new Error('Anatomy IDs cannot be removed or altered.');
    output.anatomy = anatomyParts.map(part => entries.get(part.id));
  }
  return output;
}
export function internalError(res, error) { console.error(error); send(res, 500, { error: 'Service temporarily unavailable. Please check the server configuration.' }); }
