import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Popover, Typography } from '@material-ui/core';

// import { Product, Review } from '../../components';
import { deleteUser } from '../../actions/user';
import useStyles from './styles.js';

const UserPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useSelector((state) => state.user);

  const id = !!anchorEl ? 'simple-popover' : undefined;

  const deleteUserAccount = async () => {
    await dispatch(deleteUser());
    // window.location.href = '/'
  };

  return (
    <div>
      <Typography>Account Details</Typography>
      <Typography>Email: {user.email} </Typography>
      <Button
        to="/password"
        variant="contained"
        color="primary"
        component={Link}
      >
        Change your password
      </Button>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Delete Account
      </Button>
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
        <Typography className={classes.typography}>
          Are you sure you want to delete your account?
        </Typography>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={() => deleteUserAccount()}
        >
          Delete Account
        </Button>
      </Popover>
      <Typography variant="h5">Products you've added:</Typography>
      {/* {user.products &&
        (user.products.length > 0 ? (
          user.products.map((product) => (
            <Product product={product} key={product._id} />
          ))
        ) : (
          <Typography>none</Typography>
        ))}
      <Typography variant="h5">Reviews you've added:</Typography>
      {user.reviews &&
        (user.reviews.length > 0 ? (
          user.reviews.map((review) => (
            <Review review={review} key={review._id} />
          ))
        ) : (
          <Typography>none</Typography>
        ))} */}
    </div>
  );
};

export default UserPage;
