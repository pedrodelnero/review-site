import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Drawer,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useStyles from './styles.js';
import { signOut } from '../../actions/user';
import MobileLeftMenu from './MobileLeftMenu/MobileLeftMenu';
import DesktopSubMenu from './DesktopMenu/DesktopSubMenu';

export default function Header() {
  const classes = useStyles();
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logOut = () => {
    handleMenuClose();
    dispatch(signOut());
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [rightMobileMoreAnchorEl, setRightMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isRightMobileMenuOpen = Boolean(rightMobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);

  const handleRightMobileMenuClose = () => setRightMobileMoreAnchorEl(null);
  const handleRightMobileMenuOpen = (event) =>
    setRightMobileMoreAnchorEl(event.currentTarget);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleRightMobileMenuClose();
  };

  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsLeftOpen(!isLeftOpen);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={rightMobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isRightMobileMenuOpen}
      onClose={handleRightMobileMenuClose}
    >
      {isLoggedIn ? (
        <div>
          <MenuItem component={Link} to="/account">
            <IconButton
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            Account
          </MenuItem>
          <MenuItem onClick={logOut}>
            <IconButton color="inherit">
              <ExitToAppIcon />
            </IconButton>
            Log out
          </MenuItem>
        </div>
      ) : (
        <MenuItem component={Link} to="/sign-in">
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
          Sign/Log in
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            aria-controls={mobileMenuId}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Review Thee
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" component={Link} to="/">
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/categories">
              <AppsIcon />
            </IconButton>
            {isLoggedIn ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <IconButton
                edge="end"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                color="inherit"
                component={Link}
                to="/sign-in"
              >
                <ExitToAppIcon />
              </IconButton>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleRightMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <Drawer anchor="left" open={isLeftOpen} onClose={toggleDrawer}>
        <MobileLeftMenu anchorEl={anchorEl} toggleDrawer={toggleDrawer} />
      </Drawer>
      <DesktopSubMenu
        anchorEl={anchorEl}
        menuId={mobileMenuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        logOut={logOut}
      />
    </div>
  );
}
