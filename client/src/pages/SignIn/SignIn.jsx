import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  // FormControlLabel,
  // Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { signIn, signInAsTrial } from '../../actions/user';

const SignIn = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const errorMessage = useSelector((state) => state.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState({ email: false, password: false });
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) history.push('/');
  }, [isLoggedIn, history]);

  useEffect(() => {
    if (errorMessage && errorMessage.includes('email')) {
      setIsError({ ...isError, email: true });
    } else if (errorMessage && errorMessage.includes('password')) {
      setIsError({ ...isError, password: true });
    }
  }, [errorMessage, isError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(signIn(email, password));
  };

  const doTrial = () => dispatch(signInAsTrial());

  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            error={isError.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={
              !isError.email
                ? 'Email Address'
                : 'No account with this email address'
            }
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error={isError.password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={!isError.password ? 'Password' : 'Incorrect password'}
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth className={classes.button}>
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        <div>
          <hr height="4px" margin="10px" />
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => doTrial()}
          >
            Use trial account
          </Button>
        </div>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Review Thee
          </Link>
          {' ' + new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default SignIn;
