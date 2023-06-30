import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4), // Adjust the margin top value to move the form down
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const InputField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#007bff',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1, 3),
  cursor: 'pointer',
  transition: 'transform 0.3s, background-color 0.3s',
  '&:hover': {
    backgroundColor: '#0056b3',
    transform: 'translateY(-2px)',
  },
}));

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  };

  return (
    <FormContainer>
      <FormTitle variant="h2">Login</FormTitle>
      {errors.loginMessage && (
        <Typography variant="h3" color="error" role="alert">
          {errors.loginMessage}
        </Typography>
      )}
      <InputField
        label="Username"
        variant="outlined"
        value={username}
        required
        onChange={(event) => setUsername(event.target.value)}
      />
      <InputField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)}
      />
      <SubmitButton variant="contained" type="submit">
        Log In
      </SubmitButton>
    </FormContainer>
  );
}

export default LoginForm;
