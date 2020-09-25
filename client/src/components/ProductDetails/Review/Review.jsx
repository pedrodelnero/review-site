import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Card, CardActionArea, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import Cookies from 'universal-cookie';

import AuthApi from '../../../api/AuthApi';
import useStyles from './styles.js'; 


const Review = ({ prodId, getReviews, review: { author, content, _id: id } }) => {
  const { auth } = useContext(AuthApi);
  const [message,setMessage] = useState('');
  const [authorized, setAuthorized ] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    getReviews();

    if (auth) {
      (cookies.get('user').name === author) ? setAuthorized(true) : setAuthorized(false)
    } else {
      setAuthorized(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteReview = async (pID, rID) => {
    try {
      await axios.delete(`/products/${pID}/reviews/${rID}`, {
        headers: {
          'Authorization': 'Bearer ' + cookies.get('token')
        }
      });
        
      getReviews();
    } catch (error) {
      setMessage(error.message);
    }
  }

  
  const classes = useStyles();

  return (
    <Card key={id} className={classes.root}>
      <CardActionArea component={Link} >
        <CardContent>
        <Typography gutterBottom variant="h5" >{content}</Typography>
        <Typography gutterBottom variant="subtitle2" color="textSecondary" >By: {author}</Typography>
        </CardContent>
      </CardActionArea>
      {message}
      {authorized &&
        <CardActions>
          <Button component={Link} to={`/form/${id}`}>Edit</Button>
          <Button size="small" color="primary" onClick={() => deleteReview(prodId, id)}>Delete</Button>
        </CardActions>
      }
    </Card>
  )
}

export default Review;