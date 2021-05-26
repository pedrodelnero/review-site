import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  FormControl,
  Paper,
  Tab,
  Tabs,
  TextField,
  Button,
  Typography,
} from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles.js';
import { addProduct, updateProduct } from '../../actions/product';
import { resizeImageFn } from '../../helper';

const ProductForm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product._id === id)
  );
  const { isLoggedIn } = useSelector((state) => state.user);
  const [name, setName] = useState(product?.name || '');
  const [brand, setBrand] = useState(product?.brand || '');
  const [model, setModel] = useState(product?.model || '');
  const [description, setDescription] = useState(product?.description || '');
  const [image, setImage] = useState(product?.image || null);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              // justifyItems: 'space-between',
            }}
            p={3}
          >
            {children}
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!isLoggedIn) window.location.href = '/sign-in';

  const handleSubmit = async (e) => {
    const base64str = await resizeImageFn(image);
    id
      ? dispatch(updateProduct(id, { name, description, brand }))
      : dispatch(addProduct({ name, brand, model, description, base64str }));
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h3" className="title">
        {id ? 'Edit product' : 'Add product'}
      </Typography>
      <Paper elevation={3} className={classes.paper}>
        <form className={classes.container}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Add Image" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <FormControl margin="normal">
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl margin="normal">
              <TextField
                label="Brand"
                variant="outlined"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </FormControl>
            <FormControl margin="normal">
              <TextField
                label="Model/Part #"
                variant="outlined"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </FormControl>
            <FormControl margin="normal">
              <TextField
                label="Brief Description"
                multiline
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="outlined"
              />
            </FormControl>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FormControl>
              <input
                type="file"
                width="48"
                height="48"
                name="photo"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </FormControl>
          </TabPanel>
        </form>
      </Paper>
      <Box className={classes.buttonSection}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          // onClick={handleSubmit}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          {id ? 'Edit' : 'Post'}
        </Button>
      </Box>
    </Container>
  );
};

export default ProductForm;
