import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Product = ({ product: { author, name, _id, image, averageRating } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/${_id}/details`}>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Rating readOnly value={averageRating} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          component={Link}
          to={`/${_id}/details`}
        >
          Go to
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
