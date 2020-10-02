import { GET_USER } from "../constants/actionTypes";
  
  export default (user = {}, action) => {
    switch (action.type) {
      case GET_USER:
        return action.payload;
      default:
        return user;
    }
  };