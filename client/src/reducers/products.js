import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/actionTypes";

export default (products = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [action.payload, ...products];
    case DELETE_PRODUCT:
      return products.filter((products) => products.id !== action.payload);
    case UPDATE_PRODUCT:
      return [action.payload, ...products];
    default:
      return products;
  }
};