import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JournalButton from '../../JournalModal/JournalButton';
import { Typography, Box, Paper } from '@mui/material'
import { styled } from '@mui/system';


const Container = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingBottom: '60px',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  border: 'none',
  justifyContent: 'center',
  textAlign: 'center', 
}));

const TranslucentPaper = styled(Paper)(({ theme }) => ({
  background: `linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)`,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center', 
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
  fontSize: '2rem',
  fontWeight: 'bold',
}));

function Results() {
  const depressionScore = useSelector((store) => store.depressionScore);
  const anxietyScore = useSelector((store) => store.anxietyScore);
  const stressScore = useSelector((store) => store.stressScore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_STRESS_SCORE' });
    dispatch({ type: 'FETCH_DEPRESSION_SCORE' });
    dispatch({ type: 'FETCH_ANXIETY_SCORE' });
  }, []);

  const calculateSeverityLevel = (result, type) => {
    // Calculate the severity level based on the result range
    if (type === 'depression') {
      if (result >= 0 && result <= 4) {
        return 'Minimal depression';
      } else if (result >= 5 && result <= 9) {
        return 'Mild depression';
      } else if (result >= 10 && result <= 14) {
        return 'Moderate depression';
      } else if (result >= 15 && result <= 19) {
        return 'Moderately severe depression';
      } else if (result >= 20 && result <= 27) {
        return 'Severe depression';
      } else {
        return 'Invalid Result';
      }
    } else if (type === 'anxiety') {
      if (result >= 0 && result <= 4) {
        return 'Minimal anxiety';
      } else if (result >= 5 && result <= 9) {
        return 'Mild anxiety';
      } else if (result >= 10 && result <= 14) {
        return 'Moderate anxiety';
      } else if (result >= 15 && result <= 21) {
        return 'Severe anxiety';
      } else {
        return 'Invalid Result';
      }
    } else if (type === 'stress') {
      if (result >= 0 && result <= 13) {
        return 'Low stress';
      } else if (result >= 14 && result <= 26) {
        return 'Moderate stress';
      } else if (result >= 27 && result <= 40) {
        return 'High perceived stress';
      } else {
        return 'Invalid Result';
      }
    }
  };
    // Function to return severity level or default message
    const getSeverity = (score, type) => {
      if (score) {
        const severity = calculateSeverityLevel(score, type);
        let disclaimer = '';
        if (['Severe depression', 'Severe anxiety', 'High perceived stress'].includes(severity)) {
          disclaimer = ' - Your score indicates a high level of ' + type + '. Please consult with a healthcare professional immediately.';
        }
        return severity + disclaimer;
      }
      return 'Please fill out the questionnaire';
    };
    

  const depressionSeverity = calculateSeverityLevel(depressionScore, 'depression');
  const anxietySeverity = calculateSeverityLevel(anxietyScore, 'anxiety');
  const stressSeverity = calculateSeverityLevel(stressScore, 'stress');

  return (
    <Container>
      <Title variant="h2">
        Personal Assessment Results
      </Title>

       {/* Render the JournalButton component */}
       <JournalButton />

      {/* Display the depression score and severity level */}
      {depressionScore !== undefined ? (
        <TranslucentPaper>
          <Typography variant="h4">
          Depression Score: {depressionScore || 'Please fill out the questionnaire'}
          </Typography>
          <Typography variant="h5">
          Severity Level: {getSeverity(depressionScore, 'depression')}
          </Typography>
          <img
            src="https://assets-global.website-files.com/5d9f7106c12e74decfc27596/5fd93263e4938ca9ded6f92e_Screen%20Shot%202020-12-15%20at%204.59.38%20PM.png"
            alt="Depression Scoring System"
            style={{ width: '100%', maxWidth: '500px', margin: '1rem 0' }}
          />
          <Typography variant="body1">
            The Patient Health Questionnaire (PHQ-9) is a multipurpose instrument for screening, diagnosing, monitoring and measuring the severity of depression: The PHQ-9 incorporates DSM_IV depression diagnostic criteria with other leading major depressive symptoms into a brief self-report tool.
            The tool rates the frequency of symptoms which factor into scoring, while question 9 screens for sucicide ideation.
            Typically self-administerd, can be done anywhere and only takes a few minutes.
          </Typography>
        </TranslucentPaper>
      ) : (
        <Typography variant="body1">Please fill out the questionnaire</Typography>
      )}

      {/* Display the anxiety score and severity level */}
      {anxietyScore !== undefined ? (
        <TranslucentPaper>
          <Typography variant="h4">
          Anxiety Score: {anxietyScore || 'Not Available'}
          </Typography>
          <Typography variant="h5">
          Severity Level: {getSeverity(anxietyScore, 'anxiety')}
          </Typography>
          <img
            src="https://assets-global.website-files.com/5d9f7106c12e74decfc27596/5fd948e276b1e9b87db88ff1_Screen%20Shot%202020-12-15%20at%206.30.00%20PM.png"
            alt="Anxiety Scoring System"
            style={{ width: '100%', maxWidth: '500px', margin: '1rem 0' }}
          />
          <Typography variant="body1">
            The Generalized Anxiety Disorder Scale (GAD-7) is a self-adminsitered instrument that uses some DSM-V criteria to identify propable cases of General Anxiety Disorder along with measuring anxiety symptom severity.
            It can also be used to screen panic, social anxiety and PTSD. It was modeled after the PHQ for quick and effective care. Measurement is based more on care in order to help personalize the care and treatment decisions.
            Can be self administered, done anywhere, and only takes a few minutes.
          </Typography>
        </TranslucentPaper>
      ) : (
        <Typography variant="body1">Please fill out the questionnaire</Typography>
      )}

      {/* Display the stress score and severity level */}
      {stressScore !== undefined ? (
        <TranslucentPaper>
          <Typography variant="h4">
          Stress Score: {stressScore || 'Not Available'}
          </Typography>
          <Typography variant="h5">
          Severity Level: {getSeverity(stressScore, 'stress')}
          </Typography>
          <img
            src="https://www.researchgate.net/profile/Suresh-Jandrajupalli-2/publication/331897356/figure/tbl1/AS:738518624112642@1553087969531/Perceived-Stress-Scale-PSS-Scores-and-Associated-Levels-of-Health-Concern.png"
            alt="Stress Scoring System"
            style={{ width: '100%', maxWidth: '500px', display: 'block', margin: '1rem auto' }}
          />
          <Typography variant="body1">
            The Percieved Stress Scale(PSS) is a classic stress assessment instrument, was developed in 1983 and remains and is used to help us understand how different situations affect our feelings and our perceived stress.
            Some of the questions seem similiar, but each our different and should be treated as a new problem. The idea of the PSS is to consider what is happening in your life and their level of importance.
            Two individuals could have the same experiences and yet entirely different answers based on their personal perception of the events.
          </Typography>
        </TranslucentPaper>
      ) : (
        <Typography variant="body1">Please fill out the questionnaire</Typography>
      )}

    </Container>
  );
}

export default Results;