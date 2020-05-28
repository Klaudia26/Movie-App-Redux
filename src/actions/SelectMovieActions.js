import { SELECT_MOVIE } from './types';
export const selectMovie = (movie) => {
  return {
    type: SELECT_MOVIE,
    payload: movie,
  };
};
