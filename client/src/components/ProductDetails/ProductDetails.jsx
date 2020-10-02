import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Grid, Button, Typography, CircularProgress } from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";

import AuthApi from "../../api/AuthApi";
import useStyles from "./styles.js";
import ReviewModal from "./ReviewModal/ReviewModal";
import Review from "./Review/Review";
import { getProduct } from "../../actions/product";

const ProductDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const product = useSelector((state) => state.product);
  const { auth } = useContext(AuthApi);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  if (!product.name) return <CircularProgress />;

  return (
    <>
      <Grid container spacing={10} className={classes.container}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" color="textSecondary">
            Name: {product.name}
          </Typography>
          <Typography gutterBottom variant="h4" color="textSecondary">
            Description: {product.description}
          </Typography>
        </Grid>
        {auth ? (
          <Grid item xs={12} className={classes.formButton}>
            <Button
              size="large"
              color="secondary"
              variant="contained"
              onClick={() => setIsOpen(true)}
            >
              Write Review
            </Button>
          </Grid>
        ) : (
          <Grid item xs={12} className={classes.formButton}>
            <Button variant="contained" component={Link} to="/sign-in">
              Sign in to write review
            </Button>
          </Grid>
        )}
        <ReviewModal
          id={id}
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
        />
        {product.reviews.map((review, index) => (
          <Grid item xs={4} key={index}>
            <Review review={review} prodId={id} />
          </Grid>
        ))}
      </Grid>
    </>
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
