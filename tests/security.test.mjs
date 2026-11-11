import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { hashPassword, comparePassword, validatePortfolio, hasSession, setSession, checkOrigin, content } from '../lib/server.js';
import { defaultPortfolio } from '../src/data/portfolioDefault.js';

test('passwords use salted scrypt, not plaintext comparisons', () => {
  const h1 = hashPassword('Correct Horse Battery Staple #123');
  const h2 = hashPassword('Correct Horse Battery Staple #123');
  assert.match(h1, /^scrypt\$/); assert.notEqual(h1,h2);
  assert.equal(comparePassword('Correct Horse Battery Staple #123',h1),true);
  assert.equal(comparePassword('wrong password',h1),false);
  assert.equal(comparePassword('wrong password','invalid'),false);
});
test('owner sessions are signed, tampering invalidates them', () => {
  const original = { ADMIN_EMAIL:process.env.ADMIN_EMAIL, ADMIN_PASSWORD_SCRYPT:process.env.ADMIN_PASSWORD_SCRYPT, SESSION_SECRET:process.env.SESSION_SECRET, SUPABASE_URL:process.env.SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY:process.env.SUPABASE_SERVICE_ROLE_KEY };
  try {
    process.env.ADMIN_EMAIL='owner@example.org';process.env.ADMIN_PASSWORD_SCRYPT=hashPassword('A very long passphrase!');process.env.SESSION_SECRET='a'.repeat(40);
    process.env.SUPABASE_URL='https://example.supabase.co';process.env.SUPABASE_SERVICE_ROLE_KEY='test-secret';
    const req={headers:{host:'localhost:5173', 'x-forwarded-proto':'http'}};
    const out={headers:{},setHeader(k,v){this.headers[k]=v}};
    setSession(out,req);
    const cookie=out.headers['Set-Cookie'].split(';')[0];
    assert.equal(hasSession({headers:{cookie,'x-forwarded-proto':'http'}}),true);
    assert.equal(hasSession({headers:{cookie:cookie.replace(/.$/,'X'),'x-forwarded-proto':'http'}}),false);
  } finally {for(const [k,v] of Object.entries(original)) { if(v===undefined)delete process.env[k];else process.env[k]=v; }}
});
test('same-origin checks reject absent and cross-origin writers', () => {
  const prev=process.env.SITE_URL; process.env.SITE_URL='https://portfolio.example';
  try { assert.equal(checkOrigin({headers:{origin:'https://portfolio.example'}}),true); assert.equal(checkOrigin({headers:{origin:'https://evil.example'}}),false);assert.equal(checkOrigin({headers:{}}),false);}
  finally{if(prev===undefined)delete process.env.SITE_URL;else process.env.SITE_URL=prev;}
});
test('CMS payload permits published text but blocks unsafe URLs and wrong shapes', () => {
  assert.deepEqual(validatePortfolio(defaultPortfolio), defaultPortfolio);
  assert.throws(()=>validatePortfolio({...defaultPortfolio,site:{...defaultPortfolio.site,cvUrl:'javascript:alert(1)'}}),/https/);
  assert.throws(()=>validatePortfolio({...defaultPortfolio,skills:Array(125).fill({title:'T',description:''})}),/Invalid skills/);
  assert.throws(()=>validatePortfolio({...defaultPortfolio,site:{...defaultPortfolio.site,name:'x'.repeat(7000)}}),/Invalid name/);
});
test('public default content works without database configuration', async () => {
  const a=process.env.SUPABASE_URL,b=process.env.SUPABASE_SERVICE_ROLE_KEY;
  delete process.env.SUPABASE_URL;delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  try{assert.equal((await content()).site.name,'Abigael Akossou')}finally{if(a)process.env.SUPABASE_URL=a;if(b)process.env.SUPABASE_SERVICE_ROLE_KEY=b;}
});
test('frontend contains no Groq secret or raw HTML rendering', () => {
  const api=readFileSync('src/utils/api.js','utf8');
  const renderer=readFileSync('src/components/ResultRenderer.jsx','utf8');
  const study=readFileSync('src/pages/Flashcards.jsx','utf8');
  assert.ok(!api.includes('VITE_GROQ_API_KEY'));
  assert.ok(!api.includes('api.groq.com'));
  assert.ok(!study.includes('api.groq.com'));
  assert.ok(!renderer.includes('dangerouslySetInnerHTML'));
});

test('journal entries require a valid month and safe media URLs', () => {
  const good = { month:'2026-11', category:'Training', title:'Completed training session', organisation:'', description:'Reflected on new skills', url:'', imageUrl:'' };
  const updated = validatePortfolio({...defaultPortfolio, updates:[good]});
  assert.deepEqual(updated.updates,[good]);
  assert.throws(()=>validatePortfolio({...defaultPortfolio,updates:[{...good,month:'2026-13'}]}),/Month/);
  assert.throws(()=>validatePortfolio({...defaultPortfolio,updates:[{...good,month:''}]}),/month\/year/);
  assert.throws(()=>validatePortfolio({...defaultPortfolio,updates:[{...good,imageUrl:'javascript:alert(1)'}]}),/https/);
  assert.throws(()=>validatePortfolio({...defaultPortfolio,updates:[{...good,title:'  '}]}),/title/);
});
test('older CV records without a month are migrated through validation', () => {
  const value=validatePortfolio({...defaultPortfolio,experience:[{title:'Verified placement',organisation:'Organisation',period:'2025',description:''}]});
  assert.equal(value.experience[0].month,'');
});
test('new routes have corresponding deployment rewrites and downloadable CV endpoint', () => {
  const config=JSON.parse(readFileSync('vercel.json','utf8'));
  const paths=config.rewrites.map(r=>r.source);
  for(const route of ['/about','/cv','/progress','/experience','/education','/certifications','/skills','/projects','/achievements','/contact']) assert.ok(paths.includes(route),route);
  const api=readFileSync('api/cv.js','utf8');
  assert.match(api,/Content-Disposition/);
  assert.match(api,/attachment/);
});
