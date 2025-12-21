import 'dotenv/config';
import mongoose from 'mongoose';
import Page from './models/Page.js';
import pages from './pages.js';

/**
 * ---------------------------
 * MongoDB Connection
 * ---------------------------
 */
const connectDB = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || 'mongodb://localhost:27017/sabri-helpage';

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB connected for page seeding');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};


/**
 * ---------------------------
 * Seeder
 * ---------------------------
 */
const seedPages = async () => {
  try {
    const count = await Page.countDocuments();

    if (count > 0) {
      console.log('Pages collection already has data. Skipping seed.');
      return;
    }

    await Page.insertMany(pages);
    console.log(`Successfully seeded ${pages.length} pages`);
  } catch (error) {
    console.error('Error seeding pages:', error.message);
  }
};

/**
 * ---------------------------
 * Runner
 * ---------------------------
 */
const runSeed = async () => {
  await connectDB();
  await seedPages();
  await mongoose.disconnect();
  console.log('Page seeding complete');
  process.exit(0);
};

runSeed();