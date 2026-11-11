import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateDiaryEntry, detectDiaryImage, validDiaryId, validDiaryImagePath } from '../lib/diary.js';
import { setSession } from '../lib/server.js';
import diaryHandler from '../api/admin/diary.js';
import mediaHandler from '../api/admin/diary/media.js';

const row={title:'Quiet afternoon',body:'A private reflection',entry_date:'2026-11-11',mood:'Grateful',image_paths:[]};
function fakeResponse(){
 return {statusCode:200,headers:{},data:'',setHeader(k,v){this.headers[k.toLowerCase()]=v;},end(data){this.data=data;this.writableEnded=true;},get json(){return JSON.parse(String(this.data))}};
}
function fakeRequest(method,url='/api/admin/diary',auth=false){
 const headers={origin:'http://localhost:5173',host:'localhost:5173'};
 if(auth){const cookie=fakeResponse();setSession(cookie,{headers:{}});headers.cookie=cookie.headers['set-cookie'].split(';')[0];}
 return {method,url,headers};
}
function loginEnv(){process.env.SUPABASE_URL='https://example.supabase.co';process.env.SUPABASE_SERVICE_ROLE_KEY='test-secret-value';process.env.ADMIN_EMAIL='admin@example.invalid';process.env.ADMIN_PASSWORD_SCRYPT='test-hash';process.env.SESSION_SECRET='long-test-only-session-secret-with-at-least-32-chars';process.env.SITE_URL='http://localhost:5173';}

