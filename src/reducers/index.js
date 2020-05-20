import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import topMoviesReducer from './topMoviesReducer';
import popularMoviesReducer from './popularMoviesReducer';
import upcomingMoviesReducer from './upcomingMoviesReducer';

export default combineReducers({
  movies: moviesReducer,
  topMovies: topMoviesReducer,
  popularMovies: popularMoviesReducer,
  upcomingMovies: upcomingMoviesReducer,
});
