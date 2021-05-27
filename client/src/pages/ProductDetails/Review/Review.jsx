import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { Box, Button, Paper, Popover, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';
import { deleteReview } from '../../../actions/reviews';

const cookies = new Cookies();

const Review = ({
  prodId: pID,
  review: { _id: rID, authorID, rating, content, author },
  getReviews,
}) => {
  const classes = useStyles();
  const { isLoggedIn } = useSelector((state) => state.user);
  const [authorized, setAuthorized] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      cookies.get('user') === authorID
        ? setAuthorized(true)
        : setAuthorized(false);
    } else {
      setAuthorized(false);
    }
  }, [authorID, isLoggedIn]);

  const handleDeleteReview = () => {
    dispatch(deleteReview(pID, rID));
    setAnchorEl(null);
    dispatch(getReviews(pID));
  };

  const id = !!anchorEl ? 'simple-popover' : undefined;

  return (
    <Paper elevation={1} className={classes.root}>
      <Box>
        <Box className={classes.author}>
          <Typography variant="h6" color="textSecondary">
            {author}
          </Typography>
        </Box>
        <Box className={classes.authorReview}>
          <Rating value={rating} readOnly size="large" />
          <Typography variant="body1">{content}</Typography>
        </Box>
      </Box>
      {/* {authorized && (
        <DeleteIcon
          aria-describedby={id}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        />
      )}
      <Popover
        id={id}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteReview}
        >
          Delete Review
        </Button>
      </Popover> */}
    </Paper>
  );
};

export default Review;
