import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import {Grid, Button, Typography, CircularProgress } from '@material-ui/core/';

import AuthApi from '../../api/AuthApi';
import useStyles from './styles.js'; 
import ReviewModal from './ReviewModal/ReviewModal';

import Review from './Review/Review'

const ProductDetails = () => {
  const {auth} =      useContext(AuthApi);
  const { id } =    useParams();
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [message, setMessage ] = useState( [] );
     const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    getReviews();
    getProduct();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`    );
      
      setProduct(data)
    } catch (error) {
      setMessage(error);
    }
  }
  
  const getReviews = async () => {
    try {
      const { data } = await axios.get(`/products/${id}/reviews`);
      
      setReviews(data);
    } catch (error) {
      setMessage(error);
    }
  }

  const classes = useStyles();

  if (!product.name) return <CircularProgress />;
  
  return (
    <>
      <Grid container spacing={10} className={classes.container}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" color="textSecondary" >Name: {product.name}</Typography>
          <Typography gutterBottom variant="h4" color="textSecondary" >Description: {product.description}</Typography>
        </Grid>
        {auth ? (
          <Grid item xs={12} className={classes.formButton} >
            <Button size="large" color="secondary" variant="contained" onClick={() => handleOpen(true)} >Write Review</Button>
          </Grid>
          ) : (
            <Grid item xs={12} className={classes.formButton} >
              <Button variant="contained" component={Link} to="/sign-in" >Sign in to write review</Button>
            </Grid>
        )}
        <ReviewModal id={id} isOpen={isOpen} getReviews={getReviews} handleClose={handleClose} />
      {reviews.map((review, index) =>  (
        <Grid item xs={4} key={index}>
          <Review review={review} getReviews={getReviews} prodId={id}/>
        </Grid>
      ))}
      </Grid>
      {message}
    </>
  );
}

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