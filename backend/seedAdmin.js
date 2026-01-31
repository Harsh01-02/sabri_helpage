import 'dotenv/config'; 
import mongoose from 'mongoose';
import User from './models/User.js'; // adjust path if needed

const MONGO_URI = process.env.MONGODB_URI;

async function seedAdmin() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');

    const existing = await User.findOne({ email: 'admin' }).select('+password');

    if (existing) {
      console.log('⚠️ Admin user already exists, deleting and recreating...');
      await User.deleteOne({ email: 'admin' });
    }

    const admin = await User.create({
      name: 'Admin',
      email: 'admin',
      password: 'admin123', // will be hashed automatically
      role: 'super-admin'
    });

    console.log('✅ Admin user seeded:', admin.email);
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

seedAdmin();
