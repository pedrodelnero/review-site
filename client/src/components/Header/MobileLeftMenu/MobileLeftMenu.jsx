import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core/';

import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  list: {
    width: 250,
    color: 'black',
  },
  listItem: {
    color: 'black',
    textDecoration: 'none',
    '& .MuiTypography-root': {
      fontWeight: 700,
    },
  },
});

const MobileLeftMenu = ({ toggleDrawer }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem component={Link}>
          <ListItemIcon>
            <HomeIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Home" className={classes.listItem} />
        </ListItem>
        <Divider />
        <ListItem component={Link} className={classes.listItem}>
          <ListItemIcon>
            <AppsIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
      </List>
    </div>
    // <Menu
    //   // anchorEl={leftMobileMoreAnchorEl}
    //   // anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    //   id={mobileMenuId}
    //   // keepMounted
    //   // transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    //   open={isLeftMobileMenuOpen}
    //   onClose={handleLeftMobileMenuClose}
    //   style={{ border: '1px solid red', p: 0 }}
    // >
    //   <div style={{ border: '1px solid red', width: '100%', height: '100%' }}>
    //     <MenuItem component={Link} to="/">
    //       <IconButton
    //         aria-controls="primary-search-account-menu"
    //         aria-haspopup="true"
    //         color="inherit"
    //       >
    //         <HomeIcon />
    //       </IconButton>
    //       Home
    //     </MenuItem>
    //     <MenuItem component={Link} to="/categories">
    //       <IconButton color="inherit">
    //         <AppsIcon />
    //       </IconButton>
    //       Categories
    //     </MenuItem>
    //   </div>
    // </Menu>
  );
};

export default MobileLeftMenu;
