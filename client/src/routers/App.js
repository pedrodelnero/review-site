import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';

import { Header, Footer } from '../components';
import {
  ChangePassword,
  Home,
  ProductDetails,
  ProductForm,
  SignUp,
  SignIn,
  UserPage,
} from '../pages';
import { getUser } from '../actions/user';
import UserContext from '../context/user';
import useStyles from './styles.js';

const cookies = new Cookies();
const auth = cookies.get('auth');

const AppRouter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    if (auth) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ user, searchItems, setSearchItems }}>
      <div className={classes.app}>
        <Router>
          <Header />
          <div className={classes.body}>
            <Switch>
              <Route path="/product/:id?" component={ProductForm} />
              <Route path="/:id?/details" component={ProductDetails} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/profile" component={UserPage} />
              <Route path="/password" component={ChangePassword} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={Home} />
            </Switch>
          </div>
          <Footer className={classes.footer} />
        </Router>
      </div>
    </UserContext.Provider>
  );
};

export default AppRouter;
