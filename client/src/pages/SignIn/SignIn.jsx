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
import Alert from '@material-ui/lab/Alert';
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
  const [isError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) history.push('/');
  }, [isLoggedIn, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(signIn(email, password));
  };

  const doTrial = async (e) => {
    dispatch(signInAsTrial());
  };

  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      {!!errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={
              !isError ? 'Email Address' : 'No account with this email address'
            }
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error={isError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={!isError ? 'Password' : 'Incorrect password'}
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
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
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
            Your Website
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default SignIn;
