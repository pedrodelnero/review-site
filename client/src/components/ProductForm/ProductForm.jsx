import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles.js';
import { addProduct, updateProduct } from '../../actions/products';

const ProductForm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const product = useSelector((state) => state.products.find((product) => product._id === id));
  const [name, setName] = useState(product?.name || '');
  const [brand, setBrand] = useState(product?.brand || '');
  const [model, setModel] = useState(product?.model || '');
  const [description, setDescription] = useState(product?.description || '');
  const [image, setImage] = useState(product?.image || []);
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    (id) ? dispatch(updateProduct(id, { name, description, brand })) : dispatch(addProduct({ name, brand, model, description, image }))
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" className="title" >{id ? "Edit product" : "Create product"}</Typography>
      <div className={classes.paper}>
        <form className={classes.container} >
        {/* <form className={classes.container} onSubmit={handleSubmit}> */}
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            label="Brand"
            variant="outlined"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          />
          <TextField
            label="Model/Part #"
            variant="outlined"
            value={model}
            onChange={e => setModel(e.target.value)}
          />
          <TextField
            label="Brief Description"
            multiline
            rows={4}
            value={description}
            onChange={e => setDescription(e.target.value)}
            variant="outlined"
          />
          <div className={classes.fileInput}>
            <Typography variant="body1">Add Image</Typography>   
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setImage(base64)} />
          </div>
        </form>
          <Button className={classes.button} onClick={handleSubmit} >{id ? "Edit product" : "Create product"}</Button>
      </div>
    </div>
  )
}

export default ProductForm;
  // https://www.npmjs.com/package/@speechly/react-client
