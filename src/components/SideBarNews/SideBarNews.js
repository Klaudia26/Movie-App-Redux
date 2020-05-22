import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies } from '../../actions';
import './SideBarNews.scss';
import MovieList from '../MovieList/MovieList';

class SideBarNews extends Component {
  componentDidMount() {
    this.props.fetchUpcomingMovies();
  }

  render() {
    return (
      <div className="sideBarNews">
        <MovieList movies={this.props.upcoming} heading={'Upcoming Movies'} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upcoming: state.dataApi.upcomingMovies,
  };
};
export default connect(mapStateToProps, { fetchUpcomingMovies })(SideBarNews);
