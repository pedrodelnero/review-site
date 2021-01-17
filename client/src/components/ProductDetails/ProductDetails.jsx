import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField, Typography, CircularProgress } from "@material-ui/core/";
import Rating from '@material-ui/lab/Rating';
import Cookies from "universal-cookie";

import useStyles from "./styles.js";
import Review from "./Review/Review";
import { getProduct } from "../../actions/product";
import { deleteProduct } from "../../actions/products";
import { addReview } from '../../actions/reviews';

const cookies = new Cookies();

const ProductDetails = () => {
  const { id } = useParams();
  const [isReviewBoxOpen, setIsReviewBoxOpen] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const product = useSelector((state) => state.product);
  const { isLoggedIn } = useSelector((state) => state.user);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));

    if (isLoggedIn) {
      (cookies.get("user").name === product.author) ? setAuthorized(true) : setAuthorized(false);
    } else {
      setAuthorized(false);
    }
  }, [id, dispatch, isLoggedIn, product.author]);

  const removeProduct = (id) => dispatch(deleteProduct(id));

  const submitReview = () => dispatch(addReview(id, { rating, content }));

  if (!product.name) return <CircularProgress />;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div><img alt="" src={product.image|| "https://via.placeholder.com/150"} title="Photo" className={classes.image} /></div>
        <div className={classes.details}>
          <Typography className='prodName' variant="body1" >{product.name}</Typography>
          <Typography variant="subtitle1" color="textSecondary" >Description</Typography>
          <Typography variant="body1" >{product.description}</Typography>
          {authorized ? (
            <div className={classes.detailButtons}>
              <Button className="editButton" component={Link} to={`/product/${id}`}>Edit</Button>
              <Button className="deleteButton" onClick={() => removeProduct(id) }>Delete</Button>
            </div>
          ) : (
            <Typography variant="body1" color="textSecondary" className="author" >Added by: {product.author}</Typography>
          )}
        </div>
      </div>
      <div className={classes.formButton}>
        {isLoggedIn ? (
          <Button
            size="large"
            color="secondary"
            variant="contained"
            className="addReview"
            onClick={() => setIsReviewBoxOpen(!isReviewBoxOpen)}
          >
            Write Review
          </Button>
        ) : (
          <Button variant="contained" className="signIn" component={Link} to="/sign-in">Sign in to write review</Button>
        )}
      </div>
      { isReviewBoxOpen && <div className={classes.reviewForm}>
        <Typography variant='h5' >Rating</Typography>
        <Rating value={rating} name="unique-rating" onChange={(e, newValue) => setRating(newValue)} />
        <TextField
          value={content}
          onChange={e => setContent(e.target.value)}
          multiline
          rows={4}
          placeholder="Write your review..."
          InputProps={{ disableUnderline: true }}
        />
        <Button variant='contained' color='secondary' onClick={() => submitReview()}>Submit</Button>
      </div>}
      {product.reviews.map((review, index) => (
        <div className={classes.reviews} key={index}>
          <Review review={review} prodId={id} />
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;