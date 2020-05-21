const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export default moviesReducer;
