import axios from "axios";
import Cookies from "universal-cookie";

import {
  GET_REVIEWS,
  ADD_REVIEW,
  DELETE_REVIEW,
} from "../constants/actionTypes";

const cookies = new Cookies();
const token = cookies.get("token");

const api = axios.create({
  // baseURL: "https://delnero-review-app.herokuapp.com/products",
  baseURL: "http://localhost:5000/products",
  headers: { Authorization: `Bearer ${token}` },
});

export const getReviews = (id) => async (dispatch) => {
  try {
    const { data } = await api.get(`/${id}/reviews`);

    dispatch({ type: GET_REVIEWS, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const addReview = (id, review) => async (dispatch) => {
  try {
    const { data } = await api.post(`/${id}/reviews`, review);

    dispatch({ type: ADD_REVIEW, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteReview = (pID, rID) => async (dispatch) => {
  try {
    await api.delete(`/${pID}/reviews/${rID}`);

    dispatch({ type: DELETE_REVIEW, payload: rID });
    dispatch(getReviews());
  } catch (e) {
    console.log(e.message);
  }
};

// export const updateProduct = (id, product) => async (dispatch) => {
// try {
//   const { data } = await api.patch(`/${id}`, product);

//   dispatch({ type: UPDATE_PRODUCT, payload: data });

// } catch (e) {
//   console.log(e.message)
// }
// };
