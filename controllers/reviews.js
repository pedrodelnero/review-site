import Review from '../models/review.model.js';
import Product from '../models/product.model.js';
import User from '../models/user.model.js';

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    for (let review of reviews) {
      await review.populate('author').execPopulate();
      await review.populate('product').execPopulate();
    }

    res.status(201).send(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createReview = async (req, res) => {
  const { textReview: content, starRating: rating } = req.body;
  const { pID } = req.params;
  const { _id } = req.user;

  const review = await new Review({
    content,
    rating,
    author: _id,
    product: pID,
  }).save();

  await User.findByIdAndUpdate(
    _id,
    { $push: { reviews: review._id } },
    { new: true }
  );

  await Product.findByIdAndUpdate(
    pID,
    { $push: { reviews: review._id } },
    { new: true }
  );
  await updateAvgStarReview(pID);

  res.status(201).json(review);
};

// export const getReviewById = async (req, res) => {
//   const { rID } = req.params;
//   console.log('get rev by id start');

//   try {
//     const review = await Review.findById(rID);

//     !review
//       ? res.status(404).json({ error: 'No review with ID provided' })
//       : res.status(200).json(review);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const updateReviewById = async (req, res) => {
  const { rID } = req.params;
  const { content } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      rID,
      { content },
      { new: true }
    );

    !updatedReview
      ? res.status(404).json({ error: 'No review with ID provided' })
      : res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReviewById = async (req, res) => {
  const { pID, rID } = req.params;
  const { _id } = req.user;

  console.log('del rev', pID, rID, _id);

  try {
    const reviewToDelete = await Review.findById(rID);
    const product = await Product.findById(pID);
    const user = await User.findById(_id);

    if (!reviewToDelete) {
      res.status(404).json({ error: 'No review with ID provided' });
    } else {
      product.reviews.splice(reviewToDelete, 1);
      user.reviews.splice(reviewToDelete, 1);

      await product.save();
      await user.save();
      await updateAvgStarReview(product._id);

      await Review.findByIdAndRemove(rID);

      res.status(200).json({ message: 'Review successfully deleted.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAvgStarReview = async (id) => {
  try {
    const product = await Product.findById(id);

    if (product.reviews.length > 0) {
      console.log('yes', product);
      let avgRating = 0;
      for (let review of product.reviews) {
        const { rating } = await Review.findById(review);
        avgRating += rating;
      }
      avgRating /= product.reviews.length;

      product.averageRating = avgRating;
      product.save();
    } else {
      console.log('no');
      product.averageRating = 0;
      product.save();
    }
    return;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};
