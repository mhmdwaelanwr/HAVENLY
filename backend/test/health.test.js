import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createApp } from '../src/app.js';

test('health reports unavailable while database is disconnected', async () => {
  const server = createApp().listen(0, '127.0.0.1');
  try {
    await once(server, 'listening');
    const response = await fetch('http://127.0.0.1:' + server.address().port + '/api/health');
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { status: 'not_ready', database: 'disconnected' });
  } finally {
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
  }
});
