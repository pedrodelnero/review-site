import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Paper, Typography} from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles.js';
import { addProduct, updateProduct } from '../../actions/products';

const ProductForm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const product = useSelector((state) => state.products.find((product) => product._id === id));
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    (id) ? dispatch(updateProduct(id, { name, description })) : dispatch(addProduct({ name, description }))

    window.location.href = '/'
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" style={{ color: '#7188B9', fontWeight: 400 }}>{id ? "Edit product" : "Create product"}</Typography>
      <Paper className={classes.paper}>
        <form className={classes.container} onSubmit={handleSubmit}>
          <TextField
              label="Add Product Name..."
              variant="outlined"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          <TextField
              label="Add Product Description..."
              multiline
              rows={4}
              value={description}
              onChange={e => setDescription(e.target.value)}
              variant="outlined"
            />
          <Button type="submit" variant="contained" color="primary">{id ? "Edit product" : "Create product"}</Button>
        </form>

      </Paper>
    </div>
  )
}

export default ProductForm;