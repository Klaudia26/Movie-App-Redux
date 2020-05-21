const selectMovieReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'SELECT_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

export default selectMovieReducer;
