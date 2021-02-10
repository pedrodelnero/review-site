import {
  FAIL_SIGN_UP,
  FAIL_SIGN_IN,
  FAIL_SIGN_OUT,
  FAIL_UPDATE_PASSWORD,
} from "../constants/actionTypes";

export default (error = null, action) => {
  switch (action.type) {
    case FAIL_SIGN_UP:
      return action.payload;
    case FAIL_SIGN_IN:
      return action.payload;
    case FAIL_SIGN_OUT:
      return action.payload;
    case FAIL_UPDATE_PASSWORD:
      return action.payload;
    default:
      return error;
  }
};
