import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { Product, Review } from '../../components';
import { getUser } from "../../actions/user";
import useStyles from "./styles.js";

const UserPage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const { products, reviews } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch])

    return (
        <div>
            <h1>Products you've added:</h1>
            <Grid container spacing={10} className={classes.container}>
                {products && products.map((product, index) => (
                    <Grid item xs={4} key={index}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
            <h1>Reviews you've added:</h1>
            {/* <Grid container spacing={10} className={classes.container}>
            {reviews && reviews.map((review, index) => (
                <Grid item xs={4} key={index}>
                    <Review review={review} />
                </Grid>
            ))}
            </Grid> */}
        </div>
    )
};

export default UserPage;