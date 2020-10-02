import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import reviews from './reviews';
import user from './user';

export default combineReducers({ products, product, reviews, user });