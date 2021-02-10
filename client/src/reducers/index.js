import { combineReducers } from "redux";

import error from "./error";
import products from "./products";
import product from "./product";
import reviews from "./reviews";
import user from "./user";

export default combineReducers({ error, products, product, reviews, user });
