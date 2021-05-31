import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from '@material-ui/core/';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const MobileLeftMenu = (props) => {
  const { logOut, handleMenuClose, isLoggedIn, isOpen, anchorEl } = props;

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isOpen}
      onClose={handleMenuClose}
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
};

export default MobileLeftMenu;
