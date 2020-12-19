import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
// import { Container } from '@material-ui/core';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';

import { Products, ProductForm, Header, ProductDetails, SignUp, SignIn , UserPage, ChangePassword, Why } from '../components';
import { getUser } from "../actions/user";

const cookies = new Cookies();

const AppRouter = () => {
  const history = useHistory();
  const { user, isLoggedIn } = useSelector(state => state.user)
  const dispatch = useDispatch();

  const token = cookies.get('token')

  useEffect(() => {
    if (isLoggedIn || token) {
      dispatch(getUser());
    }

  }, [dispatch, isLoggedIn, token]);
  
  return (
      <Router value={history} >
        {(window.location.pathname === '/sign-in' || window.location.pathname === '/sign-up') ? null : <Header />}
          <Switch>
            <Route path="/form/:id?" component={ProductForm}/>
            <Route path="/:id?/details" component={ProductDetails}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route path= "/user" component={UserPage}/>
            <Route path="/password" component={ChangePassword}/>
            <Route path="/why" component={Why}/>
            <Route exact path="/" component={Products}/>          
          </Switch>
      </Router>
  )
}
        
export default AppRouter;