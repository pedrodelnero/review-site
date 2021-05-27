import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Paper, TextField, Typography } from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';
import RateReviewIcon from '@material-ui/icons/RateReview';

import useStyles from './styles.js';
import { addReview } from '../../actions/reviews';

const ReviewModal = ({ rating, closeModal }) => {
  console.log(rating);
  const { id } = useParams();
  const classes = useStyles();
  const [starRating, setStarRating] = useState(rating || 0);
  const [textReview, setTextReview] = useState('');
  const dispatch = useDispatch();

  console.log(starRating, textReview);

  const submitReview = () => {
    console.log(starRating, textReview);
    // dispatch(addReview(id, { starRating, textReview }));
    setStarRating(0);
    setTextReview('');
    closeModal();
  };

  return (
    <Paper className={classes.paper}>
      <Box className={classes.header}>
        <RateReviewIcon fontSize="large" />
        <Typography variant="h3">Write a review</Typography>
      </Box>
      <Box className={classes.body}>
        <Box>
          <Typography variant="h5">What do you think?</Typography>
          <Rating
            precision={0.5}
            size="large"
            value={starRating}
            onChange={(e, newValue) => setStarRating(newValue)}
          />
        </Box>
        <Box>
          <Typography variant="h5">Describe your experience.</Typography>
          <TextField
            id="outlined-textarea"
            rows={5}
            placeholder="Write about your experience here. Your feedback is much appreciated."
            multiline
            variant="outlined"
            onChange={(e) => setTextReview(e.target.value)}
          />
        </Box>
      </Box>
      <Box>
        {!!starRating && textReview.length > 0 && (
          <Button variant="contained" color="secondary" onClick={submitReview}>
            Submit
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default ReviewModal;
