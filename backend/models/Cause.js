import mongoose from 'mongoose';

const CauseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String },
  content: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Cause', CauseSchema, 'causes');