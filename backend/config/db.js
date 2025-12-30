import mongoose from 'mongoose';

const connectDB = async () => {
  try {

    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sabri_helpage';

    await mongoose.connect(mongoURI);

    console.log('MongoDB connected successfully');
    return true;
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    // Do not exit the process; return false so server can still run for non-DB routes
    return false;
  }
};

export default connectDB;
