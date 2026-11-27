import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export const createApp = () => {
  const app = express();
  app.disable('x-powered-by');
  app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
  app.use(express.json({ limit: '1mb' }));
  app.get('/api/health', (_req, res) => {
    const connected = mongoose.connection.readyState === 1;
    res.status(connected ? 200 : 503).json({ status: connected ? 'ok' : 'not_ready', database: connected ? 'connected' : 'disconnected' });
  });
  // Register feature routers here as team members complete them.
  app.use((_req, res) => res.status(404).json({ message: 'Route not found' }));
  app.use((err, _req, res, _next) => {
    const status = Number.isInteger(err.status) && err.status >= 400 && err.status < 500 ? err.status : 500;
    res.status(status).json({ message: status === 500 ? 'Internal server error' : 'Invalid request' });
  });
  return app;
};
