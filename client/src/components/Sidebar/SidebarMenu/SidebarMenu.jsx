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

import useStyles from './styles.js';

const cookies = new Cookies();

const SidebarMenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { mobileOpen, setMobileOpen } = useState(''); // authAPI
//   const { mobileOpen, setMobileOpen } = useContext(AuthApi); // authAPI
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const userLogOut = async () => {
    dispatch(userLogOut());
    window.location.href = '/sign-in';
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // setMobileOpen(false);
  }, [setMobileOpen]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
      <div className={classes.root}>
        <div className={classes.icon}onClick={handleDrawerToggle}>
            <IconButton size="medium">
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>
      <div item className={classes.list}>
          <Typography variant='h3' className={classes.listItem}>HOME</Typography>
          <Typography variant='h3' className={classes.listItem}>ABOUT</Typography>
          <Typography variant='h3' className={classes.listItem}>WHY</Typography>
        </div>
      {/* <Divider /> */}
      </div>
  );
};

export default SidebarMenu;