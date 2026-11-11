import { send, checkOrigin, hasSession, readJson, db, internalError } from '../../lib/server.js';
export default async function handler(req,res) {
 if(req.method!=='POST') return send(res,405,{error:'Method not allowed.'});
 if(!checkOrigin(req)) return send(res,403,{error:'Invalid origin.'});
 if(!hasSession(req)) return send(res,401,{error:'Owner access required.'});
 try {
  const {type,topic,correct,total}=await readJson(req,4000);
  if(!['quiz','mock-exam'].includes(type)||typeof topic!=='string'||topic.length>160||!Number.isInteger(total)||!Number.isInteger(correct)||total<1||total>100||correct<0||correct>total) return send(res,400,{error:'Invalid attempt.'});
  await db('study_attempts',{method:'POST',body:{owner:'owner',type,topic,correct,total}});
  send(res,200,{ok:true});
 }catch(err){internalError(res,err)}
}
