// Reset action and reducer for depression
const depressionResponseReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DEPRESSION_RESPONSE':
      console.log('Set received SET_DEPRESSION_RESPONSE action', action.payload)
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
      console.log('Reducer received SET_DEPRESSION_SCORE action', action.payload);
      return action.payload;
    default:
      return state;
  }
};

const depressionSeverityReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_DEPRESSION_SEVERITY':
      console.log('Reducer received SET_DEPRESSION_SEVERITY action', action.payload);
      return action.payload;
    default:
      return state;
  }
};
  
  // Reset action and reducer for anxiety
  const anxietyResponseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ANXIETY_RESPONSE':
        console.log('Set received SET_ANXIETY_RESPONSE action', action.payload)
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
        console.log('Reducer received SET_ANXIETY_SCORE action', action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  
  const anxietySeverityReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_ANXIETY_SEVERITY':
        console.log('Reducer received SET_ANXIETY_SEVERITY action', action.payload);
        return action.payload;
      default:
        return state;
    }
  };

  // Reset action and reducer for stress
  const stressResponseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_STRESS_RESPONSE':
        console.log('Set received SET_STRESS_RESPONSE action', action.payload)
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
        console.log('Reducer received SET_STRESS_SCORE action', action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  
  const stressSeverityReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_STRESS_SEVERITY':
        console.log('Reducer received SET_STRESS_SEVERITY action', action.payload);
        return action.payload;
      default:
        return state;
    }
  };

  export { depressionResponseReducer, depressionScoreReducer, depressionSeverityReducer, anxietyResponseReducer, anxietyScoreReducer, anxietySeverityReducer, stressResponseReducer, stressScoreReducer, stressSeverityReducer,}; 