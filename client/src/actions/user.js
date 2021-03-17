import axios from 'axios';

import {
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  FAIL_SIGN_UP,
  FAIL_SIGN_IN,
  FAIL_SIGN_OUT,
  FAIL_UPDATE_PASSWORD,
} from '../constants/actionTypes';

const userAPI = axios.create({
  // baseURL: 'https://delnero-review-site.herokuapp.com/user',
  baseURL: 'http://localhost:5000/user',
  withCredentials: true,
});

export const getUser = () => async (dispatch) => {
  try {
    const { data: user } = await userAPI.get('/');

    dispatch({ type: GET_USER, payload: user });
  } catch (err) {
    console.log('Act', err.response.data.message);
  }
};

export const signUp = (name, email, password) => async (dispatch) => {
  try {
    const {
      data: { id },
    } = await userAPI.post('/', { name, email, password });

    dispatch({ type: SIGN_UP, payload: id });
  } catch (err) {
    dispatch({
      type: FAIL_SIGN_UP,
      payload: err.response.data.messages,
    });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const { data } = await userAPI.post('/login', { email, password });

    dispatch({ type: SIGN_IN, payload: data });
    window.location.href = '/';
  } catch (err) {
    dispatch({
      type: FAIL_SIGN_IN,
      payload: err.response.data.messages,
    });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    const { data } = await userAPI.post('/logout');

    window.location.href = '/';

    dispatch({ type: SIGN_OUT, payload: data });
  } catch (err) {
    dispatch({
      type: FAIL_SIGN_OUT,
      payload: err.response.data.messages,
    });
  }
};

export const updateUserPassword = (
  currentPassword,
  newPassword,
  confirmNewPassword
) => async (dispatch) => {
  try {
    const {
      data: { user },
    } = await userAPI.patch('/me', {
      currentPassword,
      newPassword,
      confirmNewPassword,
    });

    window.location.href = '/user';

    dispatch({ type: UPDATE_USER, payload: user });
  } catch (err) {
    dispatch({
      type: FAIL_UPDATE_PASSWORD,
      payload: err.response.data.messages,
    });
  }
};

export const deleteUser = () => async (dispatch) => {
  try {
    const {
      data: { user },
    } = await userAPI.delete('/me');
    console.log(user);

    dispatch({ type: DELETE_USER, payload: user });
  } catch (e) {
    console.log(e.message);
  }
};
