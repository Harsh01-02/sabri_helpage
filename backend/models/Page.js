const mongoose = require('mongoose');

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

module.exports = mongoose.model('Page', PageSchema);
