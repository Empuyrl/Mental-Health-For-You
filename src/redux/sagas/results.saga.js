import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_DEPRESSION_RESPONSE" actions
function* fetchDepressionResponse() {
  try {
    const response = yield axios.get('/api/results/depression');
    console.log("Server response:", response.data);

    // Dispatch an action to store the fetched depression response in the Redux store
    yield put({ type: 'SET_DEPRESSION_RESPONSE', payload: response.data });
  } catch (error) {
    console.log('Error fetching depression response:', error);
  }
}

// worker Saga: will be fired on "SUBMIT_DEPRESSION_RESPONSE" actions
function* submitDepressionResponse(action) {
  try {
    // Submit the responses to the server and get the calculated score back
    console.log("Saga response:", action.payload);
    const response = yield axios.post('/api/results/depression', action.payload);
    console.log("Server response:", response.data);

    // The server should return the calculated score
    const score = response.data.score;
    const scoreMessage = response.data.scoreMessage; 
    if (typeof score !== 'number') {
      throw new Error('Score received from the server is not a number');
    }

    // Log the calculated score
    console.log(`Total score: ${score}`);

    // Dispatch an action to store the calculated score in the Redux store
    yield put({ type: 'SET_DEPRESSION_SCORE', payload: score });

       // Dispatch an action to store the severity message in the Redux store
       console.log('Dispatching SET_DEPRESSION_SEVERITY with payload:', scoreMessage);
       yield put({ type: 'SET_DEPRESSION_SEVERITY', payload: scoreMessage });

      } catch (error) {
        console.log('Error submitting depression response:', error);
      }
    }


// worker Saga: will be fired on "FETCH_STRESS_RESPONSE" actions
function* fetchStressResponse() {
    try {
      const response = yield axios.get('/api/results/stress');
      console.log("Server response:", response.data);
  
      // Dispatch an action to store the fetched stress response in the Redux store
      yield put({ type: 'SET_STRESS_RESPONSE', payload: response.data });
      yield put({ type: 'SET_DEPRESSION_SEVERITY', payload: response.data.scoreMessage });
    } catch (error) {
      console.log('Error fetching stress response:', error);
    }
  }
  
 // worker Saga: will be fired on "SUBMIT_STRESS_RESPONSE" actions
function* submitStressResponse(action) {
  try {
    const response = yield axios.post('/api/results/stress', action.payload);
    console.log("Server response:", response.data);

    const score = response.data.score;
    const scoreMessage = response.data.scoreMessage; 
    if (typeof score !== 'number') {
      throw new Error('Score received from the server is not a number');
    }

    console.log(`Total score: ${score}`);
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
      console.log("Server response:", response.data);
  
      // Dispatch an action to store the fetched anxiety response in the Redux store
      yield put({ type: 'SET_ANXIETY_RESPONSE', payload: response.data });
    } catch (error) {
      console.log('Error fetching anxiety response:', error);
    }
  }
  
// worker Saga: will be fired on "SUBMIT_ANXIETY_RESPONSE" actions
function* submitAnxietyResponse(action) {
  try {
    const response = yield axios.post('/api/results/anxiety', action.payload);
    console.log("Server response:", response.data);

    const score = response.data.score;
    const scoreMessage = response.data.scoreMessage; 
    if (typeof score !== 'number') {
      throw new Error('Score received from the server is not a number');
    }

    console.log(`Total score: ${score}`);
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
      yield put({ type: 'SET_DEPRESSION_SEVERITY', payload: response.data.scoreMessage });
    } catch (error) {
      console.error('Error fetching depression score:', error);
    }
  }
  
  function* fetchAnxietyScore() {
    try {
      const response = yield axios.get('/api/results/anxiety');
      yield put({ type: 'SET_ANXIETY_SCORE', payload: response.data.score });
      yield put({ type: 'SET_ANXIETY_SEVERITY', payload: response.data.scoreMessage });
    } catch (error) {
      console.error('Error fetching anxiety score:', error);
    }
  }
  
  function* fetchStressScore() {
    try {
      const response = yield axios.get('/api/results/stress');
      yield put({ type: 'SET_STRESS_SCORE', payload: response.data.score });
      yield put({ type: 'SET_STRESS_SEVERITY', payload: response.data.scoreMessage });
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