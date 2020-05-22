const watchListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_WATCH_LIST':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default watchListReducer;
