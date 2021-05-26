import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { Button, Popover, Typography } from '@material-ui/core/';
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
    <div key={rID} className={classes.root}>
      <Typography
        variant="body1"
        color="textSecondary"
        style={{ padding: 0, lineHeight: 1 }}
      >
        {author}
      </Typography>
      <Rating value={rating} readOnly />
      <Typography variant="body1" style={{ padding: 0, lineHeight: 1 }}>
        {content}
      </Typography>
      {authorized && (
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
      </Popover>
    </div>
  );
};

export default Review;
