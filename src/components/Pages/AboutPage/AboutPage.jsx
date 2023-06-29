import React from 'react';
import JournalButton from '../../JournalModal/JournalButton';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

function AboutPage() {
  const useStyles = makeStyles(() => ({
    container: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    title: {
      marginBottom: '2rem',
      color: '#3f51b5',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    body: {
      fontWeight: 'bold',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>About Page</h1>
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
      <JournalButton />
    </div>
  );
}

export default AboutPage;
