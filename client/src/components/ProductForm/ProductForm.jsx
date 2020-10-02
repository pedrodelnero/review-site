import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography} from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles.js';
import { addProduct, updateProduct } from '../../actions/products';

const ProductForm = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.find((product) => product._id === id));
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const classes = useStyles();
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    (id) ? dispatch(updateProduct(id, { name, description })) : dispatch(addProduct({ name, description }))

    window.location.href = '/'
  }

  return (
    <div className={classes.container}>
      <Typography variant="h6">{id ? "Edit product" : "Create product"}</Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
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
    </div>
  )
}

export default ProductForm;