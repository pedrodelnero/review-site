import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Grid, Button, Paper, Typography, CircularProgress } from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles.js";
import ReviewModal from "./ReviewModal/ReviewModal";
import Review from "./Review/Review";
import { getProduct } from "../../actions/product";

const ProductDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const product = useSelector((state) => state.product);
  const { isLoggedIn } = useSelector((state) => state.user);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  if (!product.name) return <CircularProgress />;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h3" color="initial">{product.name}</Typography>
        <Typography variant="h5" color="initial">Description</Typography>
        <Typography variant="body1" color="initial">{product.description}</Typography>
      </div>
      <div className={classes.formButton}>
        {isLoggedIn ? (
          <Button
          wrap
            size="large"
            color="secondary"
            variant="contained"
            onClick={() => setIsOpen(true)}
          >Write Review
          </Button>
        ) : (
          <Button variant="contained" component={Link} to="/sign-in">Sign in to write review</Button>
        )}
      </div>
      <ReviewModal
        id={id}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
      {product.reviews.map((review, index) => (
        <div className={classes.reviews} key={index}>
          <Review review={review} prodId={id} />
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;

/*
 <Grid item xs={4} key={index} className={classes.container}>
          <Card className={classes.root}>
            <CardActionArea /*component={Link} to={`/${id}/details`}/>
            <CardContent>
            <Typography gutterBottom variant="h5" color="textPrimary" component="p">{review.content}</Typography>
            <Typography gutterBottom variant="subtitle2" color="textSecondary" >By: {review.author}</Typography>
          </CardContent>
        </CardActionArea>
        {message}
        {authorized &&
          <CardActions>
          <Button size="small" color="primary" onClick={() => deleteReview(id, review._id)}>Delete Review</Button>
          </CardActions>
        }
      </Card>
    </Grid>
    */
