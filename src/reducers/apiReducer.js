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
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'FETCH_POPULAR_MOVIES':
      return {
        ...state,
        popularMovies: action.payload,
      };
    case 'FETCH_TOP_MOVIES':
      return {
        ...state,
        topMovies: action.payload,
      };
    case 'FETCH_UPCOMING_MOVIES':
      return {
        ...state,
        upcomingMovies: action.payload,
      };

    case 'FETCH_ALL_MOVIES':
      return {
        ...state,
        allMovies: action.payload,
      };

    case 'FETCH_TV_POPULAR':
      return {
        ...state,
        tvPopular: action.payload,
      };

    case 'FETCH_TVSHOWS':
      return {
        ...state,
        tvShows: action.payload,
      };

    case 'FETCH_GENRE_MOVIE':
      return {
        ...state,
        genreMovie: action.payload,
      };

    case 'FETCH_LANGUAGES':
      return {
        ...state,
        languagesMovie: action.payload,
      };

    default:
      return state;
  }
};

export default apiReducer;
