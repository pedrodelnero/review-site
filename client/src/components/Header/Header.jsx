import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Button, Typography } from '@material-ui/core/';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles.js';
import { signOut } from "../../actions/user";
import Mobile from '../../context/Mobile';
import logo from '../../images/logo.png'; 

const Header = () => {
  const classes = useStyles();
  const { isLoggedIn } = useSelector(state => state.user);
  const { isSidebarOpen, setIsSidebarOpen  } = useContext(Mobile);
  const dispatch = useDispatch();
  const [isAccMenuOpen, setIsAccMenuOpen] = useState(null);

  
  const logOut = async () => {
    // SHOW ADRIAN HOW await IS USED HERE (window location after await done)
    await dispatch(signOut());
    window.location.href = '/'
  };

  const handleSibeBarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const toggleAccountMenu = () => {
    console.log(isAccMenuOpen)
    setIsAccMenuOpen(!isSidebarOpen);
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
          {/* <MenuIcon onClick={handleSibeBarToggle} className={classes.menuButton}/> */}
        </IconButton>
        <div className={classes.titleHeader}>
          <Link to="/">
            <img src={logo} alt="LOGO" className="logo" ></img>
          </Link>
          <Typography variant="h4" align="center">Did we hear?</Typography>
        </div>
        <div className={classes.container}>
          <Button href="/why">Why we do this</Button>
          <Button  href="/">Products</Button>
          { isLoggedIn && <Button href="/form">Add Product</Button>}
        </div>
        {/* <div className={classes.account}> */}
          <div className={classes.accountHeader}>
            <AccountCircleIcon style={{ fontSize: 60 }} />
            <Button className={classes.button} startIcon={<AccountCircleIcon />} onClick={toggleAccountMenu} >Account</Button>
          </div>
            {/* {isAccMenuOpen && <div className={classes.accountMenu}>
              <Button startIcon={<AccountCircleIcon />}>Account</Button>
              {(isLoggedIn) ? 
                (<Button  startIcon={<AccountCircleIcon />}>Log Out</Button>)
              : 
                (<Button  component={Link} to="/sign-in" startIcon={<AccountCircleIcon />}>Log In</Button>)}
            </div>} */}
        {/* </div> */}
        {/* {isLoggedIn && <div className={classes.accountHeader}>
          <AccountCircleIcon style={{ fontSize: 60 }} />
          <Button
            className={classes.button}
            startIcon={<AccountCircleIcon />}
          >Account
          </Button>
        </div>} */}
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