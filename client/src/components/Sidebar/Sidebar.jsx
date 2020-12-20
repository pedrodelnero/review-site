import React from 'react';
import { useTheme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

import useStyles from './styles.js';
import SidebarMenu from './SidebarMenu/SidebarMenu';

const SideNavBar = () => {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <div className={classes.root}>
        <SidebarMenu />
    </div>
  );
};

export default SideNavBar;