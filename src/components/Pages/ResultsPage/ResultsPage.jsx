import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

function Results() {
  const dispatch = useDispatch();

  // Retrieve the test results from the Redux store
  const depressionResult = useSelector((state) => state.depressionResult);
  const anxietyResult = useSelector((state) => state.anxietyResult);
  const stressResult = useSelector((state) => state.stressResult);

  useEffect(() => {
    // Fetch the test results from the server upon component mount
    dispatch({ type: 'FETCH_DEPRESSION_RESPONSE' });
    dispatch({ type: 'FETCH_ANXIETY_RESPONSE' });
    dispatch({ type: 'FETCH_STRESS_RESPONSE' });
  }, [dispatch]);

  // Calculate the severity level based on the result range
  const calculateSeverityLevel = (result, type) => {
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

  // Chart data and options for each questionnaire
  const depressionChartData = {
    labels: ['Depression'],
    datasets: [
      {
        label: 'Depression Result',
        data: [depressionResult],
        backgroundColor: ['#FF6384'],
      },
    ],
  };

  const anxietyChartData = {
    labels: ['Anxiety'],
    datasets: [
      {
        label: 'Anxiety Result',
        data: [anxietyResult],
        backgroundColor: ['#36A2EB'],
      },
    ],
  };

  const stressChartData = {
    labels: ['Stress'],
    datasets: [
      {
        label: 'Stress Result',
        data: [stressResult],
        backgroundColor: ['#FFCE56'],
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 21,
      },
    },
  };

  return (
    <div>
      <h2>Results</h2>

      {/* Display the test results */}
      <h3>Depression Result: {depressionResult}</h3>
      <h4>Severity Level: {calculateSeverityLevel(depressionResult, 'depression')}</h4>

      <h3>Anxiety Result: {anxietyResult}</h3>
      <h4>Severity Level: {calculateSeverityLevel(anxietyResult, 'anxiety')}</h4>

      <h3>Stress Result: {stressResult}</h3>
      <h4>Severity Level: {calculateSeverityLevel(stressResult, 'stress')}</h4>

      {/* Link to the user's profile */}
      <Link to="/profile">View Profile</Link>

      {/* Display the results graphs */}
      <div>
        <h3>Depression Result</h3>
        <Bar data={depressionChartData} options={chartOptions} />
      </div>

      <div>
        <h3>Anxiety Result</h3>
        <Bar data={anxietyChartData} options={chartOptions} />
      </div>

      <div>
        <h3>Stress Result</h3>
        <Bar data={stressChartData} options={chartOptions} />
      </div>

      {/* Implement the journal modal for notes */}
      {/* You can use a modal library like react-modal or create a custom modal component */}
    </div>
  );
}

export default Results;