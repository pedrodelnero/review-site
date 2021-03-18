import axios from 'axios';

import {
  GET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from '../constants/actionTypes';

const api = axios.create({
  // baseURL: 'https://delnero-review-site.herokuapp.com/products',
  baseURL: 'http://localhost:5000/products',
  withCredentials: true,
});

export const getProduct = (id) => async (dispatch) => {
  try {
    const { data: product } = await api.get(`/${id}`);
    const { data: reviews } = await api.get(`/${product._id}/reviews`);

    product.reviews = reviews;

    dispatch({ type: GET_PRODUCT, payload: product });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.post('/', product);

    window.location.href = '/';

    dispatch({ type: ADD_PRODUCT, payload: data });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.delete(`/${id}`);

    window.location.href = '/';
    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (e) {
    console.log(e.message);
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.patch(`/${id}`, product);

    dispatch({ type: UPDATE_PRODUCT, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};
