import {
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
} from '../constants/actionTypes';

export default (state = { user: {}, isLoggedIn: false }, action) => {
  switch (action.type) {
    case GET_USER:
    case UPDATE_USER:
    case SIGN_UP:
    case SIGN_IN:
      return { user: action.payload, isLoggedIn: true };
    case SIGN_OUT:
      return { isLoggedIn: false };
    case DELETE_USER:
      return state;
    default:
      return state;
  }
};
