import http from 'node:http';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
if (existsSync('.env.local')) process.loadEnvFile('.env.local');
if (!process.env.SITE_URL) process.env.SITE_URL = 'http://localhost:5173';
const root = resolve('api');
const routes = {
 '/api/content':'content.js',
 '/api/cv':'cv.js',
 '/api/ai':'ai.js',
 '/api/auth/login':'auth/login.js',
 '/api/auth/session':'auth/session.js',
 '/api/auth/logout':'auth/logout.js',
 '/api/admin/content':'admin/content.js',
 '/api/admin/media':'admin/media.js',
 '/api/study/progress':'study/progress.js',
 '/api/study/attempt':'study/attempt.js'
};
http.createServer(async (req,res)=>{
  const path = req.url?.split('?')[0];
  const file = routes[path];
  if(!file){res.writeHead(404,{'Content-Type':'application/json'});return res.end(JSON.stringify({error:'Not found.'}));}
  try {const {default:handler}=await import(pathToFileURL(resolve(root,file)).href);await handler(req,res);}
  catch(e){console.error('Local API error:', e);if(!res.writableEnded){res.writeHead(500,{'Content-Type':'application/json'});res.end(JSON.stringify({error:'Service unavailable.'}));}}
}).listen(8787,'127.0.0.1',()=>console.log('Local API: http://127.0.0.1:8787'));
