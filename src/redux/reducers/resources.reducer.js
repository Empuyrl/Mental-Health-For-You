const resourcesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_RESOURCES':
      return action.payload;
    case 'ADD_RESOURCE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default resourcesReducer;