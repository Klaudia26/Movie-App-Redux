import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <li key={movie.id} className="movies-list__item">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.title}</p>
    </li>
  );
};

export default MovieItem;
