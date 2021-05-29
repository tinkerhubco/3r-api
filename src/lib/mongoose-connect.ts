import mongoose from 'mongoose';

import { ENV_MONGODB_URI } from '../constants/envs';

type Global = typeof global & {
  mongoose?: {
    conn: unknown;
    promise: unknown;
  }
};

const getCacheInitialValue = () => {
  return (global as Global).mongoose = { conn: null, promise: null };
};

const MONGODB_URI = ENV_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as Global).mongoose;

if (!cached) {
  cached = getCacheInitialValue();
}

export const mongooseConnect = async () => {
  // Satisfy linting
  if (!cached) {
    cached = getCacheInitialValue();
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};
