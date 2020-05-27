import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
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
    const { movies, topMovies, popularMovies } = this.props;
    const isMovies = movies.length > 0;
    const topAndPopularMovies = {
      topMovies: topMovies || [],
      popularMovies: popularMovies || [],
    };
    let moviesToRender = movies;

    const activeFilters = this.props.activeFilters.genres;

    if (isMovies && activeFilters.length) {
      activeFilters.forEach((filterId) => {
        moviesToRender = movies.filter(
          (movie) =>
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
        );
      });
    }
    return (
      <div className="main">
        <MovieList movies={isMovies ? moviesToRender : topAndPopularMovies} />
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
    activeFilters: state.activeFilters,
  };
};

export default connect(mapStateToProps, {
  fetchTopMovies,
  fetchPopularMovies,
  fetchMultiSearch,
})(MainPage);
