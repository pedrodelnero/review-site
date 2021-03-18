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
  getReviewById,
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
import getProd from '../middleware/getProd.js';
import { validateToken } from '../middleware/auth.js';

const router = new express.Router();

// Product
router.get('/products', getProducts);
router.post('/products', validateToken, createProduct);
router.get('/products/:id', getProductById);
router.patch('/products/:id', validateToken, updateProductById);
router.delete('/products/:id', validateToken, deleteProductById);

// Reviews
router.get('/products/:pID/reviews', getProd, getReviews);
router.post('/products/:id/reviews', validateToken, createReview);
router.get('/products/reviews/:rID', getReviewById);
router.patch('/products/reviews/:rID', validateToken, updateReviewById);
router.delete(
  '/products/:pID/reviews/:rID',
  validateToken,
  getProd,
  deleteReviewById
);

// Users
router.post('/user', createUser);
router.post('/user/login', loginUser);
router.post('/user/logout', validateToken, logoutUser);
router.patch('/user/me', validateToken, updateUser);
router.delete('/user/me', validateToken, deleteUser);
router.get('/user', validateToken, getUser);

export default router;
