import React from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';

const WatchListPage = ({ movies }) => {
  return (
    <div className="main">
      <h2>WatchList</h2>
      <MovieList movies={movies} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.watchList,
  };
};
export default connect(mapStateToProps)(WatchListPage);
