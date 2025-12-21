import 'dotenv/config';
import mongoose from 'mongoose';
import Page from './models/Page.js';
import pages from './pages.js';

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/sabri-helpage'
  );
  console.log('MongoDB connected');
};

const seedPages = async () => {
  const count = await Page.countDocuments();

  if (count > 0) {
    console.log('Pages already exist. Skipping seed.');
    return;
  }

  await Page.insertMany(pages);
  console.log(`Seeded ${pages.length} pages`);
};

const runSeed = async () => {
  await connectDB();
  await seedPages();
  await mongoose.disconnect();
  process.exit(0);
};

runSeed();

