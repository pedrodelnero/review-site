import express from 'express';

import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from '../controllers/products.js';
import { createReview, getReviews, getReviewById, updateReviewById, deleteReviewById } from '../controllers/reviews.js';
import { createUser, loginUser, logoutUser, logoutAll, updateUser, deleteUser } from '../controllers/users.js';
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
router.post('/users', createUser);
router.post('/users/login', loginUser);
router.post('/users/logout', auth, logoutUser);
// router.post('/users/logoutALL', logoutAll);
router.patch('/users/me', auth, updateUser);
router.delete('/users/me', auth, deleteUser);




export default router;