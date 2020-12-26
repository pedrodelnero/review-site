import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Button, Popover, Typography } from '@material-ui/core/';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
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
              // console.log("You clicked outside of me!");
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

  const logOut = () => {
    // SHOW ADRIAN HOW await IS USED HERE (window location after await done)
    dispatch(signOut());
  };

  const openAccMenu =(e) => {
    console.log(e.currentTarget)
    setIsAccMenuOpen(e.currentTarget)
  }
  const closeAccMenu =(e) => {
    console.log(e.currentTarget)
    setIsAccMenuOpen(e.currentTarget)
  }

  const handleSibeBarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <AppBar position="relative" className={classes.root}>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleSibeBarToggle}
          className={classes.menuButton}
        > */}
          <MenuIcon onClick={handleSibeBarToggle}className={classes.menuButton} />
        {/* </IconButton> */}
        <div className={classes.titleHeader}>
          <Link to="/">
            <img src={logo} alt="LOGO" className="logo" ></img>
          </Link>
          <Typography variant="h4" align="center">Did we hear?</Typography>
        </div>
        <div className={classes.container}>
          <Button href="/why">Why we do this</Button>
          <Button  href="/">Products</Button>
          { isLoggedIn && <Button href="/add-product">Add Product</Button>}
        </div>
        {/* <div ref={wrapperRef} className={classes.account}> */}
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
          </div>) : (
            <Button className={classes.button} component={Link} to="/sign-in" >Sign in</Button>
          )}
        {/* </div> */}
    </AppBar>
  )
}

export default Header;