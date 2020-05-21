import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.scss';

const MovieList = ({ movies, heading }) => {
  if (Array.isArray(movies)) {
    return (
      <div>
        <h2>{heading}</h2>
        <ul className="movies-list">
          {movies.map((movie) => {
            return <MovieItem movie={movie} key={movie.id} />;
          })}
        </ul>
      </div>
    );
  } else {
    const topMovies = movies.topMovies;
    const popularMovies = movies.popularMovies;
    return (
      <div>
        <h2>Top Movies</h2>
        <ul className="movies-list slider">
          {topMovies.map((movie) => {
            return <MovieItem movie={movie} key={movie.id} />;
          })}
        </ul>

        <h2>Popular Movies</h2>
        <ul className="movies-list slider">
          {popularMovies.map((movie) => {
            return <MovieItem movie={movie} key={movie.id} />;
          })}
        </ul>
      </div>
    );
  }
};

export default MovieList;
