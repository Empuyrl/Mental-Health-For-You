import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_DEPRESSION_RESPONSE" actions
function* fetchDepressionResponse() {
  try {
    const response = yield axios.get('/api/results/depression');

    // Dispatch an action to store the fetched depression response in the Redux store
    yield put({ type: 'SET_DEPRESSION_RESPONSE', payload: response.data });
  } catch (error) {
    console.log('Error fetching depression response:', error);
  }
}

// worker Saga: will be fired on "SUBMIT_DEPRESSION_RESPONSE" actions
function* submitDepressionResponse(action) {
  try {
    yield axios.post('/api/results/depression', action.payload);

    // Dispatch an action to fetch the updated depression response after submitting
    yield put({ type: 'FETCH_DEPRESSION_RESPONSE' });

    // Calculate the score based on the provided score value
    const answers = action.payload.answers;
    const score = answers.reduce((a, b) => a + b, 0);
    console.log(`Total score: ${score}`);

    // Dispatch an action to calculate the score message based on the score
    let scoreMessage;
    if (score < 10) {
      scoreMessage = "Minimal Depression";
    } else if (score < 15) {
      scoreMessage = "Mild Depression";
    } else if (score < 20) {
      scoreMessage = "Moderate Depression";
    } else if (score < 25) {
      scoreMessage = "Moderately Severe Depression";
    } else {
      scoreMessage = "Severe Depression";
    }

    // Dispatch an action to store the score and severity message in the Redux store
    yield put({ type: 'SET_DEPRESSION_SCORE', payload: score });
    yield put({ type: 'SET_DEPRESSION_SEVERITY', payload: scoreMessage });
  } catch (error) {
    console.log('Error submitting depression response:', error);
  }
}

// worker Saga: will be fired on "FETCH_STRESS_RESPONSE" actions
function* fetchStressResponse() {
    try {
      const response = yield axios.get('/api/results/stress');
  
      // Dispatch an action to store the fetched stress response in the Redux store
      yield put({ type: 'SET_STRESS_RESPONSE', payload: response.data });
    } catch (error) {
      console.log('Error fetching stress response:', error);
    }
  }
  
  // worker Saga: will be fired on "SUBMIT_STRESS_RESPONSE" actions
  function* submitStressResponse(action) {
    try {
      yield axios.post('/api/results/stress', action.payload);
  
      // Dispatch an action to fetch the updated stress response after submitting
      yield put({ type: 'FETCH_STRESS_RESPONSE' });

       // Calculate the score based on the provided score value
       const answers = action.payload.answers;
       const score = answers.reduce((a, b) => a + b, 0);
    console.log(`Total score: ${score}`);
  
      // Dispatch an action to calculate the score message based on the score
      let scoreMessage;
      if (action.payload.score < 14) {
        scoreMessage = "Low Stress";
      } else if (action.payload.score < 27) {
        scoreMessage = "Moderate Stress";
      } else {
        scoreMessage = "High Stress";
      }
  
      // Dispatch an action to store the score and severity message in the Redux store
      yield put({ type: 'SET_STRESS_SCORE', payload: score });
      yield put({ type: 'SET_STRESS_SEVERITY', payload: scoreMessage });
    } catch (error) {
      console.log('Error submitting stress response:', error);
    }
  }

  // worker Saga: will be fired on "FETCH_ANXIETY_RESPONSE" actions
function* fetchAnxietyResponse() {
    try {
      const response = yield axios.get('/api/results/anxiety');
  
      // Dispatch an action to store the fetched anxiety response in the Redux store
      yield put({ type: 'SET_ANXIETY_RESPONSE', payload: response.data });
    } catch (error) {
      console.log('Error fetching anxiety response:', error);
    }
  }
  
 // worker Saga: will be fired on "SUBMIT_ANXIETY_RESPONSE" actions
function* submitAnxietyResponse(action) {
  try {
    yield axios.post('/api/results/anxiety', action.payload);

    // Dispatch an action to fetch the updated anxiety response after submitting
    yield put({ type: 'FETCH_ANXIETY_RESPONSE' });

    // Calculate the score based on the provided score value
    const answers = action.payload.answers;
    const score = answers.reduce((a, b) => a + b, 0);
    console.log(`Total score: ${score}`);

    // Dispatch an action to calculate the score message based on the score
    let scoreMessage;
    if (score < 5) {
      scoreMessage = "Minimal Anxiety";
    } else if (score < 10) {
      scoreMessage = "Mild Anxiety";
    } else if (score < 15) {
      scoreMessage = "Moderate Anxiety";
    } else if (score < 20) {
      scoreMessage = "Moderately Severe Anxiety";
    } else {
      scoreMessage = "Severe Anxiety";
    }

    // Dispatch an action to store the score and severity message in the Redux store
    yield put({ type: 'SET_ANXIETY_SCORE', payload: score });
    yield put({ type: 'SET_ANXIETY_SEVERITY', payload: scoreMessage });
  } catch (error) {
    console.log('Error submitting anxiety response:', error);
  }
}

  function* fetchDepressionScore() {
    try {
      const response = yield axios.get('/api/results/depression');
      yield put({ type: 'SET_DEPRESSION_SCORE', payload: response.data.score });
    } catch (error) {
      console.error('Error fetching depression score:', error);
    }
  }
  
  function* fetchAnxietyScore() {
    try {
      const response = yield axios.get('/api/results/anxiety');
      yield put({ type: 'SET_ANXIETY_SCORE', payload: response.data.score });
    } catch (error) {
      console.error('Error fetching anxiety score:', error);
    }
  }
  
  function* fetchStressScore() {
    try {
      const response = yield axios.get('/api/results/stress');
      yield put({ type: 'SET_STRESS_SCORE', payload: response.data.score });
    } catch (error) {
      console.error('Error fetching stress score:', error);
    }
  }

  // Watcher Saga: listens for dispatched actions and calls the corresponding worker saga
  function* resultsSaga() {
    yield all([
      takeLatest('FETCH_DEPRESSION_RESPONSE', fetchDepressionResponse),
      takeLatest('SUBMIT_DEPRESSION_RESPONSE', submitDepressionResponse),
      takeLatest('FETCH_ANXIETY_RESPONSE', fetchAnxietyResponse),
      takeLatest('SUBMIT_ANXIETY_RESPONSE', submitAnxietyResponse),
      takeLatest('FETCH_STRESS_RESPONSE', fetchStressResponse),
      takeLatest('SUBMIT_STRESS_RESPONSE', submitStressResponse),
      takeLatest('FETCH_DEPRESSION_SCORE', fetchDepressionScore),
      takeLatest('FETCH_ANXIETY_SCORE', fetchAnxietyScore),
      takeLatest('FETCH_STRESS_SCORE', fetchStressScore),
    ]);
  }
  
  export default resultsSaga;