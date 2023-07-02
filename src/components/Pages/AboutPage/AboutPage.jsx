import React from 'react';
import JournalButton from '../../JournalModal/JournalButton';
import { Typography, Box, Paper } from '@mui/material';

function AboutPage() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '30vh',
          marginBottom: '2rem',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://s3-prod.adage.com/s3fs-public/20220805_mentalHealthWorkplace_3x2.jpg"
          alt="Mind Matters"
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top' }}
        />
      </Box>
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{
          marginBottom: '2rem',
          color: '#3f51b5',
        }}
      >
        About Mind Matters
        <JournalButton />
        <Typography variant="body1" align="center" fontWeight="bold">
          As the creator of Mind Matters, I bring my own experiences with mental health to this project. I have seen firsthand the transformative power of support and understanding, and how crucial it is to have resources at your fingertips. I believe in the power of connection, empathy, and compassion in fostering mental well-being.
        </Typography>
      </Typography>
      <Paper elevation={3} sx={{ padding: '1.5rem', marginBottom: '1rem' }}>
        <Typography variant="body1" align="center" fontWeight="bold">
          This project is designed to provide a comprehensive set of resources and information to support individuals facing various mental health challenges. Our goal is to offer a range of tools, education, and support to promote mental well-being and address the unique needs of each individual.
        </Typography>
        <Typography variant="body1" align="center" fontWeight="bold">
          We understand that mental health is a crucial aspect of overall well-being, and our project aims to create a safe and inclusive space where individuals can access valuable resources related to depression, stress, anxiety, and other mental health topics. By providing curated links to websites, blogs, forums, and other materials, we strive to empower individuals with knowledge and guidance on their mental health journey.
        </Typography>
        <Typography variant="body1" align="center" fontWeight="bold">
          Additionally, we are committed to suicide prevention and have dedicated a section to provide immediate assistance during emergencies. If you or someone you know is in crisis, please reach out to the provided hotlines for support.
        </Typography>
        <Typography variant="body1" align="center" fontWeight="bold">
          Our journal feature allows users to document their thoughts and feelings privately. Journaling can be a powerful tool for self-reflection, personal growth, and emotional well-being. By clicking the "Journal" button, users can start their journaling practice and explore the benefits it brings to their mental health.
        </Typography>
        <Typography variant="body1" align="center" fontWeight="bold">
          This project is open to all individuals, regardless of their background or circumstances. While the resources are accessible to everyone, registered users have additional benefits, such as the ability to contribute and add new resources to the platform. We believe in the collective effort of building a supportive community and providing a platform for individuals to share their knowledge and experiences.
        </Typography>
        <Typography variant="body1" align="center" fontWeight="bold">
          Thank you for joining us on this journey towards mental well-being. Remember, seeking help and support is a sign of strength, and together, we can create a positive impact on the mental health of individuals worldwide.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ padding: '1.5rem', marginBottom: '1rem' }}>
      <Typography variant="body1" align="center" fontWeight="bold" sx={{ marginBottom: '2rem' }}>
          This project wouldn't have been possible without the power of technology. The technologies and libraries used in this project are:
        </Typography>
        <Typography variant="body1" align="center" fontWeight="bold">
          - React: A JavaScript library for building user interfaces
          <br/>
          - Redux: A predictable state container for JavaScript apps
          <br/>
          - Redux-Saga: An alternative side effect model for Redux apps
          <br/>
          - React-Redux: Official React bindings for Redux
          <br/>
          - Material UI: A popular React UI framework
          <br/>
          - Express: A fast, unopinionated, minimalist web framework for Node.js
          <br/>
          - Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine
          <br/>
          - Passport.js: An authentication middleware for Node.js
          <br/>
          - PG: Non-blocking PostgreSQL client for Node.js
          <br/>
          - Axios: Promise-based HTTP client for the browser and node.js
          <br/>
          - React Router DOM: DOM bindings for React Router
          <br/>
          - JavaScript: The programming language of HTML and the Web
          <br/>
          - Nodemon: A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected
          <br/>
          - Dotenv: Module that loads environment variables from a .env file into process.env
          <br/>
          - Bcryptjs: A library to help you hash passwords
          <br/>
          - CSS: A stylesheet language used for describing the look and formatting of a document written in HTML
        </Typography>
      </Paper>
    </Box>
  );
}

export default AboutPage;