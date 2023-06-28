import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import {
  depressionResponseReducer,
  depressionScoreReducer,
  depressionSeverityReducer,
  anxietyResponseReducer,
  anxietyScoreReducer,
  anxietySeverityReducer,
  stressResponseReducer,
  stressScoreReducer,
  stressSeverityReducer
} from './results.reducer';
import journalReducer from './journal.reducer';
import resourcesReducer from './resources.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors,
  user,
  depressionResponse: depressionResponseReducer,
  depressionScore: depressionScoreReducer,
  depressionSeverity: depressionSeverityReducer,
  anxietyResponse: anxietyResponseReducer,
  anxietyScore: anxietyScoreReducer,
  anxietySeverity: anxietySeverityReducer,
  stressResponse: stressResponseReducer,
  stressScore: stressScoreReducer,
  stressSeverity: stressSeverityReducer,
  journal: journalReducer,
  resources: resourcesReducer,
});


export default rootReducer;




