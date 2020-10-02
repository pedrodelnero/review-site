import React, { useState, useEffect, useContext } from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";

import useStyles from "./styles.js";
import AuthApi from "../../../api/AuthApi";
import { deleteProduct } from "../../../actions/products";

const Product = ({ product: { author, description, name, _id: id, reviews } }) => {
  const { auth } = useContext(AuthApi);
  const [authorized, setAuthorized] = useState(false);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (auth) {
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
    <Card key={id} className={classes.root}>
      <CardActionArea component={Link} to={`/${id}/details`}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://via.placeholder.com/150"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" color="textSecondary">
            Added by: {author}
          </Typography>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
          {reviews.map(({ _id, content }) => (
            <Typography key={_id} variant="body2">
              {content}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      {authorized && (
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
      )}
    </Card>
  );
};

export default Product;
