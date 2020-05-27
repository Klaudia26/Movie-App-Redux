import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTvShows, updateKeyword, fetchTvPopular } from '../../actions';
import MovieList from '../MovieList/MovieList';

class TvShowsPage extends Component {
  componentDidMount() {
    if (this.props.tvPopular.length === 0) {
      this.props.fetchTvPopular();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.props.fetchTvShows(this.props.keyword);
    }
  }

  render() {
    const { tvShows } = this.props;
    const isMovies = tvShows.length > 0;

    let moviesToRender = tvShows;
    const activeFilters = this.props.activeFilters.genres;

    if (isMovies && activeFilters.length) {
      activeFilters.forEach((filterId) => {
        moviesToRender = tvShows.filter(
          (movie) =>
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
        );
      });
    }
    return (
      <div className="main">
        <MovieList
          movies={isMovies ? moviesToRender : this.props.tvPopular}
          heading={'TV Shows'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvPopular: state.dataApi.tvPopular,
    tvShows: state.dataApi.tvShows,
    keyword: state.keyword,
    activeFilters: state.activeFilters,
  };
};

export default connect(mapStateToProps, {
  fetchTvShows,
  updateKeyword,
  fetchTvPopular,
})(TvShowsPage);
