import axios from "axios";
import Cookies from 'universal-cookie'

import { GET_USER } from "../constants/actionTypes";

const cookies = new Cookies();
const token = cookies.get("token");

const userAPI = axios.create({
  baseURL: "http://localhost:5000/user",
  headers: { Authorization: `Bearer ${token}` },
});


export const getUser = () => async (dispatch) => {
    const { data: user } = await userAPI.get('/');
    console.log(user)
    
  dispatch({ type: GET_USER, payload: user });
};