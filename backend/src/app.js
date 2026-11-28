import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export const createApp = () => {
  const app = express();
  app.disable('x-powered-by');
  app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
  app.use(express.json({ limit: '1mb' }));
  app.get('/api/health', async (_req, res) => {
    let connected = false;
    if (mongoose.connection.readyState === 1 && mongoose.connection.db) {
      try {
        await mongoose.connection.db.command({ ping: 1 }, { timeoutMS: 3000 });
        connected = true;
      } catch {
        // Do not expose database connection details.
      }
    }
    res.status(connected ? 200 : 503).json({ status: connected ? 'ok' : 'not_ready', database: connected ? 'connected' : 'disconnected' });
  });
  // Register feature routers here as team members complete them.
  app.use((_req, res) => res.status(404).json({ message: 'Route not found' }));
  app.use((err, _req, res, next) => {
    if (res.headersSent) return next(err);
    const status = Number.isInteger(err.status) && err.status >= 400 && err.status < 500 ? err.status : 500;
    res.status(status).json({ message: status === 500 ? 'Internal server error' : 'Invalid request' });
  });
  return app;
};
