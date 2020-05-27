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

    default:
      return state;
  }
};

export default filterReducer;
