import React from 'react';
import { connect } from 'react-redux';
import { openModal, selectMovie } from '../../actions';

const MovieItem = ({ movie, openModal, selectMovie }) => {
  return (
    <li
      key={movie.id}
      className="movies-list__item"
      onClick={() => {
        selectMovie(movie);
        openModal();
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.title}</p>
    </li>
  );
};

export default connect(null, { openModal, selectMovie })(MovieItem);
