import mongoose from 'mongoose';


const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  authorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  rating: {
    type: Number,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }]
});

const Product = mongoose.model('Product', productSchema);

export default Product;