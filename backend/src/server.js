import { createApp } from './app.js';
import { connectDB } from './config/db.js';

async function start() {
  const port = Number(process.env.PORT || 5000);
  await connectDB();
  createApp().listen(port, () => console.log('HAVENLY API listening on port ' + port));
}
start().catch(() => {
  console.error('Backend startup failed. Check environment and MongoDB access.');
  process.exitCode = 1;
});
