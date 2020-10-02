import React, { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Typography } from '@material-ui/core/';
import Cookies from 'universal-cookie';

import useStyles from './styles.js';
import AuthApi from '../../api/AuthApi.jsx';


const Header = () => {
  const { auth, setAuth } = useContext(AuthApi);
  const cookies = new Cookies();

  const logOut = async () => {
    await axios.post('/users/logout', null, {
      headers: {
        'Authorization': 'Bearer ' + cookies.get('token')
      }
    });
    cookies.remove('token', { path: '/' });
    cookies.remove('user', { path: '/' });  
    setAuth(false)
    window.location.href = '/'
  };

  // https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">Product Review</Typography>
      <div className={classes.container}>
        <ButtonGroup variant="contained" color="primary" className={classes.butons}>
          { auth && <Button component={Link} to="/user">Account</Button>}
          <Button component={Link} to="/">Products</Button>
          { auth && <Button component={Link} to="/form">Add Product</Button>}
        </ButtonGroup>
        {auth ? ( 
          <div>
            <Button variant="contained" onClick={() => logOut()} >Sign Out</Button>  
          </div>
          ) : (
            <div>
              <Button variant="contained" component={Link} to="/sign-in" >Sign In</Button>  
            </div>
        )} 
      </div>
    </div>
  )
}

export default Header;