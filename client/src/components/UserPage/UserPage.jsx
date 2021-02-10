import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Popover, Typography } from "@material-ui/core";

import { Product, Review } from '../../components';
import { deleteUser } from "../../actions/user";
import useStyles from "./styles.js";

const UserPage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)

    const { user } = useSelector((state) => state.user);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const deleteUserAccount = async () => {
        await dispatch(deleteUser());
        // window.location.href = '/'
    };

    return (
        <div>
            <h1>Account Details</h1>
            <h2>Email: </h2> {user.email}
            <Button href="/password" variant="contained" color="primary">Change your password</Button>
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>Delete Account</Button>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>Are you sure you want to delete your account?</Typography>
                <Button aria-describedby={id} variant="contained" color="primary" onClick={() => deleteUserAccount()}>Delete Account</Button>
            </Popover>
            <h2>Products you've added:</h2>
            <Grid container spacing={10} className={classes.container}>
                {user.products && user.products.map((product, index) => (
                    <Grid item xs={4} key={index}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
            <h2>Reviews you've added:</h2>
            <Grid container spacing={10} className={classes.container}>
            {user.reviews && user.reviews.map((review, index) => (
                <Grid item xs={4} key={index}>
                    <Review review={review} />
                </Grid>
            ))}
            </Grid>
        </div>
    )
};

export default UserPage;