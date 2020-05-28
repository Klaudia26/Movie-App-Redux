import { SELECT_MOVIE } from '../actions/types';
const selectMovieReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return action.payload;
    default:
      return state;
  }
};

export default selectMovieReducer;
