import { put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_RESOURCES" action
function* fetchResources() {
  try {
    const response = yield axios.get('/api/resources');
    yield put({ type: 'SET_RESOURCES', payload: response.data });
  } catch (error) {
    console.error('Error fetching resources:', error);
  }
}

// worker Saga: will be fired on "ADD_RESOURCE" action
function* addResource(action) {
  try {
    const user = yield select((state) => state.user);
    if (!user.id) {
      throw new Error('User not authenticated');
    }

    yield axios.post('/api/resources', action.payload);
    yield put({ type: 'FETCH_RESOURCES' });
  } catch (error) {
    console.error('Error adding resource:', error);
  }
}

// worker Saga: will be fired on "DELETE_RESOURCE" action
function* deleteResource(action) {
  try {
    const user = yield select((state) => state.user);
    if (!user.id) {
      throw new Error('User not authenticated');
    }

    yield axios.delete(`/api/resources/${action.payload}`);
    yield put({ type: 'FETCH_RESOURCES' });
  } catch (error) {
    console.error('Error deleting resource:', error);
  }
}

// Watcher Saga
function* resourcesSaga() {
  yield takeLatest('FETCH_RESOURCES', fetchResources);
  yield takeLatest('ADD_RESOURCE', addResource);
  yield takeLatest('DELETE_RESOURCE', deleteResource);
}

export default resourcesSaga;