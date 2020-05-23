import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';

import MovieModal from '../Modal/MovieModal';
import {
  fetchTopMovies,
  fetchPopularMovies,
  fetchMultiSearch,
} from '../../actions';
import './MovieViews.scss';

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchTopMovies();
    this.props.fetchPopularMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.props.fetchMultiSearch(this.props.keyword);
    }
  }

  render() {
    const { movies, topMovies, popularMovies, isModal } = this.props;
    const isMovies = movies.length > 0;
    const topAndPopularMovies = {
      topMovies: topMovies || [],
      popularMovies: popularMovies || [],
    };
    return (
      <div className="main">
        <MovieList movies={isMovies ? movies : topAndPopularMovies} />
        {isModal ? <MovieModal /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
    movies: state.dataApi.movies,
    topMovies: state.dataApi.topMovies,
    popularMovies: state.dataApi.popularMovies,
    isModal: state.isModal,
  };
};

export default connect(mapStateToProps, {
  fetchTopMovies,
  fetchPopularMovies,
  fetchMultiSearch,
})(MainPage);
