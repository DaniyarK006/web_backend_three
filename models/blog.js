const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters'],
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  body: {
    type: String,
    required: [true, 'Body content is required'],
    minlength: [10, 'Body must be at least 10 characters']
  },
  author: {
    type: String,
    default: 'Anonymous',
    trim: true
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for search optimization
blogSchema.index({ title: 'text', body: 'text' });

module.exports = mongoose.model('Blog', blogSchema);