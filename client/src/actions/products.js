import axios from 'axios';
import Cookies from 'universal-cookie';

import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT } from '../constants/actionTypes';

const cookies = new Cookies();
const token = cookies.get('token');

const api = axios.create({
    baseURL: 'http://localhost:5000/products',
    headers: { Authorization: `Bearer ${token}` }
});

export const getProducts = () => async (dispatch) => {
  const { data: products } = await api.get('/');
  
  for (const product of products) {
    const { data: reviews } = await api.get(`/${product._id}/reviews`);
    
    product.reviews = reviews;
  }

  dispatch({ type: GET_PRODUCTS, payload: products });
};

export const addProduct = (product) => async (dispatch) => {
  const { data } = await api.post('/', product);  

  dispatch({ type: ADD_PRODUCT, payload: data });
};

export const deleteProduct = (id) => async (dispatch) => {
  await api.delete(`/${id}`);  

  dispatch({ type: DELETE_PRODUCT, payload: id });
  dispatch(getProducts());
};

export const updateProduct = (id, product) => async (dispatch) => {
  const { data } = await api.patch(`/${id}`, product);  

  dispatch({ type: UPDATE_PRODUCT, payload: data });
};
