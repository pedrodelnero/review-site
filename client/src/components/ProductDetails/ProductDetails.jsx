import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography, CircularProgress } from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";

import useStyles from "./styles.js";
import ReviewModal from "./ReviewModal/ReviewModal";
import Review from "./Review/Review";
import { getProduct } from "../../actions/product";
import { deleteProduct } from "../../actions/products";

const cookies = new Cookies();

const ProductDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const product = useSelector((state) => state.product);
  const { isLoggedIn } = useSelector((state) => state.user);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));

    if (isLoggedIn) {
      cookies.get("user").name === product.author
        ? setAuthorized(true)
        : setAuthorized(false);
    } else {
      setAuthorized(false);
    }
  }, [id, dispatch, isLoggedIn, product.author]);

  const removeProduct = (id) => dispatch(deleteProduct(id));

  if (!product.name) return <CircularProgress />;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div>
            <img
              alt=""
              src={product.image|| "https://via.placeholder.com/150"}
              title="Photo"
              className={classes.image}
            />
        </div>
        <div className={classes.details}>
          <Typography className='prodName' variant="body1" >{product.name}</Typography>
          <Typography variant="subtitle1" >Description</Typography>
          <Typography variant="body1" color="initial" >{product.description}</Typography>
          {authorized && (
            <div className={classes.detailButtons}>
              <Button className="editButton" component={Link} to={`/product/${id}`}>Edit</Button>
              <Button className="deleteButton" onClick={() => removeProduct(id) }>Delete</Button>
            </div>
          )}
        </div>
      </div>
      <div className={classes.formButton}>
        {isLoggedIn ? (
          <Button size="large" color="secondary" variant="contained" onClick={() => setIsOpen(true) }>Write Review</Button>
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
