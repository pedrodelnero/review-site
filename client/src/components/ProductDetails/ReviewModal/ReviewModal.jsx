import React, { useState } from 'react';
import { Button, TextField, Typography, Modal, Box } from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating'
import { useDispatch } from 'react-redux';

import  useStyles, { getModalStyle } from './styles.js';
import { addReview } from '../../../actions/reviews';

export default function ReviewModal({ id, isOpen, handleClose }) {
  const classes = useStyles();
  const [content, setContent ] = useState('');
  const [rating, setRating ] = useState('');
  const [modalStyle] = useState(getModalStyle);
  const dispatch = useDispatch();

  const addNewReview = (e) => {
    e.preventDefault();
    dispatch(addReview(id, { rating, content }))
    setContent('');

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
            <Button type="submit" variant="contained" color="primary" onClick={addNewReview} >Add Review</Button>
          </div>
        </div>
    </div>
    </Modal>
  );
}
