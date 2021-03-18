import {
  GET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from '../constants/actionTypes';

export default (product = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT:
    case ADD_PRODUCT:
    case DELETE_PRODUCT:
    case UPDATE_PRODUCT:
      return action.payload;
    default:
      return product;
  }
};
