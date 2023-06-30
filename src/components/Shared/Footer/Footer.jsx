import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Generate the style

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#f2f2f2',
        padding: '10px',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Typography variant="subtitle1">Mind Matters</Typography>
      <Typography variant="subtitle1">©️ Jack Blonigen</Typography>
      <Typography variant="subtitle1">jack.je.blonigen@gmail.com</Typography>
      <div>
        <Link href="https://github.com/empuyrl" target="_blank" rel="noopener" color="inherit">
          <GitHubIcon sx={{ mr: 2 }} />
        </Link>
        <Link href="https://www.linkedin.com/in/jack-blonigen/" target="_blank" rel="noopener" color="inherit">
          <LinkedInIcon />
        </Link>
      </div>
    </Box>
  );
    }

    export default Footer;