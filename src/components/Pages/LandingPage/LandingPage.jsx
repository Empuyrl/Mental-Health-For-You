import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Box, Container, Grid, useTheme } from '@mui/material';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterPage/RegisterForm';

function LandingPage() {
  const theme = useTheme();
  const [heading, setHeading] = useState('Empower Your Mind, Embrace Your Wellbeing');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        color: theme.palette.common.white,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" fontWeight="bold" textAlign="center" color="text.primary">{heading}</Typography>
        <Typography variant="h5" mt={4} mb={2} textAlign="center" color="text.primary">
          Welcome to Mind Matters, a digital sanctuary dedicated to fostering mental health resilience and self-discovery.
        </Typography>
        <Typography variant="h5" mb={4} textAlign="center" color="text.primary">
          With Mind Matters, you can engage in self-assessment quizzes for emotional well-being, maintain a reflective journal, and discover resources for professional mental health assistance.
        </Typography>
        <Typography variant="h4" fontWeight="bold" textAlign="center" color="text.primary">Begin Your Journey To Wellness</Typography>
        <Box sx={{backgroundColor: 'white', borderRadius: '12px', p: 3, my: 4}}>
          <RegisterForm />
          <Typography variant="h5" textAlign="center" color="text.primary">Already embarked on your journey?</Typography>
          <Button 
            sx={{ 
              mt: 1.5, 
              mb: 4, 
              width: '100%',
              backgroundColor: '#blue', // Normal color
              '&:hover': {
                backgroundColor:   '#00f46a', // Hover color
              }
            }} 
            variant="contained" 
            color="primary"
            onClick={onLogin}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default LandingPage;