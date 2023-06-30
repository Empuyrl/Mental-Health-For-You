import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TextField, Button } from '@mui/material';
import './RegisterPage.css';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="register-form" onSubmit={registerUser}>
      <Typography variant="h6" className="register-form-title">
        Register User
      </Typography>
      {errors.registrationMessage && (
        <Typography variant="h3" color="error" className="registration-form-error">
          {errors.registrationMessage}
        </Typography>
      )}
      <div className="registration-form-container">
        <TextField
          label="Username"
          type="text"
          name="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          variant="outlined"
          size="medium"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          variant="outlined"
          size="medium"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" id='register-btn'>
          Register
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;