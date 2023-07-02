import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutButton from '../../Shared/LogOutButton/LogOutButton';
import JournalButton from '../../JournalModal/JournalButton';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  padding: theme.spacing(2),
  minHeight: '100vh',
}));

const WelcomeContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const WelcomeText = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: 'black',
}));


const QuizLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: theme.spacing(4),
  '& > *': {
    flex: '0 0 calc(33.33% - 16px)',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    background: 'grey',
    borderRadius: '8px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'black',
    transition: 'background 0.3s',
    '&:hover': {
      background: 'green',
    },
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
}));

const UserPage = () => {
  const user = useSelector((store) => store.user);

  return (
    <Container>
      <WelcomeContainer>
        <WelcomeText variant="h2">Welcome, {user.username}!</WelcomeText>
        <StyledLink to="/profile">
        </StyledLink>
      </WelcomeContainer>
      <QuizLinksContainer>
        <StyledLink to="/depression">
          <img src="https://img.freepik.com/free-vector/depression-concept-illustration_114360-3747.jpg" alt="Depression" />
          <Typography variant="h4">Depression Assessment</Typography>
          <Typography variant="p">A prevalent mental health disorder causing persistent sadness and loss of interest, depression affects nearly 264 million people globally. Remember, it's okay to not be okay; seeking professional help is a sign of strength, not weakness.</Typography>
        </StyledLink>
        <StyledLink to="/anxiety">
          <img src="https://images.everydayhealth.com/images/how-to-cope-with-anxiety-and-depression-722x406.jpg" alt="Anxiety" />
          <Typography variant="h4">Anxiety Assessment</Typography>
          <Typography variant="p">An umbrella term for disorders characterized by excessive worrying and fear, anxiety impacts 284 million individuals worldwide. It's not just "being nervous" — it's a legitimate struggle, and each small step towards managing it is a victory.</Typography>
        </StyledLink>
        <StyledLink to="/stress">
          <img src="https://www.cedars-sinai.org/content/dam/cedars-sinai/blog/2019/07/common-physical-symptoms-of-hidden-stress.jpg" alt="Stress" />
          <Typography variant="h4">Stress Assessment</Typography>
          <Typography variant="p">An almost universal experience affecting mental and physical health, stress can stem from various life events. While often seen as inevitable, managing stress through self-care, mindfulness, and relaxation techniques can significantly improve your quality of life.</Typography>
        </StyledLink>
      </QuizLinksContainer>
      <JournalButton />
      <LogOutButton className="btn" />
    </Container>
  );
}

export default UserPage;
