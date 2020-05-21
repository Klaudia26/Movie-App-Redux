import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopMovies, updateKeyword, fetchMoviesSearch } from '../actions';
import MovieList from '../MovieList/MovieList';
import Modal from '../Modal/Modal';

class MoviesPage extends Component {
  componentDidMount() {
    if (this.props.topMovies.length === 0) {
      this.props.fetchTopMovies();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.props.fetchMoviesSearch(this.props.keyword);
    }
  }

  render() {
    const isMovies = this.props.allMovies.length > 0;
    const { allMovies, topMovies, isModal } = this.props;
    return (
      <div className="main">
        <MovieList
          movies={isMovies ? allMovies : topMovies}
          heading={'Movies'}
        />
        {isModal ? <Modal /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    topMovies: state.topMovies,
    allMovies: state.allMovies,
    keyword: state.keyword,
    isModal: state.isModal,
  };
};
export default connect(mapStateToProps, {
  fetchTopMovies,
  updateKeyword,
  fetchMoviesSearch,
})(MoviesPage);