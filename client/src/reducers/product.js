import {
  GET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCT_AVR_RATING,
} from '../constants/actionTypes';

export default (product = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT:
    case ADD_PRODUCT:
    case DELETE_PRODUCT:
    case UPDATE_PRODUCT:
      return action.payload;
    case GET_PRODUCT_AVR_RATING:
      return { ...product, avgRating: action.payload };
    default:
      return product;
  }
};
