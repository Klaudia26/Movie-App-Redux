const tvShowsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TVSHOWS':
      return action.payload;
    default:
      return state;
  }
};

export default tvShowsReducer;
