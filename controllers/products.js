import Product from '../models/product.model.js';
import Review from '../models/review.model.js';
import User from '../models/user.model.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: 'desc' });

    for (let product of products) {
      await product.populate('author').execPopulate();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, brand, model, description, result: image } = req.body;
  const { _id: authorId } = req.user;

  try {
    const product = await new Product({
      name,
      brand,
      model,
      description,
      image,
      author: authorId,
      createdAt: new Date(),
    }).save();
    await User.findByIdAndUpdate(
      authorId,
      { $push: { products: product._id } },
      { new: true }
    );
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).sort();
    await product.populate('reviews').execPopulate();
    await product.populate('author').execPopulate();

    for (let review of product.reviews) {
      await review.populate('author').execPopulate();
    }

    let avgRating = 0;
    product.reviews.forEach((review) => {
      avgRating += review.rating;
    });

    avgRating /= product.reviews.length;

    product.averageRating = Math.round(avgRating * 10) / 10;

    !product
      ? res.status(404).json({ error: 'No product with ID provided' })
      : res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProductById = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    !updatedProduct
      ? res.status(404).json({ error: 'No product with ID provided' })
      : res.status(200).json({
          product: updatedProduct,
          message: 'Product successfully updated.',
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const { products } = req.user;

  try {
    const product = await Product.findById(id);

    if (!product) {
      throw new Error('No product with ID provided');
    } else if (req.user.products.indexOf(id) === -1) {
      throw new Error('Not authorized for this action');
    } else if (product.reviews.length > 0) {
      for (let i = 0; i < product.reviews.length; i++) {
        const review = await Review.findById(product.reviews[i]);
        await review.populate('author').execPopulate();
        const user = await User.findOne({ _id: review.author._id });
        user.reviews.splice(user.reviews.indexOf(product.reviews[i]), 1);
        await user.save();
        await Review.findByIdAndRemove(product.reviews[i]);
      }
    }
    req.user.products.splice(products.indexOf(id), 1);

    await req.user.save();

    await Product.findByIdAndRemove(id);

    res.status(201).json({ message: 'Product successfully deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
