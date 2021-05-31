import React from 'react';
// import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const DesktopSubMenu = (props) => {
  const { anchorEl, isOpen, handleMenuClose, logOut } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        Profile
      </MenuItem>
      <MenuItem onClick={logOut}>
        <IconButton color="inherit">
          <ExitToAppIcon />
        </IconButton>
        Log out
      </MenuItem>
    </Menu>
  );
};

export default DesktopSubMenu;
