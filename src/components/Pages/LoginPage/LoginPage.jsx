import React from 'react';
import LoginForm from './LoginForm';
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

function LoginPage() {
  const history = useHistory();

  const handleRegisterClick = () => {
    history.push('/registration');
  };

  return (
    <Container>
      <FormContainer>
        <LoginForm />
      </FormContainer>

      <StyledLink variant="subtitle1" onClick={handleRegisterClick}>
        Don't have an account? Register here.
      </StyledLink>
    </Container>
  );
}

export default LoginPage;
