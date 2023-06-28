import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';

function Results() {
  const depressionScore = useSelector((state) => state.depressionScore);
  const [depressionSeverity, setDepresionSeverity] = useState('');
  const anxietyScore = useSelector((state) => state.anxietyScore);
  const [anxietySeverity, setAnxietySeverity] = useState('');
  const stressScore = useSelector((state) => state.stressScore);
  const [stressSeverity, setStressSeverity] = useState('');
  const dispatch = useDispatch();


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
      if (result >= 1 && result <= 4) {
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
    <div>
      <h2>Results</h2>

      {/* Display the depression score and severity level */}
      {depressionScore !== null ? (
        <div>
          <h3>Depression Score: {depressionScore}</h3>
          <h4>Severity Level: {depressionSeverity}</h4>
        </div>
      ) : (
        <p>Loading depression score...</p>
      )}

      {/* Display the anxiety score and severity level */}
      {anxietyScore !== null ? (
        <div>
          <h3>Anxiety Score: {anxietyScore}</h3>
          <h4>Severity Level: {anxietySeverity}</h4>
        </div>
      ) : (
        <p>Loading anxiety score...</p>
      )}

      {/* Display the stress score and severity level */}
      {stressScore !== null ? (
        <div>
          <h3>Stress Score: {stressScore}</h3>
          <h4>Severity Level: {stressSeverity}</h4>
        </div>
      ) : (
        <p>Loading stress score...</p>
      )}

      {/* Link to the user's profile */}
      <Link to="/profile">View Profile</Link>

      {/* Render the JournalButton component */}
      <JournalButton />
    </div>
  );
}

export default Results;