import assert from 'node:assert/strict';
import { once } from 'node:events';
import mongoose from 'mongoose';
import { connectDB } from '../src/config/db.js';
import { createApp } from '../src/app.js';

let server;
try {
  if (process.env.MONGODB_DB !== 'havenly_ci') throw new Error('Integration check requires isolated havenly_ci database');
  await connectDB();
  await mongoose.connection.db.command({ ping: 1 });
  server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = 'http://127.0.0.1:' + server.address().port;
  const response = await fetch(base + '/api/health');
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok', database: 'connected' });
  const missing = await fetch(base + '/api/nonexistent');
  assert.equal(missing.status, 404);
  console.log('Connected health and 404 checks passed.');
} finally {
  if (server) {
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
  }
  await mongoose.disconnect();
}
