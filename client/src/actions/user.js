import axios from "axios";
import Cookies from 'universal-cookie'


import { GET_USER, UPDATE_USER, DELETE_USER, SIGN_UP, SIGN_IN, SIGN_OUT} from "../constants/actionTypes";


const cookies = new Cookies();
const token = cookies.get("token");

const userAPI = axios.create({
  baseURL: "https://delnero-review-app.herokuapp.com/user",
  headers: { Authorization: `Bearer ${token}` },
});

export const getUser = () => async (dispatch) => {
  try {
    const { data: user } = await userAPI.get('/');
      
    dispatch({ type: GET_USER, payload: user });
    
  } catch (e) {
    console.log(e.message)
  }
};

export const updateUserPassword = ( currentPassword, newPassword, confirmNewPassword ) => async (dispatch) => {
  try {
    const { data: { user }} = await userAPI.patch('/me', { currentPassword, newPassword, confirmNewPassword });
    dispatch({ type: UPDATE_USER, payload: user })

  } catch(e) {
    console.log(e.message)
  }

}

export const deleteUser = () => async (dispatch) => {
  try {
    const { data: { user }} = await userAPI.delete('/me');
    console.log(user)

    cookies.remove('token', { path: '/' });
    cookies.remove('user', { path: '/' }); 

    dispatch({ type: DELETE_USER, payload: user })

  } catch(e) {
    console.log(e.message)
  }

}

export const signUp = ( name, email, password ) => async (dispatch) => {  
  try {
    const { data: { token, user } } = await userAPI.post('/', { name, email, password }, {
      headers: {}
    });
    
    cookies.set('token', token, { path: '/' });
    cookies.set('user', user, { path: '/' });

    
    dispatch({ type: SIGN_UP, payload: user })
    // dispatch(getUser())
    
  } catch(e) {
    console.log(e.message)
  }
}

export const signIn = ( email, password ) => async (dispatch) => {  
  try {
    const { data: { token, user } } = await userAPI.post('/login', { email, password }, {
      headers: {}
    }); 
    
    cookies.set('token', token, { path: '/' });
    cookies.set('user', user, { path: '/' });
    
    dispatch({ type: SIGN_IN, payload: user })
    // dispatch(getUser())
    
  } catch (e) {
    console.log(e.message)
  }
}

export const signOut = () => async (dispatch) => {  
  try {
    const { data } = await userAPI.post('/logout'); 
    
    cookies.remove('token', { path: '/' });
    cookies.remove('user', { path: '/' }); 

    window.location.href = '/'

    dispatch({ type: SIGN_OUT, payload: data })
  } catch (e) {
    console.log(e.message)
  }
}