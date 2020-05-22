import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTvShows, updateKeyword, fetchTvPopular } from '../../actions';
import MovieList from '../MovieList/MovieList';
import MovieModal from '../Modal/MovieModal';

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
    const isMovies = this.props.tvShows.length > 0;
    return (
      <div className="main">
        <MovieList
          movies={isMovies ? this.props.tvShows : this.props.tvPopular}
          heading={'TV Shows'}
        />
        {this.props.isModal ? <MovieModal /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvPopular: state.dataApi.tvPopular,
    tvShows: state.dataApi.tvShows,
    keyword: state.keyword,
    isModal: state.isModal,
  };
};

export default connect(mapStateToProps, {
  fetchTvShows,
  updateKeyword,
  fetchTvPopular,
})(TvShowsPage);
