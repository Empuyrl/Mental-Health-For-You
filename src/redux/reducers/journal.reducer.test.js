import journalReducer from '../../redux/reducers/journal.reducer';

describe('journalReducer', () => {
  test('should return the initial state when no action type is specified', () => {
    const initialState = [];
    const action = {};
    const newState = journalReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  test('should return the updated state when action type is "SET_JOURNAL_ENTRIES"', () => {
    const initialState = [];
    const entries = ['Entry 1', 'Entry 2', 'Entry 3'];
    const action = { type: 'SET_JOURNAL_ENTRIES', payload: entries };
    const newState = journalReducer(initialState, action);
    expect(newState).toEqual(entries);
  });
});