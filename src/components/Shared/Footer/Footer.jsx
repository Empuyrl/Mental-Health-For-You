import React from 'react';
import './Footer.css';
import { Typography, Box } from '@mui/material';

// Generate the style

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '20px',
        textAlign: 'center',
        bottom: 0,
        left: 0,
        backgroundColor: '#f5f5f5', // Use any color that fits your design
      }}
    >
      <Typography variant="body1">&copy;Mind Matters (Contact Information:github/email)</Typography>
    </Box>
  );
}

export default Footer;
