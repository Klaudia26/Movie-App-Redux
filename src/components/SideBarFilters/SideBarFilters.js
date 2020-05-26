import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenreMovie } from '../../actions/APIActions';
import './SideBarFilters.scss';

class SideBarFilters extends Component {
  componentDidMount() {
    this.props.fetchGenreMovie();
  }
  render() {
    return (
      <div className="sideBarFilters">
        <h3>Genre</h3>
        <ul>
          {this.props.genreMovie.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('genre', state);
  return {
    genreMovie: state.dataApi.genreMovie,
  };
};
export default connect(mapStateToProps, { fetchGenreMovie })(SideBarFilters);
