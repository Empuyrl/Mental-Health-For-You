import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Paper, Container } from '@mui/material';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterPage/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Remember Your Mind Matters');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Container>
      <Paper sx={{mt:5}}>
        <Typography sx={{ mx: 2, my: 4 }} variant="h4">{heading}</Typography>
        <Typography sx={{ mx: 2, my: 4 }} variant="body1">
          Welcome to Mind Matters, 
        </Typography>
        <Typography sx={{ mx: 2, my: 4 }} variant="body2">
          With Mind Matters,
        </Typography>
        <RegisterForm />
        <Typography align="center" variant="h5">Already a Member?</Typography>
        <Button 
          sx={{ 
            mx: 2.9, 
            mt: 1.5, 
            mb: 4, 
            px: 12.2, 
            backgroundColor: 'blue', // Normal color
            '&:hover': {
              backgroundColor:  '#00f46a', // Hover color
            }
          }} 
          variant="contained" 
          onClick={onLogin}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
}

export default LandingPage;