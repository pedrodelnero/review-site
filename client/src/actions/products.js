import axios from "axios";
import Cookies from "universal-cookie";

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
} from "../constants/actionTypes";

const cookies = new Cookies();
const token = cookies.get("token");

const api = axios.create({
  // baseURL: "https://delnero-review-app.herokuapp.com/products",
  baseURL: "http://localhost:5000/products",
  headers: { Authorization: `Bearer ${token}` },
});

export const getProducts = () => async (dispatch) => {
  try {
    const { data: products } = await api.get("/");

    dispatch({ type: GET_PRODUCTS, payload: products });
  } catch (e) {
    console.log(e.message);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.post("/", product);

    window.location.href = "/";

    dispatch({ type: ADD_PRODUCT, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.delete(`/${id}`);

    window.location.href = "/";
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
