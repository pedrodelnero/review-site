import React, { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Cookies from 'universal-cookie';
import { Box, Button, Paper, Popover, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';
import { deleteReview } from '../../actions/reviews';
import { getProduct } from '../../actions/product';

const memId = localStorage.getItem('id');

const Review = (props) => {
  const {
    prodId: pID,
    review: { _id: rID, authorID, rating, content, author },
    refresh,
  } = props;
  const classes = useStyles();
  const { isLoggedIn } = useSelector((state) => state.user);
  const [authorized, setAuthorized] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      authorID === memId ? setAuthorized(true) : setAuthorized(false);
    } else {
      setAuthorized(false);
    }
  }, [authorID, isLoggedIn]);

  const handleDeleteReview = () => {
    dispatch(deleteReview(pID, rID));
    dispatch(getProduct(pID));
    refresh();
    setAnchorEl(null);
  };

  const id = !!anchorEl ? 'simple-popover' : undefined;

  return (
    <Paper elevation={1} className={classes.root}>
      <Box>
        <Box className={classes.revHeader}>
          <Box>
            <Typography variant="h6" color="textSecondary">
              {author}
            </Typography>
          </Box>
          {authorized && (
            <Box>
              <DeleteIcon
                color="secondary"
                aria-describedby={id}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              />
            </Box>
          )}
        </Box>

        <Box className={classes.authorReview}>
          <Rating value={rating} readOnly size="large" precision={0.5} />
          <Typography variant="body1">{content}</Typography>
        </Box>
      </Box>
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
          color="primary"
          onClick={handleDeleteReview}
        >
          Delete Review
        </Button>
      </Popover>
    </Paper>
  );
};
// });

export default memo(Review);
