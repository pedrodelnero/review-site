import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Divider,
  IconButton,
  Paper,
  TextField,
  Tooltip,
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

import useStyles from './styles.js';
import { getProducts } from '../../actions/products';
import { getReviews } from '../../actions/reviews';
import { Product, Review } from '../../components';
import UserContext from '../../context/user';

const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { products, reviews } = useSelector((state) => state);
  const {
    user: { isLoggedIn },
  } = useContext(UserContext);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Paper className={classes.addProdBox}>
        <TextField
          label="Add product..."
          variant="outlined"
          className={classes.textfield}
          component={Link}
          to={isLoggedIn ? '/product' : '/sign-in'}
        />
        <Tooltip title="Add product image">
          <IconButton
            component={Link}
            to={isLoggedIn ? '/product' : '/sign-in'}
          >
            <ImageIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Paper>
      <Divider variant="middle" style={{ margin: '20px' }} />
      <div>
        <div className={classes.row}>
          {products.length > 0 &&
            products
              .slice(0, 4)
              .map((product) => (
                <Product product={product} key={product._id} />
              ))}
        </div>
        <Button
          variant="contained"
          color="secondary"
          style={{ width: '120px' }}
        >
          See more
        </Button>
      </div>
      <Divider variant="middle" style={{ margin: '20px' }} />
      <div className={classes.row}>
        {reviews.length > 0 &&
          reviews.map((review) => <Review review={review} key={review._id} />)}
      </div>
    </div>
  );
};

export default Products;
