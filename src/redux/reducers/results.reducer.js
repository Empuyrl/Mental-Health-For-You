const depressionResponseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_DEPRESSION_RESPONSE':
        return action.payload;
      default:
        return state;
    }
  };
  
  const anxietyResponseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ANXIETY_RESPONSE':
        return action.payload;
      default:
        return state;
    }
  };
  
  const stressResponseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_STRESS_RESPONSE':
        return action.payload;
      default:
        return state;
    }
  };

  export { depressionResponseReducer, anxietyResponseReducer, stressResponseReducer }; 