import React, { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Paper, Popover, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import Rating from '@material-ui/lab/Rating';

import { deleteReview } from '../../actions/reviews';
import useStyles from './styles.js';

const memId = localStorage.getItem('id');

const Review = (props) => {
  const {
    review: { _id: rID, rating, content, author, product },
    refresh,
  } = props;
  const classes = useStyles();
  const { isLoggedIn } = useSelector((state) => state.user);
  const [authorized, setAuthorized] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (isLoggedIn) {
      author._id === memId ? setAuthorized(true) : setAuthorized(false);
    } else {
      setAuthorized(false);
    }
  }, [author, isLoggedIn]);

  const handleDeleteReview = async (e) => {
    e.preventDefault();
    await dispatch(deleteReview(product, rID));
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
              {author.name}
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
