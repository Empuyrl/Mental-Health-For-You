import React from 'react';
import RegisterForm from './RegisterForm';
import { useHistory } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './RegisterPage.css';

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

function RegisterPage() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <PaperContainer elevation={3} className="register-page"> 
      <FormContainer className="register-form">
        <RegisterForm />
      <StyledLink variant="subtitle1" onClick={handleLoginClick}>
        Already have an account? Login here.
      </StyledLink>
      </FormContainer>
    </PaperContainer>
  );
}

export default RegisterPage; 

