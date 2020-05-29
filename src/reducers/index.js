import { combineReducers } from 'redux';

// REDUCERS
import apiReducer from './apiReducer';
import keywordReducer from './keywordReducer';
import modalReducer from './modalReduce';
import selectMovieReducer from './selectMovieReducer';
import watchListReducer from './watchListReducer';
import userReducer from './userReducer';
import filterReducer from './filterReducer';

// SELECTORS
import { getUserSelector } from './userReducer';
import { isModalOpenSelector } from './modalReduce';
import { getMovie } from './apiReducer';
import {
  getActiveGenersFilters,
  getActiveLanguagesFilters,
} from './filterReducer';

export default combineReducers({
  dataApi: apiReducer,
  user: userReducer,
  keyword: keywordReducer,
  isModal: modalReducer,
  selectMovie: selectMovieReducer,
  watchList: watchListReducer,
  activeFilters: filterReducer,
});

export {
  getUserSelector,
  isModalOpenSelector,
  getMovie,
  getActiveGenersFilters,
  getActiveLanguagesFilters,
};
