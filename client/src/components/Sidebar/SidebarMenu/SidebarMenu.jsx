import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton, Typography } from '@material-ui/core/';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';

import Mobile from '../../../context/Mobile'
import useStyles from './styles.js';

const SidebarMenu = () => {
  const classes = useStyles();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(Mobile); // authAPI

  const handleDrawerToggle = () => setIsSidebarOpen(!isSidebarOpen);

  return (
      <div className={classes.root}>
        <div className={classes.icon} onClick={handleDrawerToggle}>
            <IconButton size="medium">
              <ChevronLeftIcon />
            </IconButton>
        </div>
      <div className={classes.list}>
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
      </div>
  );
};

export default SidebarMenu;