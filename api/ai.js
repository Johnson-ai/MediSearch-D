import { send, requireMethod, checkOrigin, configured, readJson, rateLimit, internalError } from '../lib/server.js';

const CLINICAL_RULES = `You are an educational assistant for nursing students, not a clinician. Never imply that a dose, diagnosis, interaction or clinical plan is verified. State uncertainties, relevant contraindications, and when in-person professional review is essential. Avoid invented references, URLs, source dates, and study results. If asked for references, give established guideline publishers and explicitly say sources have not been checked in real time. Do not invent patient details. Protect private patient information: advise users not to submit identifying information. For emergencies advise immediate professional medical care. Use SI units with context. Keep information educational; any drug dosing must be checked against an authoritative current local formulary, patient details and licensed prescriber.`;

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Retry only when another model could plausibly complete the same request.
// Do not retry invalid prompts, unauthorized keys, or permission errors.
export function shouldTryFallback(status) {
  return status === 404 || status === 429 || (status >= 500 && status <= 599);
}

// Exported so the primary/fallback behavior can be tested without Groq credits.
export async function requestWithFallback({
  prompt,
  maxTokens,
  apiKey,
  primaryModel = 'openai/gpt-oss-120b',
  fallbackModel = 'openai/gpt-oss-20b',
  fetcher = fetch
}) {
  const models = [primaryModel];
  if (fallbackModel && fallbackModel !== primaryModel) models.push(fallbackModel);

  for (let index = 0; index < models.length; index++) {
    try {
      const response = await fetcher(GROQ_URL, {
        method: 'POST',
        signal: AbortSignal.timeout(25_000),
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: models[index],
          messages: [
            { role: 'system', content: CLINICAL_RULES },
            { role: 'user', content: prompt }
          ],
          max_tokens: Math.max(300, Math.min(Number(maxTokens) || 1700, 2500)),
          temperature: 0.25
        })
      });

      if (response.ok) {
        const result = await response.json();
        const answer = result?.choices?.[0]?.message?.content;
        if (typeof answer === 'string' && answer.trim()) {
          return { ok: true, text: answer, model: models[index] };
        }
        // An empty answer is not useful: allow one attempt with the backup.
        if (index < models.length - 1) continue;
        return { ok: false, status: 502 };
      }

      if (index < models.length - 1 && shouldTryFallback(response.status)) continue;
      return { ok: false, status: response.status };
    } catch {
      // Timeouts and transient connection failures may be model-specific.
      // Attempt the backup once, then report a generic upstream failure.
      if (index < models.length - 1) continue;
      return { ok: false, status: 502 };
    }
  }
  return { ok: false, status: 502 };
}

export default async function handler(req, res) {
  if (!requireMethod(req, res, 'POST')) return;
  if (!checkOrigin(req)) return send(res, 403, { error: 'Invalid request origin.' });
  if (!process.env.GROQ_API_KEY || !configured()) {
    return send(res, 503, { error: 'Study AI is not configured. The static resources remain available.' });
  }
  try {
    if (!(await rateLimit(req, 'study-ai', 18, 3600))) {
      return send(res, 429, { error: 'Hourly AI request limit reached. Try again later.' });
    }
    const { prompt, maxTokens } = await readJson(req, 25_000);
    if (typeof prompt !== 'string' || prompt.length < 3 || prompt.length > 12_000) {
      return send(res, 400, { error: 'Prompt must contain 3–12,000 characters.' });
    }

    const result = await requestWithFallback({
      prompt, maxTokens,
      apiKey: process.env.GROQ_API_KEY,
      primaryModel: process.env.GROQ_MODEL || 'openai/gpt-oss-120b',
      fallbackModel: process.env.GROQ_FALLBACK_MODEL || 'openai/gpt-oss-20b'
    });
    if (!result.ok) {
      return send(res, result.status === 429 ? 429 : 502, {
        error: result.status === 429 ? 'AI service is busy. Please retry.' : 'AI provider unavailable.'
      });
    }
    return send(res, 200, { text: result.text, model: result.model });
  } catch (error) {
    if (error.message?.includes('Request too large')) return send(res, 413, { error: 'Prompt too large.' });
    internalError(res, error);
  }
}
