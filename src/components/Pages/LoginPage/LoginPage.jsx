import React from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './LoginPage.css';

const PaperContainer = styled(Paper)(({ theme }) => ({
  background: `url(https://hbr.org/resources/images/article_assets/2018/10/Oct22_18_862457080.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'white',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 50,
}));

const StyledLink = styled(Typography)(({ theme }) => ({
  color: 'blue',
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
    <PaperContainer elevation={3} className="login-page"> 
      <FormContainer className="login-form">
        <LoginForm />
        <StyledLink variant="subtitle1" onClick={handleRegisterClick}>
        Don't have an account? Register here.
      </StyledLink>
      </FormContainer>
    </PaperContainer>
  );
}

export default LoginPage;
