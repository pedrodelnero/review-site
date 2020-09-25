import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Modal, Box } from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating'
import Cookies from 'universal-cookie';

import  useStyles, { getModalStyle } from './styles.js'; 

export default function ReviewModal({ id, isOpen, handleClose, getReviews }) {
  const classes = useStyles();
  const [content, setContent ] = useState('');
  const [rating, setRating ] = useState('');
  const [modalStyle] = useState(getModalStyle);
  const cookies = new Cookies();

  const addReview = async (e) => {
    console.log(rating)
    try {
      await axios.post(`/products/${id}/reviews`, { rating, content }, {
        headers: {
          'Authorization': 'Bearer ' + cookies.get('token')
        }
      });
      setContent('');
      getReviews();
        
    } catch (error) {
      console.log(error.response);
    }

    handleClose();
  }

  return (
    <Modal open={isOpen} onClose={handleClose} >
      <div style={modalStyle} className={classes.container}>
        <Typography variant='h4' gutterBottom={true} >Did you like the product?</Typography>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} />
        </Box>
        <div >
            <TextField
              label="Write review"
              multiline
              rows={2}
              value={content}
              onChange={e => setContent(e.target.value)}
              variant="outlined"
            />
          <div className={classes.button}>
            <Button type="submit" variant="contained" color="primary" onClick={addReview} >Add Review</Button>
          </div>
        </div>
    </div>
    </Modal>
  );
}
