import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

import Product from "./Product/Product";
import useStyles from "./styles.js";
import { getProducts } from "../../actions/products";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Button component={Link} to="/add-product" startIcon={<AddIcon />} className={classes.button} >Add Product</Button>
      <div className={classes.grid}>
        {products.map((product, index) => (
            <Product product={product} key={product._id} /> 
        ))}
      </div>
    </div>
  );
};

export default Products;
