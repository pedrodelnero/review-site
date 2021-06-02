import axios from 'axios';
import Cookies from 'universal-cookie';

import {
  GET_REVIEWS,
  ADD_REVIEW,
  DELETE_REVIEW,
} from '../constants/actionTypes';

const cookies = new Cookies();
const token = cookies.get('token');

const api = axios.create({
  // baseURL: 'https://delnero-review-site.herokuapp.com/products',
  baseURL: 'http://localhost:5000/',
  // baseURL: 'http://localhost:5000/products',
  withCredentials: true,
  headers: { Authorization: `Bearer ${token}` },
});

export const getReviews = () => async (dispatch) => {
  try {
    const { data } = await api.get('/reviews');

    dispatch({ type: GET_REVIEWS, payload: data });
  } catch (err) {
    console.log('data err', err);
    console.log(err.message);
  }
};

export const addReview = (id, review) => async (dispatch) => {
  try {
    const { data } = await api.post(`/product/${id}/reviews`, review);

    dispatch({ type: ADD_REVIEW, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteReview = (pID, rID) => async (dispatch) => {
  try {
    await api.delete(`/product/${pID}/reviews/${rID}`);

    dispatch({ type: DELETE_REVIEW, payload: rID });
  } catch (err) {
    console.log(err.message);
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
