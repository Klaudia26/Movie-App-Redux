import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import { fetchTopMovies, fetchPopularMovies } from '../actions';
import './MovieViews.scss';

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchTopMovies();
    this.props.fetchPopularMovies();
  }
  render() {
    const isMovies = this.props.movies.length > 0;
    const topAndPopularMovies = {
      topMovies: this.props.topMovies || [],
      popularMovies: this.props.popularMovies || [],
    };
    return (
      <div className="main">
        <MovieList
          movies={isMovies ? this.props.movies : topAndPopularMovies}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('movie', state);
  return {
    movies: state.movies,
    topMovies: state.topMovies,
    popularMovies: state.popularMovies,
  };
};
export default connect(mapStateToProps, { fetchTopMovies, fetchPopularMovies })(
  MainPage
);
