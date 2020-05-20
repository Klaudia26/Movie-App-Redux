const upcomingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TOP_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export default upcomingMoviesReducer;
