import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, IconButton, Typography } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Cookies from 'universal-cookie';
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
        {/* <Button component={Link} to="/" className={classes.listItem}> */}
        <Button component={Link} to="/" >
          <HomeIcon />
          <Typography variant='h5' >Home</Typography>
        </Button>
        <Button component={Link} to="/add-product">
          <AddIcon />
          <Typography variant='h5' >Add Product</Typography>
        </Button>
        <Button component={Link} to="/">
          <HomeIcon />
          <Typography variant='h5' >Categories</Typography>
        </Button>
        <Button component={Link} to="/why">
          <HomeIcon />
          <Typography variant='h5' >Why</Typography>
        </Button>
        </div>
      {/* <Divider /> */}
      </div>
  );
};

export default SidebarMenu;