export const toggleGenreFilter = (filterId) => {
  return {
    type: 'TOGGLE_GENRE_FILTER',
    payload: filterId,
  };
};

export const toggleLanguagesFilter = (filterId) => {
  return {
    type: 'TOGGLE_LANGUAGES_FILTER',
    payload: filterId,
  };
};
