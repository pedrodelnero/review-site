import React, { createRef, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  Paper,
  Typography,
  CircularProgress,
} from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';
import { Review, ReviewModal } from '../../components';
import { getProduct, deleteProduct } from '../../actions/product';
import UserContext from '../../context/user';

const ProductDetails = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const revModalRef = createRef();
  const product = useSelector((state) => state.product);
  const [authorized, setAuthorized] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [toRefresh, setToRefresh] = useState(false);
  const {
    user: { user, isLoggedIn },
  } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn) {
      user?._id === product.author?._id
        ? setAuthorized(true)
        : setAuthorized(false);
    } else {
      setAuthorized(false);
    }
  }, [isLoggedIn, product, user]);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch, toRefresh]);

  const removeProduct = () => dispatch(deleteProduct(id));

  const handleOpen = () => setOpenReviewModal(true);

  const handleClose = () => setOpenReviewModal(false);

  const createReview = (_, newValue) => {
    setStarRating(newValue);
    handleOpen();
  };

  if (!product.name) return <CircularProgress />;

  return (
    <div className={classes.root}>
      <Paper>
        <div className={classes.product}>
          <div>
            <img
              alt=""
              src={product.image || 'https://via.placeholder.com/150'}
              title="Photo"
              className={classes.image}
            />
          </div>
          <div className={classes.details}>
            <div component="section" className={classes.text}>
              <Typography className="prodName" variant="h3">
                {product.name}
              </Typography>
              <Typography className="numOfRev" variant="h6">
                Reviews {product.reviews.length}
              </Typography>
              <Typography className="numOfRev" variant="body1">
                Posted by {product.author.name}
              </Typography>
            </div>
            <div className={classes.starReview}>
              <Rating
                name="simple"
                value={product.averageRating}
                precision={0.5}
                readOnly
                size="large"
              />
              <Typography>{product.averageRating}</Typography>
            </div>
          </div>
          {authorized && (
            <div className={classes.deleteProd}>
              <Button
                variant="contained"
                color="secondary"
                onClick={removeProduct}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </Paper>
      <div className={classes.body}>
        <Paper className={classes.writeReview} elevation={3}>
          <div className={classes.writeReviewCont}>
            <div>
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
            </div>
            <div>
              <Rating
                name="simple-controlled"
                precision={0.5}
                size="large"
                onChange={createReview}
              />
            </div>
          </div>
        </Paper>
        {product.reviews.length > 0 &&
          product.reviews.map((review) => (
            <Review
              review={review}
              key={review?._id}
              refresh={() => setToRefresh(!toRefresh)}
            />
          ))}
      </div>
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
    </div>
  );
};

export default ProductDetails;
