import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles.js'; 
import { fetchProducts } from '../../api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage ] = useState([]);
  
  useEffect(() => {
    getProducts();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const getProducts = async () => {
    try {
      setProducts(await fetchProducts());
    } catch (error) {
      setMessage(error.message)
    }
  }
  
  const classes = useStyles();
  return (
    <Grid container spacing={10} className={classes.container}>
      {products.map((product, index) =>  (
        <Grid item xs={4} key={index}>
          <Product product={product} getProducts={getProducts} />
        </Grid>
      ))}
      {message}
    </Grid>
  );
}
    
export default Products