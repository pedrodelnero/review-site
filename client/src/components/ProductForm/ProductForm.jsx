import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography} from '@material-ui/core/';
import Cookies from 'universal-cookie';

import useStyles from './styles.js'; 


const ProductForm = ({product}) => {
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const cookies = new Cookies();

  useEffect(() => {
    const getProduct = async () => {
      const { data: { description, name } } = await axios.get(`/products/${id}`);
      
      setName(name);
      setDescription(description);
    }

    if(id) {
      getProduct();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (id) {
      await axios.patch(`/products/${id}`, { name, description }, {
        headers: {
          'Authorization': 'Bearer ' + cookies.get('token')
        }
      });    
    } else {
      await axios.post('/products', { name, description }, {
        headers: {
          'Authorization': 'Bearer ' + cookies.get('token')
        }
      });    
    }

    history.push('/');
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