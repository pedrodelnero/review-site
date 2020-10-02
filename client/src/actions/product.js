import axios from "axios";
import Cookies from 'universal-cookie'

import { GET_PRODUCT } from "../constants/actionTypes";

const cookies = new Cookies();
const token = cookies.get("token");

const api = axios.create({
  baseURL: "http://localhost:5000/products",
  headers: { Authorization: `Bearer ${token}` },
});

export const getProduct = (id) => async (dispatch) => {
  const { data: product } = await api.get(`/${id}`);
  const { data: reviews } = await api.get(`/${product._id}/reviews`);
    
  product.reviews = reviews;

  dispatch({ type: GET_PRODUCT, payload: product });
};
