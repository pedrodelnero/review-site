import Review from '../models/review.model.js';
import Product from '../models/product.model.js';
import User from '../models/user.model.js';

export const getReviews = async (req, res) => {
  console.log('rev start');
  try {
    const reviews = await Review.find();

    for (let review of reviews) {
      await review.populate('author').execPopulate();
      await review.populate('product').execPopulate();
    }
    // console.log(reviews);

    res.status(201).send(reviews);
  } catch (error) {
    console.log('reviews err', error);
    res.status(500).json({ error: error.message });
  }
};

export const createReview = async (req, res) => {
  const { textReview: content, starRating: rating } = req.body;
  const { id } = req.params;
  const { name: author, _id } = req.user;

  const review = await new Review({
    content,
    rating,
    author,
    authorID: _id,
  }).save();

  await User.findByIdAndUpdate(
    _id,
    { $push: { reviews: review._id } },
    { new: true }
  );

  await Product.findByIdAndUpdate(
    id,
    { $push: { reviews: review._id } },
    { new: true }
  );
  await updateAvgStarReview(id);

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
  const { rID } = req.params;

  try {
    const deletedReview = await Review.findById(rID);

    if (!deletedReview) {
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
};

const updateAvgStarReview = async (id) => {
  try {
    const product = await Product.findById(id);

    if (product.reviews.length > 0) {
      let avgRating = 0;
      for (let review of product.reviews) {
        const { rating } = await Review.findById(review);
        avgRating += rating;
      }
      avgRating /= product.reviews.length;

      product.averageRating = avgRating;
      product.save();
    } else {
      product.averageRating = 0;
    }
    return;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};
