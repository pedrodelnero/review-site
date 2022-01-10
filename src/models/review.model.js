import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
