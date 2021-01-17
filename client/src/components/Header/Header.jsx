import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Button, Typography } from '@material-ui/core/';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles.js';
import { signOut } from "../../actions/user";
import Mobile from '../../context/Mobile';
import logo from '../../images/logo.png'; 

function useOutsideAlerter(ref) {
  const { isAccMenuOpen, setIsAccMenuOpen } = useContext(Mobile);
  useEffect(() => {
      /*** Alert if clicked on outside of element***/
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              setIsAccMenuOpen(false)
          }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [isAccMenuOpen, ref, setIsAccMenuOpen]);
}

const Header = () => {
  const classes = useStyles();
  const { isLoggedIn } = useSelector(state => state.user);
  const { isSidebarOpen, setIsSidebarOpen, isAccMenuOpen, setIsAccMenuOpen } = useContext(Mobile);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleSibeBarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  const openAccMenu =(e) => setIsAccMenuOpen(e.currentTarget);
  // const closeAccMenu =(e) => {setIsAccMenuOpen(e.currentTarget);
  
  const logOut = () => dispatch(signOut());

  return (
    <AppBar position="relative" className={classes.root}>
        <MenuIcon onClick={handleSibeBarToggle} className={classes.menuButton} />
        <div className={classes.titleHeader}>
          <Link to="/">
            <img src={logo} alt="LOGO" className="logo" ></img>
          </Link>
          <Typography variant="h4" align="center">Did we hear?</Typography>
        </div>
        <div className={classes.container}>
          <Button href="/why">Why we do this</Button>
          <Button  href="/">Products</Button>
          { isLoggedIn && <Button href="/product">Add Product</Button>}
        </div>
          {isLoggedIn ? (<div className={classes.account}>
            <div ref={wrapperRef} onClick={openAccMenu} className={classes.accountTitle}>
              <AccountCircleIcon style={{ fontSize: 40 }} className="accountIcon"/>
              <Button startIcon={<AccountCircleIcon />}  size='large' >Account</Button>
              {!!isAccMenuOpen && 
                <div className={classes.accountMenu}>
                  <Typography
                    variant="h5"
                    component={Link}
                    to="/user"
                    style={{ textDecoration: 'none', color: 'white', borderBottom: '1px solid black' }}
                  >
                    Account
                  </Typography>
                  <Button className="logOutButton" component={Typography} onClick={logOut} size="large">Log out</Button>
                </div>
              }
            </div>
          </div>) : (
            <Button className={classes.button} component={Link} to="/sign-in" >Sign in</Button>
          )}
    </AppBar>
  )
}

export default Header;

/*
{isLoggedIn ? (<div className={classes.account}>
            <div onClick={openAccMenu} ref={wrapperRef} className={classes.accountTitle}>
              <AccountCircleIcon style={{ fontSize: 40 }} />
              <Typography>Account</Typography>
            </div>
            {!!isAccMenuOpen && 
              <div className={classes.accountMenu}>
                <Typography>Account</Typography>
                <Typography>Log out</Typography>
              </div>
            }
*/