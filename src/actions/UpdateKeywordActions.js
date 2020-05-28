import { UPDATE_KEYWORD } from './types';
export const updateKeyword = (keyword) => {
  return {
    type: UPDATE_KEYWORD,
    payload: keyword,
  };
};
