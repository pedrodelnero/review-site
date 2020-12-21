import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  IconButton, Typography } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Cookies from 'universal-cookie';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';

import Mobile from '../../../context/Mobile'
import useStyles from './styles.js';

const cookies = new Cookies();

const SidebarMenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(Mobile); // authAPI
  const dispatch = useDispatch();
  // const [expanded, setExpanded] = useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  const userLogOut = async () => {
    dispatch(userLogOut());
    window.location.href = '/sign-in';
  };

  const handleDrawerToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  useEffect(() => {
    // setMobileOpen(false);
  }, []);

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  return (
      <div className={classes.root}>
        <div className={classes.icon} onClick={handleDrawerToggle}>
            <IconButton size="medium">
              <ChevronLeftIcon />
            </IconButton>
        </div>
      <div className={classes.list}>
        <div className={classes.listItem}>
          <HomeIcon />
          <Typography variant='h4' >Home</Typography>
        </div>
        <div className={classes.listItem}>
          <HomeIcon />
          <Typography variant='h4' >All</Typography>
        </div>
        <div className={classes.listItem}>
          <HomeIcon />
          <Typography variant='h4' >Categories</Typography>
        </div>
        <div className={classes.listItem}>
          <HomeIcon />
          <Typography variant='h4' >Why</Typography>
        </div>
        </div>
      {/* <Divider /> */}
      </div>
  );
};

export default SidebarMenu;