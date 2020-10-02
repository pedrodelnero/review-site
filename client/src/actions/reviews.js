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
  baseURL: "http://localhost:5000/products",
  headers: { Authorization: `Bearer ${token}` },
});

// getReviews = (id) => REDUCER => REVIEWS......

export const getReviews = (id) => async (dispatch, getState) => {
  const { products } = getState();
  console.log(
    products.forEach((product) =>
      console.log(product._id === "5f70f2ea6112123285663354")
    )
  );
  const { data } = await api.get(`/${id}/reviews`);

  dispatch({ type: GET_REVIEWS, payload: data });
};

export const addReview = (id, review) => async (dispatch) => {
  const { data } = await api.post(`/${id}/reviews`, review);

  dispatch({ type: ADD_REVIEW, payload: data });
};

export const deleteReview = (pID, rID) => async (dispatch) => {
  await api.delete(`/${pID}/reviews/${rID}`);

  dispatch({ type: DELETE_REVIEW, payload: rID });
  dispatch(getReviews());
};

// export const updateProduct = (id, product) => async (dispatch) => {
//   const { data } = await api.patch(`/${id}`, product);

//   dispatch({ type: UPDATE_PRODUCT, payload: data });
// };
