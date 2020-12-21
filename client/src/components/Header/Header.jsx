import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Button, ButtonGroup, Menu, MenuItem, Typography } from '@material-ui/core/';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles.js';
import { signOut } from "../../actions/user";
import Mobile from '../../context/Mobile';
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
  const { isSidebarOpen, setIsSidebarOpen  } = useContext(Mobile);
  const dispatch = useDispatch();
  const [isAccMenuOpen, setIsAccMenuOpen] = useState(null);

  // if (mouseOverButton || mouseOverMenu) setIsAccMenuOpen(true)
  const openAccMenu = (event) => {
    console.log('mouse enter', event.currentTarget)
    setIsAccMenuOpen(event.currentTarget);
  };
  const closeAccMenu = () => {
    console.log('mouse leave')
    setIsAccMenuOpen(null);
  };
  
  const logOut = async () => {
    // SHOW ADRIAN HOW await IS USED HERE (window location after await done)
    await dispatch(signOut());
    window.location.href = '/'
  };

  const handleSibeBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <AppBar position="relative" className={classes.root}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleSibeBarToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.titleHeader}>
          <img src={logo} alt="LOGO" width="50" height="50"></img>
          <Typography variant="h4" align="center">Did we hear?</Typography>
        </div>
        <div className={classes.container}>
          <Button href="/why">Why we do this</Button>
          <Button  href="/">Products</Button>
          { isLoggedIn && <Button href="/form">Add Product</Button>}
        </div>
        {isLoggedIn && <div className={classes.accountHeader}>
          <AccountCircleIcon style={{ fontSize: 60 }} />
          <Button
            className={classes.button}
            startIcon={<AccountCircleIcon />}
          >Account
          </Button>
        </div>}
    </AppBar>
    // <div className={classes.root}>
    //   <div className={classes.titleHeader}>
    //     <img src={logo} alt="LOGO" width="50" height="50"></img>
    //     <Typography variant="h4" align="center">Did we hear?</Typography>
    //   </div>
    //   <div className={classes.container}>
    //     <ButtonGroup variant="contained" color="primary" className={classes.buttonsHeader}>
    //       { isLoggedIn && <Button component={Link} to={`/user`}>Account</Button>}
    //       <Button component={Link} to="/why">Why we do this</Button>
    //       <Button component={Link} to="/">Products</Button>
    //       { isLoggedIn && <Button component={Link} to="/form">Add Product</Button>}
    //     </ButtonGroup>
    //   </div>
    //   {isLoggedIn ? ( 
    //     <div className={classes.accountHeader}  >
    //         <Button
    //           aria-controls="simple-menu"
    //           aria-haspopup="true"
    //           startIcon={<AccountCircleIcon />}
    //           onMouseOver={openAccMenu}
    //           onMouseLeave={closeAccMenu}
    //         >Account
    //         </Button>
    //         <Menu
    //           id="simple-menu"
    //           anchorEl={isAccMenuOpen}
    //           getContentAnchorEl={null}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'center',
    //           }}
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'center',
    //           }}
    //           // keepMounted
    //           open={!!isAccMenuOpen}
    //           // onClose={(setIsAccMenuOpen, 'onMouseLeave')}
    //         >
    //         <MenuItem >Profile</MenuItem>
    //         <MenuItem >My account</MenuItem>
    //         <MenuItem >Logout</MenuItem>
    //       </Menu>
    //         {/* <StyledMenu
    //           id="customized-menu"
    //           anchorEl={isAccMenuOpen}
    //           // keepMounted
    //           open={!!isAccMenuOpen}
    //           onClose={closeAccMenu}
    //         >
    //           <StyledMenuItem>
    //             <ListItemIcon>
    //               <SendIcon fontSize="small" />
    //             </ListItemIcon>
    //             <ListItemText primary="Sent mail" />
    //           </StyledMenuItem>
    //           <StyledMenuItem>
    //             <ListItemIcon>
    //               <DraftsIcon fontSize="small" />
    //             </ListItemIcon>
    //             <ListItemText primary="Drafts" />
    //           </StyledMenuItem>
    //         </StyledMenu> */}
    //       {/* <Button variant="contained" onClick={() => logOut()} >Sign Out</Button>   */}
    //     </div>
    //   ) : (
    //     <div>
    //       <Button variant="contained" component={Link} to="/sign-in" >Sign In</Button>  
    //     </div>
    //   )} 
    // </div>
  )
}

export default Header;