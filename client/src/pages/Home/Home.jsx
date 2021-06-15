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
  Typography,
  withWidth,
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

import useStyles from './styles.js';
import { getProducts } from '../../actions/products';
import { getReviews } from '../../actions/reviews';
import { Product, Review } from '../../components';
import UserContext from '../../context/user';

const Products = ({ width }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { products, reviews } = useSelector((state) => state);
  const {
    user: { isLoggedIn },
    searchItems,
  } = useContext(UserContext);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getReviews());
  }, [dispatch]);

  // Changes variant for subtitles
  const isSmallScreen = /xs|sm/.test(width);
  const subtitleProps = {
    variant: isSmallScreen ? 'h4' : 'h2',
  };

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
      <Typography {...subtitleProps}>Latest products added</Typography>
      {searchItems.length > 0 ? (
        <div>
          <div className={classes.searchRow}>
            {searchItems.map((item) => (
              <Product product={item} key={item._id} />
            ))}
          </div>
        </div>
      ) : (
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
          <Divider variant="middle" style={{ margin: '20px' }} />
          <div className={classes.row}>
            {reviews.length > 0 &&
              reviews.map((review) => (
                <Review review={review} key={review._id} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default withWidth()(Products);
