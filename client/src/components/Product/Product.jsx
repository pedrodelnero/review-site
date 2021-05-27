import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper, Typography } from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Product = ({
  product: { author, description, name, _id, image, averageRating },
}) => {
  const classes = useStyles();

  return (
    <Paper
      component={Link}
      to={`/${_id}/details`}
      className={classes.root}
      elevation={3}
    >
      <Box className={classes.header}>
        <img
          alt="image"
          src={image || 'https://via.placeholder.com/150'}
          title="Photo"
          className={classes.image}
        />
      </Box>
      <Box className={classes.content}>
        <Typography className="prodTitle" variant="body1">
          {name}
        </Typography>
        <Typography className="prodAuthor">Added by: {author}</Typography>
        <Typography className="prodDescription">{description}</Typography>
        <Rating
          name="simple-controlled"
          value={averageRating}
          precision={0.5}
          readOnly
        />
      </Box>
    </Paper>
  );
};

export default Product;
