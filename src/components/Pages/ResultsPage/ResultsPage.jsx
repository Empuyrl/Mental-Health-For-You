import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '2rem',
  },
  title: {
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  link: {
    margin: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'black',
    textDecoration: 'none',
  },
  description: {
    marginBottom: '2rem',
  },
}));

function Results() {
  const depressionScore = useSelector((state) => state.depressionScore);
  const [depressionSeverity, setDepresionSeverity] = useState('');
  const anxietyScore = useSelector((state) => state.anxietyScore);
  const [anxietySeverity, setAnxietySeverity] = useState('');
  const stressScore = useSelector((state) => state.stressScore);
  const [stressSeverity, setStressSeverity] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();


  useEffect(() => {
    dispatch({ type: 'FETCH_STRESS_SCORE' });
    dispatch({ type: 'FETCH_DEPRESSION_SCORE' });
    dispatch({ type: 'FETCH_ANXIETY_SCORE' });
    setDepresionSeverity(calculateSeverityLevel(depressionScore, 'depression'));
    setAnxietySeverity(calculateSeverityLevel(anxietyScore, 'anxiety'));
    setStressSeverity(calculateSeverityLevel(stressScore, 'stress'));
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

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.title}>
      Personal Assessment Results
      </Typography>

      {/* Link to the user's profile */}
      <Link to="/profile" className={classes.link}>
        View Profile
      </Link>

      {/* Display the depression score and severity level */}
      {depressionScore !== null ? (
        <div>
          <Typography variant="h4" className={classes.subtitle}>
            Depression Score: {depressionScore}
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            Severity Level: {depressionSeverity}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Description of the depression questionnaire...
          </Typography>
        </div>
      ) : (
        <Typography variant="body1">Loading depression score...</Typography>
      )}

      {/* Display the anxiety score and severity level */}
      {anxietyScore !== null ? (
        <div>
          <Typography variant="h4" className={classes.subtitle}>
            Anxiety Score: {anxietyScore}
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            Severity Level: {anxietySeverity}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Description of the anxiety questionnaire...
          </Typography>
        </div>
      ) : (
        <Typography variant="body1">Loading anxiety score...</Typography>
      )}

      {/* Display the stress score and severity level */}
      {stressScore !== null ? (
        <div>
          <Typography variant="h4" className={classes.subtitle}>
            Stress Score: {stressScore}
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            Severity Level: {stressSeverity}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Description of the stress questionnaire...
          </Typography>
        </div>
      ) : (
        <Typography variant="body1">Loading stress score...</Typography>
      )}

      {/* Render the JournalButton component */}
      <JournalButton />
    </div>
  );
}

export default Results;