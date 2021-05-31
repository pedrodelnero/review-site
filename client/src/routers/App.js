import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Footer } from '../components';
import {
  ChangePassword,
  ProductDetails,
  ProductForm,
  Products,
  SignUp,
  SignIn,
  UserPage,
} from '../pages';
import { getUser } from '../actions/user';
import UserContext from '../context/user';
import useStyles from './styles.js';

const AppRouter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ user }}>
      <div className={classes.app}>
        <Router>
          <Header />
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
    </UserContext.Provider>
  );
};

export default AppRouter;
