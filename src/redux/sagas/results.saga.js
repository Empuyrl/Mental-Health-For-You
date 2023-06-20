import { put, takeLatest } from 'redux-saga/effects';
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
    } catch (error) {
      console.log('Error submitting anxiety response:', error);
    }
  }

  // Watcher Saga: listens for dispatched actions and calls the corresponding worker saga
function* resultsSaga() {
    yield takeLatest('FETCH_DEPRESSION_RESPONSE', fetchDepressionResponse);
    yield takeLatest('SUBMIT_DEPRESSION_RESPONSE', submitDepressionResponse);
    yield takeLatest('FETCH_ANXIETY_RESPONSE', fetchAnxietyResponse);
    yield takeLatest('SUBMIT_ANXIETY_RESPONSE', submitAnxietyResponse);
    yield takeLatest('FETCH_STRESS_RESPONSE', fetchStressResponse);
    yield takeLatest('SUBMIT_STRESS_RESPONSE', submitStressResponse);
  }
  
  export default resultsSaga;