import { ADD_TO_WATCH_LIST } from './types';
export const addToWatchList = (movie) => {
  return {
    type: ADD_TO_WATCH_LIST,
    payload: movie,
  };
};
