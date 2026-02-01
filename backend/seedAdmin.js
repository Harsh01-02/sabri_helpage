import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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

    // Hash password manually
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    const admin = await User.create({
      name: 'Admin',
      username: 'admin',
      email: 'admin',
      password: hashedPassword,
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
