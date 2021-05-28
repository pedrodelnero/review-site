// import React, { useState, useEffect, createRef } from 'react';
import React, { createRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const ProductDetails = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const revModalRef = createRef();
  const { product } = useSelector((state) => state);
  // const { isLoggedIn, user } = useSelector((state) => state.user);
  // const [authorized, setAuthorized] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [toRefresh, setToRefresh] = useState(false);

  console.log('prod details', toRefresh, product);

  // useEffect(() => {
  // if (isLoggedIn) {
  //   user._id === product.authorID
  //     ? setAuthorized(true)
  //     : setAuthorized(false);
  // } else {
  //   setAuthorized(false);
  // }
  // }, []);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch, toRefresh]);

  const removeProduct = () => dispatch(deleteProduct(id));

  const handleOpen = () => setOpenReviewModal(true);

  const handleClose = () => setOpenReviewModal(false);

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
                Reviews {product.reviews.length}
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
              <Typography>{product.averageRating}</Typography>
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
        {product.reviews.length > 0 &&
          product.reviews.map((review) => (
            <Review
              review={review}
              prodId={id}
              key={review._id}
              refresh={() => setToRefresh(!toRefresh)}
            />
          ))}
      </Box>
      <Modal open={openReviewModal} onClose={handleClose}>
        <>
          <ReviewModal
            ref={revModalRef}
            rating={starRating}
            closeModal={handleClose}
            refreshVal={toRefresh}
            refresh={() => setToRefresh(!toRefresh)}
          />
        </>
      </Modal>
    </Container>
  );
};

export default ProductDetails;
