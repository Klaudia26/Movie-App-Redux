import { combineReducers } from 'redux';
import multiReducer from './multiReducer';
import topMoviesReducer from './topMoviesReducer';
import popularMoviesReducer from './popularMoviesReducer';
import upcomingMoviesReducer from './upcomingMoviesReducer';
import moviesReducer from './moviesReducer';
import keywordReducer from './keywordReducer';
import tvShowsReducer from './tvShowsReducer';
import tvPopularReducer from './tvPopularReducer';
import modalReducer from './modalReduce';
import selectMovieReducer from './selectMovieReducer';

export default combineReducers({
  movies: multiReducer,
  topMovies: topMoviesReducer,
  popularMovies: popularMoviesReducer,
  upcomingMovies: upcomingMoviesReducer,
  allMovies: moviesReducer,
  keyword: keywordReducer,
  tvShows: tvShowsReducer,
  tvPopular: tvPopularReducer,
  isModal: modalReducer,
  selectMovie: selectMovieReducer,
});
