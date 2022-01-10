import express from 'express';

import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from '../controllers/products.js';
import {
  createReview,
  getReviews,
  updateReviewById,
  deleteReviewById,
} from '../controllers/reviews.js';
import {
  createUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
  getUser,
} from '../controllers/users.js';
import { validateToken } from '../middleware/auth.js';

const router = new express.Router();

// Product
router.get('/products', getProducts);
router.post('/products', validateToken, createProduct);
router.get('/products/:id', getProductById);
router.patch('/products/:id', validateToken, updateProductById);
router.delete('/products/:id', validateToken, deleteProductById);

// Reviews
// router.get('/products/:pID/reviews', getProd, getReviews);
router.get('/reviews', getReviews);
router.post('/product/:pID/reviews', validateToken, createReview);
// router.get('/product/reviews/:rID', getReviewById);
router.patch('/product/reviews/:rID', validateToken, updateReviewById);
router.delete('/product/:pID/reviews/:rID', validateToken, deleteReviewById);

// Users
router.post('/user', createUser);
router.post('/user/login', loginUser);
router.post('/user/logout', validateToken, logoutUser);
router.patch('/user/me', validateToken, updateUser);
router.delete('/user/me', validateToken, deleteUser);
router.get('/user', validateToken, getUser);

export default router;
