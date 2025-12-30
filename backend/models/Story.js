
import mongoose from 'mongoose';

const StorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String },
  content: { type: String },
  image: { type: String },
  author: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Story', StorySchema, 'stories');
