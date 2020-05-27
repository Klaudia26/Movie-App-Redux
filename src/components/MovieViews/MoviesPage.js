import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchTopMovies,
  updateKeyword,
  fetchMoviesSearch,
} from '../../actions';
import MovieList from '../MovieList/MovieList';

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
    const { allMovies, topMovies } = this.props;

    let moviesToRender = allMovies;
    const activeFilters = this.props.activeFilters.genres;

    if (isMovies && activeFilters.length) {
      activeFilters.forEach((filterId) => {
        moviesToRender = allMovies.filter(
          (movie) =>
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
        );
      });
    }

    return (
      <div className="main">
        <MovieList
          movies={isMovies ? moviesToRender : topMovies}
          heading={'Movies'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topMovies: state.dataApi.topMovies,
    allMovies: state.dataApi.allMovies,
    keyword: state.keyword,
    activeFilters: state.activeFilters,
  };
};
export default connect(mapStateToProps, {
  fetchTopMovies,
  updateKeyword,
  fetchMoviesSearch,
})(MoviesPage);
