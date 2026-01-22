import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Use environment variable MONGODB_URI for Atlas, fallback to local
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sabri_helpage';

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected successfully');
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    // Optional: log full error stack for debugging
    // console.error(error);

    // Return false so server can still run even if DB connection fails
    return false;
  }
};

export default connectDB;
