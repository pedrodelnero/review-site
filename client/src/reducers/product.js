import {  GET_PRODUCT } from '../constants/actionTypes';

export default (product = {}, action) => {
  switch (action.type) {
      case GET_PRODUCT:
        return action.payload;
    default: 
      return product;
  }
};