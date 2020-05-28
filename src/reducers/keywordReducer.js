import { UPDATE_KEYWORD } from '../actions/types';
const keywordReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_KEYWORD:
      return action.payload;
    default:
      return state;
  }
};

export default keywordReducer;
