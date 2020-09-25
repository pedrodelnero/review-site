import React, { useState, useContext } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import Cookies from 'universal-cookie';

import useStyles from './styles';
import AuthApi from '../../api/AuthApi';;

const SignUp = ({ history }) => {
  const { setAuth } = useContext(AuthApi)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
  
  const [errorMessages, setErrorMessages] = useState("");

  // Need error handling for emails already in use
//   How to find display error message from API in reactjs
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const { data } = await axios.post('/users', { name, email, password });
      
      cookies.set('token', data.token, { path: '/' });
      cookies.set('user', data.user, { path: '/' });
      setAuth(true)
  
      history.push('/');
      window.location.reload();
    } catch(error) {
        if(error.response.data.message === "User Already Exists") {
            alert("User Already Exists");
            return;
        }
        const err = Object.values(error.response.data.errors);
        
        // after user creation the header is not showing
        // validation for email already exists
        // validation for sign up (name)
        // validation for login (password, email...)

        const errors = err.reduce((acc, { properties: { path: name, message }}) => {
            acc[name] = message;

            return acc;
        }, {});

        setErrorMessages(errors);
    }
  }

  
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign up</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!errorMessages.email}
                helperText={errorMessages.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!errorMessages.password}
                helperText={errorMessages.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Product Review Site
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}

export default SignUp;
