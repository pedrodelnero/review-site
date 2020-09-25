import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  authorEmail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;