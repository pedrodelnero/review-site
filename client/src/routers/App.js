import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Header,
  Footer,
  Products,
  ProductForm,
  ProductDetails,
  SignUp,
  SignIn,
  UserPage,
  ChangePassword,
  Sidebar,
} from '../components';
import { getUser } from '../actions/user';
import Mobile from '../context/Mobile';
import useStyles from './styles.js';

const AppRouter = () => {
  const classes = useStyles();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Below is done for useContext; needed for Header component to work => function to click outside of account menu to close it.
  const [isAccMenuOpen, setIsAccMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Mobile.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isAccMenuOpen,
        setIsAccMenuOpen,
      }}
    >
      <div className={classes.app}>
        <Router>
          <Header />
          {isSidebarOpen && <Sidebar />}
          <div className={classes.body}>
            <Switch>
              <Route path="/product/:id?" component={ProductForm} />
              <Route path="/:id?/details" component={ProductDetails} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/user" component={UserPage} />
              <Route path="/password" component={ChangePassword} />
              <Route exact path="/" component={Products} />
            </Switch>
          </div>
          <Footer className={classes.footer} />
        </Router>
      </div>
    </Mobile.Provider>
  );
};

export default AppRouter;
