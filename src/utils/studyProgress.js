// Study scores sync only for the signed-in portfolio owner. Other visitors are not tracked.
export async function saveAttempt(type, topic, correct, total) {
  try {
    const session = await fetch('/api/auth/session').then(r=>r.json());
    if (!session.authenticated) return;
    await fetch('/api/study/attempt', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({type,topic,correct,total}) });
  } catch { /* The learner can still use the study tool while offline. */ }
}
