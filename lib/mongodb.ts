import mongoose from 'mongoose';
const MONGO_URL = process.env.MONGO_URL as string;
if (!MONGO_URL) throw new Error('MONGO_URL not set');

let cached: { conn: typeof mongoose | null } = (global as any)._mongo || { conn: null };
if (!cached.conn) (global as any)._mongo = cached;

export async function connectDb() {
  if (cached.conn) return cached.conn;
  const conn = await mongoose.connect(MONGO_URL);
  cached.conn = conn;
  return conn;
}
