import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Typography } from '@material-ui/core/';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import useStyles from './styles.js';
import { signOut } from "../../actions/user";
import logo from '../../images/logo.png'; 

const StyledMenu = withStyles({
  paper: {
    color: 'white',
    backgroundColor: '#4A4953',
    border: '1px solid #d3d4d5',
    borderRadius: '10px'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Header = () => {
  const classes = useStyles();
  const { isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [mouseOverButton, setMouseOverButton] = useState(null);
  const [mouseOverMenu, setMouseOverMenu] = useState(null);
  const [isAccMenuOpen, setIsAccMenuOpen] = useState(null);

  console.log('open', isAccMenuOpen)

  // if (mouseOverButton || mouseOverMenu) setIsAccMenuOpen(true)
  const openAccMenu = (event) => {
    setIsAccMenuOpen(event.currentTarget);
  };
  const closeAccMenu = (e) => {
    e.preventDefault()
    setIsAccMenuOpen(null);
  };

  const handleClose = () => {
    setIsAccMenuOpen(null);
  };
  
  const logOut = async () => {
    // SHOW ADRIAN HOW await IS USED HERE (window location after await done)
    await dispatch(signOut());
    window.location.href = '/'
  };


  const enterButton = () => {
    setMouseOverButton(true);
    openAccMenu()
    
  }

  const leaveButton = () => {
    setMouseOverButton(false);
  }

  const enterMenu = () => {
    setMouseOverMenu(true);
  }

  const leaveMenu = () => {
    setMouseOverMenu(false);
  }


  return (
    <div className={classes.root}>
      <div className={classes.titleHeader}>
        <img src={logo} alt="LOGO" width="50" height="50"></img>
        <Typography variant="h4" align="center">Did we hear?</Typography>
      </div>
      <div className={classes.container}>
        <ButtonGroup variant="contained" color="primary" className={classes.buttonsHeader}>
          { isLoggedIn && <Button component={Link} to={`/user`}>Account</Button>}
          <Button component={Link} to="/why">Why we do this</Button>
          <Button component={Link} to="/">Products</Button>
          { isLoggedIn && <Button component={Link} to="/form">Add Product</Button>}
        </ButtonGroup>
      </div>
      {isLoggedIn ? ( 
        <div className={classes.accountHeader}>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              startIcon={<AccountCircleIcon />}
              // onMouseEnter={openAccMenu}
              // onMouseLeave={closeAccMenu}
              // onMouseEnter={openButton}
              // onMouseLeave={leaveButton}
              onMouseOver={openAccMenu}
              // onmouseout={handleClose}
            >Your Account
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={isAccMenuOpen}
              // keepMounted
              open={!!isAccMenuOpen}
              // MenuListProps={{
              //   onMouseEnter: enterMenu,
              //   onMouseLeave: leaveMenu,
              // }}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <SendIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </StyledMenuItem>
            </StyledMenu>
          {/* <Button variant="contained" onClick={() => logOut()} >Sign Out</Button>   */}
        </div>
      ) : (
        <div>
          <Button variant="contained" component={Link} to="/sign-in" >Sign In</Button>  
        </div>
      )} 
    </div>
  )
}

export default Header;