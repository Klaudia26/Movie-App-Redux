import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org';
const key = process.env.REACT_APP_API_KEY;

export const fetchMultiSearch = (keyword, page = 1) => async (dispatch) => {
  const url = `${baseUrl}/3/search/multi?api_key=${key}&query=${keyword}&page=${page}`;
  const response = await axios.get(url);

  dispatch({
    type: 'FETCH_MOVIES',
    payload: response.data.results,
  });
};

export const fetchMoviesSearch = (keyword, page = 1) => async (dispatch) => {
  const url = `${baseUrl}/3/search/movie?api_key=${key}&query=${keyword}&page=${page}`;
  const response = await axios.get(url);

  dispatch({
    type: 'FETCH_ALL_MOVIES',
    payload: response.data.results,
  });
};

export const fetchTopMovies = () => async (dispatch) => {
  const url = `${baseUrl}/3/movie/top_rated?api_key=${key}&language=en-US&page=1`;
  const response = await axios.get(url);

  dispatch({
    type: 'FETCH_TOP_MOVIES',
    payload: response.data.results,
  });
};

export const fetchPopularMovies = () => async (dispatch) => {
  const url = `${baseUrl}/3/movie/popular?api_key=${key}&language=en-US&page=1`;
  const response = await axios.get(url);

  dispatch({
    type: 'FETCH_POPULAR_MOVIES',
    payload: response.data.results,
  });
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  const url = `${baseUrl}/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;
  const response = await axios.get(url);

  dispatch({
    type: 'FETCH_UPCOMING_MOVIES',
    payload: response.data.results,
  });
};

export const fetchTvPopular = () => async (dispatch) => {
  const url = `${baseUrl}/3/tv/popular?api_key=${key}&language=en-US&page=1`;
  const response = await axios.get(url);

  dispatch({
    type: 'FETCH_TV_POPULAR',
    payload: response.data.results,
  });
};

export const fetchTvShows = (keyword, page = 1) => async (dispatch) => {
  const url = `${baseUrl}/3/search/tv?api_key=${key}&query=${keyword}&page=${page}`;
  const response = await axios.get(url);

  dispatch({
    type: 'FETCH_TVSHOWS',
    payload: response.data.results,
  });
};
