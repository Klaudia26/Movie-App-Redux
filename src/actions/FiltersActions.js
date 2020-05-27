export const toggleGenreFilter = (filterId) => {
  return {
    type: 'TOGGLE_GENRE_FILTER',
    payload: filterId,
  };
};
