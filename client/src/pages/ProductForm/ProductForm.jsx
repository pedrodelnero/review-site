import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import FileBase64 from 'react-file-base64';
import {
  Box,
  Button,
  Container,
  FormControl,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@material-ui/core/';

import useStyles from './styles.js';
import { addProduct, updateProduct } from '../../actions/product';
import { resizeImageFn } from '../../helper';
import { TabPanel } from '../../components';
import UserContext from '../../context/user';

const ProductForm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product._id === id)
  );
  const {
    user: { isLoggedIn },
  } = useContext(UserContext);
  // const { isLoggedIn } = useSelector((state) => state.user);
  const [name, setName] = useState(product?.name || '');
  const [brand, setBrand] = useState(product?.brand || '');
  const [model, setModel] = useState(product?.model || '');
  const [description, setDescription] = useState(product?.description || '');
  const [image, setImage] = useState(product?.image || null);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (_, newValue) => setValue(newValue);

  if (!isLoggedIn) window.location.href = '/sign-in';

  const handleSubmit = async (e) => {
    let result = image;
    if (image) {
      result = await resizeImageFn(image);
    }

    id
      ? dispatch(updateProduct(id, { name, description, brand }))
      : dispatch(addProduct({ name, brand, model, description, result }));
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
            {/* <FileBase64 multiple={false} onDone={getImage} /> */}
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
          component={Link}
          variant="contained"
          color="secondary"
          to="/"
          className={classes.button}
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
