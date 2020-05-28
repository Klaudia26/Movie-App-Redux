const INIT_STATE = {
  genres: [],
  languages: [],
};

const filterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_GENRE_FILTER':
      const filterId = action.payload;
      const isActiveFilters = state.genres.includes(filterId);
      let newFilters;

      if (isActiveFilters) {
        newFilters = state.genres.filter((genreId) => genreId !== filterId);
      } else {
        newFilters = [...state.genres, action.payload];
      }

      return {
        ...state,
        genres: newFilters,
      };

    case 'TOGGLE_LANGUAGES_FILTER':
      const filterLangId = action.payload;
      const isActiveFiltersLang = state.languages.includes(filterLangId);
      let newFiltersLang;

      if (isActiveFiltersLang) {
        newFiltersLang = state.languages.filter(
          (language) => language !== filterLangId
        );
      } else {
        newFiltersLang = [...state.languages, action.payload];
      }

      return {
        ...state,
        languages: newFiltersLang,
      };

    default:
      return state;
  }
};

export default filterReducer;
