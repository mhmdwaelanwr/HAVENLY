import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createApp } from '../src/app.js';

test('API scaffold reports unavailable database and handles missing or malformed requests', async () => {
  const server = createApp().listen(0, '127.0.0.1');
  try {
    await once(server, 'listening');
    const base = 'http://127.0.0.1:' + server.address().port;
    const response = await fetch(base + '/api/health');
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { status: 'not_ready', database: 'disconnected' });

    const missing = await fetch(base + '/api/nonexistent');
    assert.equal(missing.status, 404);
    assert.deepEqual(await missing.json(), { message: 'Route not found' });

    const malformed = await fetch(base + '/api/nonexistent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{',
    });
    assert.equal(malformed.status, 400);
    assert.deepEqual(await malformed.json(), { message: 'Invalid request' });
  } finally {
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
  }
});