test('Diary entry validation checks date, text, and attachment paths',()=>{
 assert.deepEqual(validateDiaryEntry(row),row);
 assert.throws(()=>validateDiaryEntry({...row,entry_date:'2026-02-30'}),/date/);
 assert.throws(()=>validateDiaryEntry({...row,title:''}),/title/);
 assert.throws(()=>validateDiaryEntry({...row,body:'',image_paths:[]}),/Write something/);
 assert.throws(()=>validateDiaryEntry({...row,image_paths:['https://example.com/public.jpg']}),/images/);
 assert.throws(()=>validateDiaryEntry({...row,body:'x'.repeat(24001)}),/too long/);
 assert.throws(()=>validateDiaryEntry({...row,image_paths:Array(9).fill('bad')}),/images/);
});
test('Image path and UUID checks block traversal and unsafe attachment paths',()=>{
 const path='123e4567-e89b-42d3-a456-426614174000.jpg';
 assert.equal(validDiaryImagePath(path),true);
 assert.equal(validDiaryId(path.replace('.jpg','')),true);
 for(const bad of ['../../private-diary/key','/public/example.jpg','hello.svg','https://example.com/a.jpg','a%2Fb.jpg'])assert.equal(validDiaryImagePath(bad),false);
});
test('Private image upload validation checks signatures and sizes',()=>{
 const validPng=Buffer.from('89504e470d0a1a0a0000000d4948445200000001','hex');
 assert.equal(detectDiaryImage(validPng.toString('base64'),'image/png').extension,'png');
 assert.throws(()=>detectDiaryImage(Buffer.from('<svg><script>x</script></svg>').toString('base64'),'image/svg+xml'),/JPEG, PNG or WebP/);
 assert.throws(()=>detectDiaryImage('aGVsbG8=','image/png'),/match/);
 assert.throws(()=>detectDiaryImage(Buffer.alloc(2_500_001,1).toString('base64'),'image/jpeg'),/under 2.5 MB|too large/);
});
test('Diary API and photos reject anonymous requests before querying storage', async()=>{
 for(const handler of [diaryHandler,mediaHandler])for(const method of ['GET','POST','DELETE']){
  const res=fakeResponse(); await handler(fakeRequest(method,'/api/admin/diary',false),res);
  assert.equal(res.statusCode,401);assert.match(res.headers['cache-control'],/no-store/);
 }
});
test('Diary edits require same-origin even when signed in',async()=>{
 loginEnv();
 const req=fakeRequest('DELETE','/api/admin/diary?id=123e4567-e89b-42d3-a456-426614174000',true);
 req.headers.origin='https://attacker.example'; const res=fakeResponse();await diaryHandler(req,res);
 assert.equal(res.statusCode,403);
 const media=fakeRequest('POST','/api/admin/diary/media',true);delete media.headers.origin;
 const res2=fakeResponse();await mediaHandler(media,res2);assert.equal(res2.statusCode,403);
});
test('Private diary invalid IDs and image paths are rejected without database calls',async()=>{
 loginEnv();
 const res=fakeResponse();await diaryHandler(fakeRequest('DELETE','/api/admin/diary?id=../../bad',true),res);assert.equal(res.statusCode,400);
 const image=fakeResponse();await mediaHandler(fakeRequest('GET','/api/admin/diary/media?path=../bad',true),image);assert.equal(image.statusCode,400);
});
test('Private SQL migration creates non-public bucket and owner-only table',()=>{
 const sql=readFileSync(new URL('../scripts/diary-migration.sql',import.meta.url),'utf8');
 assert.match(sql,/private_diary_entries/);assert.match(sql,/enable row level security/);assert.match(sql,/revoke all on public\.private_diary_entries from public, anon, authenticated/);
 assert.match(sql,/values \('private-diary','private-diary',false/);assert.match(sql,/update set public=false/);
});
test('Private diary is only in admin UI, never public pages or portfolio JSON',()=>{
 const admin=readFileSync(new URL('../src/portfolio/AdminDashboard.jsx',import.meta.url),'utf8');
 const app=readFileSync(new URL('../src/App.jsx',import.meta.url),'utf8');
 const server=readFileSync(new URL('../lib/server.js',import.meta.url),'utf8');
 const devRoutes=readFileSync(new URL('../scripts/dev-api.mjs',import.meta.url),'utf8');
 assert.match(admin,/Private diary/);assert.match(admin,/DiaryEditor/);assert.doesNotMatch(app,/DiaryEditor|private.diary/);
 assert.doesNotMatch(server,/private_diary_entries/);assert.match(devRoutes,/admin\/diary/);
});
test('Mobile CMS uses natural document scroll and not the old nested 100dvh scroll trap',()=>{
 const css=readFileSync(new URL('../src/portfolio/admin-mobile.css',import.meta.url),'utf8');
 assert.match(css,/height:auto!important/);assert.match(css,/overflow:visible!important/);assert.match(css,/position:fixed!important/);
 assert.match(css,/safe-area-inset-bottom/);
});

test('Authenticated diary GET only reads the private table with pagination',async()=>{
 loginEnv();
 const requests=[]; const originalFetch=globalThis.fetch;
 globalThis.fetch=async (url,options)=>{requests.push({url,options});return new Response(JSON.stringify([{id:'123e4567-e89b-42d3-a456-426614174000',...row}]),{status:200,headers:{'content-type':'application/json'}});};
 try{
  const res=fakeResponse();await diaryHandler(fakeRequest('GET','/api/admin/diary?offset=0',true),res);
  assert.equal(res.statusCode,200);assert.equal(res.json.entries.length,1);assert.equal(res.json.nextOffset,null);
  assert.equal(requests.length,1);assert.match(requests[0].url,/\/rest\/v1\/private_diary_entries\?/);assert.match(requests[0].url,/owner=eq\.owner/);
  assert.doesNotMatch(requests[0].url,/portfolio_content/);
 }finally{globalThis.fetch=originalFetch;}
});
test('Private photo responses require a session and include no-store headers',async()=>{
 loginEnv();const originalFetch=globalThis.fetch;const calls=[];
 globalThis.fetch=async(url,options)=>{calls.push({url,options});return new Response(Buffer.from('89504e470d0a1a0a','hex'),{status:200,headers:{'content-type':'image/png'}})};
 try{
  const path='123e4567-e89b-42d3-a456-426614174000.png';
  const response=fakeResponse();await mediaHandler(fakeRequest('GET',`/api/admin/diary/media?path=${path}`,true),response);
  assert.equal(response.statusCode,200);assert.equal(response.headers['cache-control'],'private, no-store, max-age=0');assert.equal(response.headers.vary,'Cookie');
  assert.match(calls[0].url,/storage\/v1\/object\/private-diary/);assert.doesNotMatch(calls[0].url,/object\/public/);
 }finally{globalThis.fetch=originalFetch;}
});
test('Private photo upload writes only to private bucket after rate-limit check',async()=>{
 loginEnv();const originalFetch=globalThis.fetch;const calls=[];
 globalThis.fetch=async(url,options)=>{calls.push({url,options});if(url.includes('/rest/v1/rpc/'))return new Response('true',{status:200});return new Response(JSON.stringify({Key:'private-diary/image.png'}),{status:200,headers:{'content-type':'application/json'}});};
 try{
  const req=fakeRequest('POST','/api/admin/diary/media',true);
  req.body={data:Buffer.from('89504e470d0a1a0a','hex').toString('base64'),mimeType:'image/png'};
  const res=fakeResponse();await mediaHandler(req,res);
  assert.equal(res.statusCode,201);assert.match(res.json.path,/\.png$/);assert.equal(calls.length,2);
  assert.match(calls[1].url,/storage\/v1\/object\/private-diary/);assert.equal(calls[1].options.headers['Cache-Control'],'private, no-store');
 }finally{globalThis.fetch=originalFetch;}
});
