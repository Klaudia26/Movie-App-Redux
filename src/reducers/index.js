import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import keywordReducer from './keywordReducer';
import modalReducer from './modalReduce';
import selectMovieReducer from './selectMovieReducer';
import watchListReducer from './watchListReducer';
import userReducer from './userReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  dataApi: apiReducer,
  user: userReducer,
  keyword: keywordReducer,
  isModal: modalReducer,
  selectMovie: selectMovieReducer,
  watchList: watchListReducer,
  activeFilters: filterReducer,
});
