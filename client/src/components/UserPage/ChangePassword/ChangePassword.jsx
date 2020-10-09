import React, { useState, useContext } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Cookies from 'universal-cookie';
import axios from 'axios';

import useStyles from './styles';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = cookies.get("token");
    try {
      const { data } = await axios.patch('/users/me', { currentPassword, newPassword, confirmNewPassword }, {
        headers: { Authorization: `Bearer ${token}` },
      }); 

      // setAuth(true);
      window.location.href = '/user'
    } catch (error) {
      setIsError(error.response.data.message); 
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
        <Typography component="h1" variant="h5">
          Change password
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            error={isError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={!isError ? "Current password" : "Incorrect password"}
            type="password"
            id="password"
            autoComplete="current-password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
          <TextField
            error={isError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={!isError ? "New password" : "Incorrect password"}
            type="password"
            id="password"
            autoComplete="current-password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <TextField
            error={isError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={!isError ? "Confirm new password" : "Incorrect password"}
            type="password"
            id="password"
            autoComplete="current-password"
            value={confirmNewPassword}
            onChange={e => setConfirmNewPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Change password
          </Button>
        </form>
      </div>
      <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
      </Box>
    </Container>
  );
}

export default ChangePassword;