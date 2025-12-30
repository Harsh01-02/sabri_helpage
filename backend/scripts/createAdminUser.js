// Script to create a default admin user in MongoDB

import mongoose from 'mongoose';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

async function createAdmin() {
  await mongoose.connect(MONGODB_URI);
  const existing = await User.findOne({ email: 'admin' });
  if (existing) {
    console.log('Admin user already exists.');
    process.exit(0);
  }
  const user = new User({
    name: 'Admin',
    email: 'admin',
    password: 'admin123',
    role: 'admin'
  });
  await user.save();
  console.log('Default admin user created: admin / admin123');
  process.exit(0);
}

createAdmin().catch(e => { console.error(e); process.exit(1); });
