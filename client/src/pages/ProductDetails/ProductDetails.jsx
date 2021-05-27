import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Typography,
  CircularProgress,
} from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';
import { Review, ReviewModal } from '../../components';
import { getProduct, deleteProduct } from '../../actions/product';
import { addReview, getReviews } from '../../actions/reviews';

const ProductDetails = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { product, reviews } = useSelector((state) => state);
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const [authorized, setAuthorized] = useState(false);
  const [open, setOpen] = useState(false);
  const [starRating, setStarRating] = useState(0);

  useEffect(() => {
    if (isLoggedIn) {
      user._id === product.authorID
        ? setAuthorized(true)
        : setAuthorized(false);
    } else {
      setAuthorized(false);
    }
  }, [isLoggedIn, product.authorID, user._id]);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  const removeProduct = () => dispatch(deleteProduct(id));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createReview = (e, newValue) => {
    setStarRating(newValue);
    handleOpen();
  };

  if (!product.name) return <CircularProgress />;

  return (
    <Container className={classes.root}>
      <Paper>
        <Box
          className={classes.product}
          padding={(3, 3, 5, 3)}
          margin={(0, 'auto')}
        >
          <Box>
            <img
              alt=""
              src={product.image || 'https://via.placeholder.com/150'}
              title="Photo"
              className={classes.image}
            />
          </Box>
          <Box className={classes.details}>
            <Box component="section" className={classes.text}>
              <Typography className="prodName" variant="h3">
                {product.name}
              </Typography>
              <Typography className="numOfRev" variant="h6">
                Reviews 23
              </Typography>
            </Box>
            <Box className={classes.starReview}>
              <Rating
                name="simple-controlled"
                value={product.averageRating}
                precision={0.5}
                readOnly
                size="large"
              />
              <Typography>4.6</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Box className={classes.body}>
        <Paper className={classes.writeReview} elevation={3}>
          <Box className={classes.writeReviewCont}>
            <Box>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={handleOpen}
                style={{
                  textTransform: 'none',
                }}
              >
                Review
              </Button>
            </Box>
            <Box>
              <Rating
                name="simple-controlled"
                precision={0.5}
                size="large"
                onChange={createReview}
              />
            </Box>
          </Box>
        </Paper>
        {reviews.length > 0 &&
          reviews.map((review) => (
            <Review
              review={review}
              prodId={id}
              key={review._id}
              getReviews={getReviews}
            />
          ))}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <ReviewModal rating={starRating} closeModal={handleClose} />
      </Modal>
    </Container>
  );
};

export default ProductDetails;
