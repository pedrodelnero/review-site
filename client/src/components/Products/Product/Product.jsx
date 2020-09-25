import React, { useState, useEffect, useContext } from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

import useStyles from './styles.js';
import AuthApi from '../../../api/AuthApi';


const Product = ({ getProducts, product: { author, description, name, _id: id } }) => {
  const { auth } = useContext(AuthApi);
  const [message,setMessage] = useState('');
  const [reviews, setReviews ] = useState([]);
  const [authorized, setAuthorized ] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    const getReview = async () => {
      try {
        const { data } = await axios.get(`/products/${id}/reviews`);
        
        setReviews(data)
      } catch (error) {
        setMessage(error.message);
      }
    }
    
    getReview();

    if (auth) {
      (cookies.get('user').name === author) ? setAuthorized(true) : setAuthorized(false)
    } else {
      setAuthorized(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteProduct = async (id) => {  
    try {
      await axios.delete(`/products/${id}`, {
        headers: {
          'Authorization': 'Bearer ' + cookies.get('token')
        }
      });
        
      getProducts();
    } catch (error) {
      setMessage(error.message);
    }
  }
  const classes = useStyles();

  return (
    <Card key={id} className={classes.root}>
      <CardActionArea component={Link} to={`/${id}/details`}>
        <CardMedia component="img" alt="Contemplative Reptile" height="140" image="https://via.placeholder.com/150" title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" color="textSecondary" >Added by: {author}</Typography>
          <Typography gutterBottom variant="h5" >{name}</Typography>
          <Typography gutterBottom variant="body1" color="textSecondary" component="p">{description}</Typography>
        { reviews.map(({ _id, content }) => <Typography key={_id} variant="body2">{content}</Typography>)}
        </CardContent>
      </CardActionArea>
      {message}
      {authorized &&
        <CardActions>
          <Button component={Link} to={`/form/${id}`}>Edit</Button>
          <Button size="small" color="primary" onClick={() => deleteProduct(id)}>Delete</Button>
        </CardActions>
      }
    </Card>
  );
}

export default Product;