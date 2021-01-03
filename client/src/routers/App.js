import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
// import { Container } from '@material-ui/core';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Footer, Products, ProductForm, ProductDetails, SignUp, SignIn , UserPage, ChangePassword, Sidebar, Why } from '../components';
import { getUser } from "../actions/user";
import Mobile from '../context/Mobile';
import useStyles from './styles.js';

const cookies = new Cookies();

const AppRouter = () => {
  const classes = useStyles();
  const history = useHistory();
  const { isLoggedIn } = useSelector(state => state.user)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Below is done for useContext; needed for Header component to work => function to click outside of account menu to close it.
  const [isAccMenuOpen, setIsAccMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const token = cookies.get('token')

  useEffect(() => {
    if (isLoggedIn || token) {
      dispatch(getUser());
    }

  }, [dispatch, isLoggedIn, token]);
  
  return (
    <Mobile.Provider value={{ isSidebarOpen, setIsSidebarOpen, isAccMenuOpen, setIsAccMenuOpen }}>
      <div className={classes.app}>
        <Router value={history}>
          <Header />
          { isSidebarOpen && <Sidebar  />}
          <div className={classes.body}>
            {/* {(window.location.pathname === '/sign-in' || window.location.pathname === '/sign-up') ? null : <Header />} */}
            <Switch >
              <Route path="/product/:id?" component={ProductForm}/>
              <Route path="/:id?/details" component={ProductDetails}/>
              <Route path="/sign-up" component={SignUp}/>
              <Route path="/sign-in" component={SignIn}/>
              <Route path= "/user" component={UserPage}/>
              <Route path="/password" component={ChangePassword}/>
              <Route path="/why" component={Why}/>
              <Route exact path="/" component={Products}/>          
            </Switch>
          </div>
          <Footer className={classes.footer} />
        </Router>
      </div>
    </Mobile.Provider>

  )
}
        
export default AppRouter;