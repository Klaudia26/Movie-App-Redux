import * as types from '../actions/types';

const INITIAL_STATE = {
  movies: [],
  topMovies: [],
  popularMovies: [],
  upcomingMovies: [],
  allMovies: [],
  tvShows: [],
  tvPopular: [],
  genreMovie: [],
  languagesMovie: [],
};

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case types.FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case types.FETCH_TOP_MOVIES:
      return {
        ...state,
        topMovies: action.payload,
      };
    case types.FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
      };

    case types.FETCH_ALL_MOVIES:
      return {
        ...state,
        allMovies: action.payload,
      };

    case types.FETCH_TV_POPULAR:
      return {
        ...state,
        tvPopular: action.payload,
      };

    case types.FETCH_TVSHOWS:
      return {
        ...state,
        tvShows: action.payload,
      };

    case types.FETCH_GENRE_MOVIE:
      return {
        ...state,
        genreMovie: action.payload,
      };

    case types.FETCH_LANGUAGES:
      return {
        ...state,
        languagesMovie: action.payload,
      };

    default:
      return state;
  }
};

export default apiReducer;
