import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";

import { Product, Review } from '../../components';
import { getUser } from "../../actions/user";
import useStyles from "./styles.js";

const UserPage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const { products, reviews, email } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch])

    return (
        <div>
            <h1>Account Details</h1>
            <h2>Email: </h2> {email}
            <Button href="/password" variant="contained" color="primary">Change your password</Button>
            <h2>Products you've added:</h2>
            <Grid container spacing={10} className={classes.container}>
                {products && products.map((product, index) => (
                    <Grid item xs={4} key={index}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
            <h2>Reviews you've added:</h2>
            <Grid container spacing={10} className={classes.container}>
            {reviews && reviews.map((review, index) => (
                <Grid item xs={4} key={index}>
                    <Review review={review} />
                </Grid>
            ))}
            </Grid>
        </div>
    )
};

export default UserPage;