import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Product = ({
  product: { author, description, name, _id, image, averageRating },
}) => {
  const classes = useStyles();

  return (
    <Link to={`/${_id}/details`} className={classes.root}>
      <div className={classes.header}>
        <img
          alt=" "
          src={image || 'https://via.placeholder.com/150'}
          title="Phto"
          className={classes.image}
        />
      </div>
      <div className={classes.content}>
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
      </div>
    </Link>
  );
};

export default Product;
