import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Drawer,
  IconButton,
  InputBase,
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
import { MobileLeftMenu, MobileRightMenu } from './Mobile';
import DesktopSubMenu from './DesktopMenu/DesktopSubMenu';
import UserContext from '../../context/user';

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { setSearchItems } = useContext(UserContext);
  const { isLoggedIn } = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);

  const handleSearchItems = (e) => {
    if (e.target.value.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.name.includes(e.target.value)
      );
      setSearchItems(filteredProducts);
    } else {
      setSearchItems([]);
    }
  };

  const logOut = () => {
    handleMenuClose();
    dispatch(signOut());
  };

  const handleRightMobileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsRightOpen(true);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsDesktopOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsDesktopOpen(false);
    setIsRightOpen(false);
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
              placeholder="Search products…"
              onChange={handleSearchItems}
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
              edge="end"
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
      <MobileRightMenu
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        isLoggedIn={isLoggedIn}
        isOpen={isRightOpen}
        logOut={logOut}
      />
      <Drawer anchor="left" open={isLeftOpen} onClose={toggleDrawer}>
        <MobileLeftMenu anchorEl={anchorEl} toggleDrawer={toggleDrawer} />
      </Drawer>
      <DesktopSubMenu
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        isOpen={isDesktopOpen}
        logOut={logOut}
      />
    </div>
  );
}
