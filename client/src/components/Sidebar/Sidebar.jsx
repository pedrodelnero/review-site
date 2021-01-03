import React from 'react';

import useStyles from './styles.js';
import SidebarMenu from './SidebarMenu/SidebarMenu';

const SideNavBar = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
        <SidebarMenu />
    </div>
  );
};

export default SideNavBar;