import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("background_image.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
}));

function RegisterPage() {
  const history = useHistory();

  return (
    <Container>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </Container>
  );
}

export default RegisterPage;
