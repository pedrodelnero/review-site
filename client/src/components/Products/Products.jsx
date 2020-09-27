import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Product from './Product/Product';
import useStyles from './styles.js'; 
import { getProducts } from '../../actions/products';

const Products = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    
    return (
        <Grid container spacing={10} className={classes.container}>
        {products.map((product, index) => (
            <Grid item xs={4} key={index}>
                <Product product={product} />
            </Grid>
        ))}
        </Grid>
    );
}
    
export default Products