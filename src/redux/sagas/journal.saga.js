import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_JOURNAL_ENTRIES" action
function* fetchJournalEntries() {
  try {
    const response = yield axios.get('/api/journal/entries');
    yield put({ type: 'SET_JOURNAL_ENTRIES', payload: response.data });
  } catch (error) {
    console.error('Error fetching journal entries:', error);
  }
}

// worker Saga: will be fired on "ADD_JOURNAL_ENTRY" action
function* addJournalEntry(action) {
  try {
    yield axios.post('/api/journal/entries', action.payload);
    yield put({ type: 'FETCH_JOURNAL_ENTRIES' });
  } catch (error) {
    console.error('Error adding journal entry:', error);
  }
}


// worker Saga: will be fired on "UPDATE_JOURNAL_ENTRY" action
function* updateJournalEntry(action) {
    try {
      yield axios.put(`/api/journal/entries/${action.payload.id}`, action.payload.data);
      yield put({ type: 'FETCH_JOURNAL_ENTRIES' });
    } catch (error) {
      console.error('Error updating journal entry:', error);
    }
  }
  
  // worker Saga: will be fired on "DELETE_JOURNAL_ENTRY" action
  function* deleteJournalEntry(action) {
    try {
      yield axios.delete(`/api/journal/entries/${action.payload}`);
      yield put({ type: 'FETCH_JOURNAL_ENTRIES' });
    } catch (error) {
      console.error('Error deleting journal entry:', error);
    }
  }
  
  // Watcher Saga
  function* journalSaga() {
    yield takeLatest('FETCH_JOURNAL_ENTRIES', fetchJournalEntries);
    yield takeLatest('ADD_JOURNAL_ENTRY', addJournalEntry);
    yield takeLatest('UPDATE_JOURNAL_ENTRY', updateJournalEntry);
    yield takeLatest('DELETE_JOURNAL_ENTRY', deleteJournalEntry);
  }
  
  export default journalSaga;
