import axios from 'axios';
import Cookies from 'universal-cookie';

import { GET_PRODUCTS } from '../constants/actionTypes';

const cookies = new Cookies();
const token = cookies.get('token');

const api = axios.create({
  // baseURL: 'https://delnero-review-site.herokuapp.com/products',
  baseURL: 'http://localhost:5000/products',
  headers: { Authorization: `Bearer ${token}` },
});

export const getProducts = () => async (dispatch) => {
  try {
    const { data: products } = await api.get('/');

    dispatch({ type: GET_PRODUCTS, payload: products });
  } catch (err) {
    console.log(err.message);
  }
};
