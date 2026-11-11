import { test } from 'node:test';
import assert from 'node:assert/strict';
import { requestWithFallback, shouldTryFallback } from '../api/ai.js';

const success = (text) => ({ ok: true, json: async () => ({ choices: [{ message: { content: text } }] }) });
const failure = (status) => ({ ok: false, status });
const input = { prompt: 'Explain hypertension for nursing revision', maxTokens: 500, apiKey: 'test-key', primaryModel: 'openai/gpt-oss-120b', fallbackModel: 'openai/gpt-oss-20b' };

test('model-specific temporary failures allow one fallback; bad auth does not', () => {
  assert.equal(shouldTryFallback(429), true);
  assert.equal(shouldTryFallback(503), true);
  assert.equal(shouldTryFallback(404), true);
  assert.equal(shouldTryFallback(401), false);
  assert.equal(shouldTryFallback(400), false);
});

test('uses GPT-OSS 120B when the primary succeeds', async () => {
  const called = [];
  const result = await requestWithFallback({ ...input, fetcher: async (_, options) => {
    called.push(JSON.parse(options.body).model);
    return success('A medical overview.');
  }});
  assert.equal(result.ok, true);
  assert.equal(result.model, 'openai/gpt-oss-120b');
  assert.deepEqual(called, ['openai/gpt-oss-120b']);
});

test('uses GPT-OSS 20B when 120B is rate-limited', async () => {
  const called = [];
  const result = await requestWithFallback({ ...input, fetcher: async (_, options) => {
    const model = JSON.parse(options.body).model;
    called.push(model);
    return model.endsWith('120b') ? failure(429) : success('Answer from backup.');
  }});
  assert.equal(result.ok, true);
  assert.equal(result.model, 'openai/gpt-oss-20b');
  assert.deepEqual(called, ['openai/gpt-oss-120b', 'openai/gpt-oss-20b']);
});

test('does not retry invalid credentials against the backup', async () => {
  let count = 0;
  const result = await requestWithFallback({ ...input, fetcher: async () => { count++; return failure(401); }});
  assert.equal(result.ok, false);
  assert.equal(count, 1);
});

test('returns rate limit error when both models are rate-limited', async () => {
  let count = 0;
  const result = await requestWithFallback({ ...input, fetcher: async () => { count++; return failure(429); }});
  assert.equal(result.ok, false);
  assert.equal(result.status, 429);
  assert.equal(count, 2);
});

test('falls back after primary model network failure', async () => {
  let count = 0;
  const result = await requestWithFallback({ ...input, fetcher: async () => {
    if (++count === 1) throw new Error('Network failure');
    return success('Backup answer.');
  }});
  assert.equal(result.ok, true);
  assert.equal(result.model, 'openai/gpt-oss-20b');
});
