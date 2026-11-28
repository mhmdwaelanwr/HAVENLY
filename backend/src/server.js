import 'dotenv/config';
import { once } from 'node:events';
import mongoose from 'mongoose';
import { createApp } from './app.js';
import { connectDB } from './config/db.js';

async function start() {
  const port = Number(process.env.PORT || 5000);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('Invalid PORT');
  }
  await connectDB();
  const server = createApp().listen(port);
  await once(server, 'listening');
  console.log('HAVENLY API listening on port ' + port);
}
start().catch(async () => {
  console.error('Backend startup failed. Check PORT, environment and MongoDB access.');
  try {
    await mongoose.disconnect();
  } finally {
    process.exitCode = 1;
  }
});
