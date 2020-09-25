import Review from '../models/review.model.js';
import Product from '../models/product.model.js';
import User from '../models/user.model.js';

export const getReviews = async (req, res) => {
  try {
    await req.product.populate('reviews').execPopulate();

    res.status(201).send(req.product.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

export const createReview = async (req, res) =>{
  const { content, rating } = req.body;
  const { id } = req.params;
  const { name: author, _id, email } = req.user

  const review = await new Review({ content, rating, author, authorEmail: email }).save();

  await Product.findByIdAndUpdate(id, { $push: { reviews: review._id }}, { new: true });
  await User.findByIdAndUpdate(_id, { $push: { reviews: review._id }}, { new: true });

  res.status(201).json(review);
};

export const getReviewById = async (req, res) => {
  const { rID } = req.params;

  try {
    const review = await Review.findById(rID);

    !review ? res.status(404).json({ error: 'No review with ID provided' }) : res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateReviewById = async (req,res) => {
  const { rID } = req.params;
  const { content } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(rID, { content }, { new: true });

    !updatedReview ? res.status(404).json({ error: 'No review with ID provided' }) : res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

export const deleteReviewById = async (req, res) => {
  const { rID } = req.params;

  try {
    const deletedReview = await Review.findById(rID);

    if(!deletedReview) {
      res.status(404).json({ error: 'No review with ID provided' });
    } else {
      req.product.reviews.splice(req.product.reviews.indexOf(rID), 1);
      req.user.reviews.splice(req.user.reviews.indexOf(rID), 1);
  
      await req.product.save();
      await req.user.save();

      await Review.findByIdAndRemove(rID);
      
      res.status(200).json({ message: 'Review successfully deleted.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
