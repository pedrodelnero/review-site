import { GET_REVIEWS, ADD_REVIEW } from '../constants/actionTypes';

export default (reviews = [], action) => {
  switch (action.type) {
    case GET_REVIEWS:
        return action.payload;
    case ADD_REVIEW:
        return [action.payload, ...reviews]
    default: 
      return reviews;
  }
};