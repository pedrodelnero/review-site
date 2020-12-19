import express from 'express';

import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from '../controllers/products.js';
import { createReview, getReviews, getReviewById, updateReviewById, deleteReviewById } from '../controllers/reviews.js';
import { createUser, loginUser, logoutUser, updateUser, deleteUser, getUser } from '../controllers/users.js';
import getProd from '../middleware/getProd.js';
import auth from '../middleware/auth.js';

const router = new express.Router();

// Product
router.get('/products', getProducts);
router.post('/products', auth, createProduct);
router.get('/products/:id', getProductById);
router.patch('/products/:id', auth, updateProductById);
router.delete('/products/:id', auth, deleteProductById);

// Reviews
router.get('/products/:pID/reviews', getProd, getReviews);
router.post('/products/:id/reviews', auth, createReview);
router.get('/products/reviews/:rID', getReviewById);
router.patch('/products/reviews/:rID', auth, updateReviewById);
router.delete('/products/:pID/reviews/:rID', auth, getProd, deleteReviewById);

// Users
router.post('/user', createUser);
router.post('/user/login', loginUser);
router.post('/user/logout', auth, logoutUser);
router.patch('/user/me', auth, updateUser);
router.delete('/user/me', auth, deleteUser);
router.get('/user', auth, getUser)

export default router;