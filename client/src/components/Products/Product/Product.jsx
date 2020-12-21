import React, { useState, useEffect } from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";

import useStyles from "./styles.js";
import { deleteProduct } from "../../../actions/products";

const Product = ({ product: { author, description, name, _id: id, reviews } }) => {
  const { isLoggedIn } = useSelector(state => state.user)
  const [authorized, setAuthorized] = useState(false);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (isLoggedIn) {
      cookies.get("user").name === author
        ? setAuthorized(true)
        : setAuthorized(false);
    } else {
      setAuthorized(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div key={id} className={classes.root}>
      <Link to={`/${id}/details`} style={{ textDecoration: 'none', color: 'black'}}>
        <img
          alt="Contemplative Reptile"
          height="100"
          src="https://via.placeholder.com/150"
          title="Contemplative Reptile"
          style={{ borderRadius: '30px', margin: '10px 0 3px 0' }}
        />
        <div className={classes.content}>
          <Typography variant="subtitle2"  >Added by: {author}</Typography>
          <Typography variant="p" >{name}</Typography>
          <Typography variant="body1" color="textSecondary" component="body1" >{description}</Typography>
          {/* {reviews.map(({ _id, content }) => (
            <Typography key={_id} variant="body2">
              {content}
            </Typography>
          ))} */}
        </div>
      </Link>
      {/* {authorized && (
        <CardActions>
          <Button component={Link} to={`/form/${id}`}>
            Edit
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => removeProduct(id)}
          >
            Delete
          </Button>
        </CardActions>
      )} */}
    </div>
  );
};

export default Product;

/*
    <Card key={id} className={classes.root}>
      <CardActionArea component={Link} to={`/${id}/details`}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image="https://via.placeholder.com/150"
          title="Contemplative Reptile"
          style={{ borderRadius: '30px', marginBottom: 0 }}
        />
        <CardContent className={classes.content}>
          <Typography variant="subtitle2"  >Added by: {author}</Typography>
          <Typography variant="h5" >{name}</Typography>
          <Typography variant="body1" color="textSecondary" component="p" >{description}</Typography>
          {/{reviews.map(({ _id, content }) => (
            <Typography key={_id} variant="body2">
              {content}
            </Typography>
          ))} }
          </CardContent>
          </CardActionArea>
          {/* {authorized && (
            <CardActions>
              <Button component={Link} to={`/form/${id}`}>
                Edit
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => removeProduct(id)}
              >
                Delete
              </Button>
            </CardActions>
          )} }
        </Card>
        */
