import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { updateUserPassword } from '../../../actions/user';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.error);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      updateUserPassword(currentPassword, newPassword, confirmNewPassword)
    );
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {!!errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <Paper className={classes.paper}>
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
            label={!isError ? 'Current password' : 'Incorrect password'}
            type="password"
            autoComplete="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextField
            error={isError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={!isError ? 'New password' : 'Incorrect password'}
            type="password"
            autoComplete="current-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            error={isError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={!isError ? 'Confirm new password' : 'Incorrect password'}
            type="password"
            autoComplete="current-password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
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
      </Paper>
    </Container>
  );
};

export default ChangePassword;
