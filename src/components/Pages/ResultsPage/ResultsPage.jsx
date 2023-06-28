import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import JournalButton from '../../JournalModal/JournalButton';

function Results() {
  const [depressionScore, setDepressionScore] = useState(null);
  const [anxietyScore, setAnxietyScore] = useState(null);
  const stressScore = useSelector((state) => state.stressScore);
  const stressSeverity = useSelector((state) => state.stressSeverity);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({ type: 'FETCH_STRESS_SCORE' });
  }, [dispatch]);

  const fetchScores = () => {
    // Fetch the scores from the server
    fetch('/api/results/depression')
      .then((response) => response.text())
      .then((data) => {
        setDepressionScore(data.score);
      })
      .catch((error) => {
        console.error('Error fetching depression score:', error);
      });

    fetch('/api/results/anxiety')
      .then((response) => response.text())
      .then((data) => {
        setAnxietyScore(data.score);
      })
      .catch((error) => {
        console.error('Error fetching anxiety score:', error);
      });

    fetch('/api/results/stress')
      .then((response) => response.json())
      .then((data) => {
        setStressScore(data.score);
      })
      .catch((error) => {
        console.error('Error fetching stress score:', error);
      });
  };

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
          <h4>Severity Level: {calculateSeverityLevel(depressionScore, 'depression')}</h4>
        </div>
      ) : (
        <p>Loading depression score...</p>
      )}

      {/* Display the anxiety score and severity level */}
      {anxietyScore !== null ? (
        <div>
          <h3>Anxiety Score: {anxietyScore}</h3>
          <h4>Severity Level: {calculateSeverityLevel(anxietyScore, 'anxiety')}</h4>
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