import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { closeModal, addToWatchList } from '../../actions';

const MovieModal = ({ movie, closeModal, addToWatchList }) => {
  const renderAction = () => {
    return (
      <div>
        <button onClick={closeModal} className="btn">
          close
        </button>
        <button
          className="btn"
          onClick={() => {
            addToWatchList(movie);
            closeModal();
          }}
        >
          watchlist
        </button>
      </div>
    );
  };
  const renderBody = () => {
    return (
      <div className="modal__body">
        <div className="modal__body-image">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.id}
          />
        </div>
        <div>
          <p className="title">{movie.original_title}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Modal
        closeModal={closeModal}
        body={renderBody()}
        action={renderAction()}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.selectMovie,
  };
};

export default connect(mapStateToProps, { closeModal, addToWatchList })(
  MovieModal
);
