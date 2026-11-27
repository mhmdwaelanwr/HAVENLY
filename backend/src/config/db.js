import mongoose from 'mongoose';

export async function connectDB() {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is required');
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || 'havenly_dev',
    serverSelectionTimeoutMS: 10000,
  });
}
