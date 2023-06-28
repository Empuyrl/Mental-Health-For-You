// Reset action and reducer for depression
const depressionResponseReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DEPRESSION_RESPONSE':
      return action.payload;
    case 'RESET_DEPRESSION_RESPONSE':
      return {};
    // ...other cases...
    default:
      return state;
  }
};

const depressionScoreReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_DEPRESSION_SCORE':
      return action.payload;
    default:
      return state;
  }
};

const depressionSeverityReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_DEPRESSION_SEVERITY':
      return action.payload;
    default:
      return state;
  }
};
  
  // Reset action and reducer for anxiety
  const anxietyResponseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ANXIETY_RESPONSE':
        return action.payload;
      case 'RESET_ANXIETY_RESPONSE':
        return {};
      // ...other cases...
      default:
        return state;
    }
  };
  
  const anxietyScoreReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_ANXIETY_SCORE':
        return action.payload;
      default:
        return state;
    }
  };
  
  const anxietySeverityReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_ANXIETY_SEVERITY':
        return action.payload;
      default:
        return state;
    }
  };

  // Reset action and reducer for stress
  const stressResponseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_STRESS_RESPONSE':
        return action.payload;
      case 'RESET_STRESS_RESPONSE':
        return {};
      // ...other cases...
      default:
        return state;
    }
  };
  
  const stressScoreReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_STRESS_SCORE':
        return action.payload;
      default:
        return state;
    }
  };
  
  const stressSeverityReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_STRESS_SEVERITY':
        return action.payload;
      default:
        return state;
    }
  };

  export { depressionResponseReducer, depressionScoreReducer, depressionSeverityReducer, anxietyResponseReducer, anxietyScoreReducer, anxietySeverityReducer, stressResponseReducer, stressScoreReducer, stressSeverityReducer,}; 