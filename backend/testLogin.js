import mongoose from 'mongoose';
import User from './models/User.js';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

async function test() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    const user = await User.findOne({ username: 'admin' }).select('+password');
    if (!user) {
      console.log('User not found');
      return;
    }

    console.log('User found:', { username: user.username, email: user.email, role: user.role });
    console.log('Password hash exists:', !!user.password);

    const isMatch = await bcrypt.compare('admin123', user.password);
    console.log('Password matches:', isMatch);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    process.exit(0);
  }
}

test();
