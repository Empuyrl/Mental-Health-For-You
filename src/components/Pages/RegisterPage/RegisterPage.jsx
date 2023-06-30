import React from 'react';
import RegisterForm from './RegisterForm';
import { useHistory } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  background: `url(https://hbr.org/resources/images/article_assets/2018/10/Oct22_18_862457080.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'white',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#007bff',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1, 3),
  marginTop: theme.spacing(2),
  cursor: 'pointer',
  transition: 'transform 0.3s, background-color 0.3s',
  '&:hover': {
    backgroundColor: '#0056b3',
    transform: 'translateY(-2px)',
  },
}));

const StyledLink = styled(Typography)(({ theme }) => ({
  color: '#00FF00',
  fontWeight: 'bold',
  marginTop: theme.spacing(2),
  cursor: 'pointer',
  transition: 'transform 0.3s, color 0.3s',
  '&:hover': {
    color: '#00CC00',
    transform: 'translateY(-2px)',
  },
}));

function RegisterPage() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <Container>
      <FormContainer>
        <RegisterForm />

      </FormContainer>

      <StyledLink variant="subtitle1" onClick={handleLoginClick}>
        Already have an account? Login here.
      </StyledLink>
    </Container>
  );
}

export default RegisterPage;
