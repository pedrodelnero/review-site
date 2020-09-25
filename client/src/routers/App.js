import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Cookies from 'universal-cookie';


import { Products, ProductForm, Header, ProductDetails, SignUp, SignIn } from '../components';
import AuthApi from '../api/AuthApi';

const AppRouter = () => {
  const history = useHistory();
  const [auth, setAuth] = useState(false)
  const cookies = new Cookies();

  useEffect(() => {
    const readCookies = () => {
      const user = cookies.get("user");

      if (user) setAuth(true)
    };

    readCookies();
  }, []);

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <Router value={history} >
        <Container maxWidth="lg">
          { 
        
        (
          window.location.pathname === '/sign-in' || 
          window.location.pathname === '/sign-up'
          ) ? null : <Header />
        }
          <Switch>
            <Route exact path="/" component={Products}/>          
            <Route path="/form/:id?" component={ProductForm}/>
            <Route path="/:id?/details" component={ProductDetails}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/sign-in" component={SignIn}/>
          </Switch>
        </Container>
      </Router>
    </AuthApi.Provider>
  )
}
        
export default AppRouter;


