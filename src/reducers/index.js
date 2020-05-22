import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import keywordReducer from './keywordReducer';
import modalReducer from './modalReduce';
import selectMovieReducer from './selectMovieReducer';
import watchListReducer from './watchListReducer';
import modalUserReducer from './modalUserReducer';

export default combineReducers({
  dataApi: apiReducer,

  keyword: keywordReducer,
  isModal: modalReducer,
  selectMovie: selectMovieReducer,
  watchList: watchListReducer,
  isModalUser: modalUserReducer,
});
