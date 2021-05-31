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
        <ListItem component={Link} to="/" className={classes.listItem}>
          <ListItemIcon>
            <HomeIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem
          component={Link}
          to="'categories"
          className={classes.listItem}
        >
          <ListItemIcon>
            <AppsIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
      </List>
    </div>
  );
};

export default MobileLeftMenu;
