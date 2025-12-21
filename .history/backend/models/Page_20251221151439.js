
import mongoose from 'mongoose';

const PageSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    header: String,
    sections: [mongoose.Schema.Types.Mixed],
    meta: {
      description: String,
      keywords: [String]
    }
  },
  { timestamps: true }
);

export default mongoose.model('Page', PageSchema);
