import React from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles.js';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">Made by PDN</Typography>
        </div>
    )
}

export default Footer;