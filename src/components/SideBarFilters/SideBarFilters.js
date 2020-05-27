import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenreMovie } from '../../actions/APIActions';
import { toggleGenreFilter } from '../../actions/FiltersActions';
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
            return (
              <li key={genre.id}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => this.props.toggleGenreFilter(genre.id)}
                    value={this.props.activeFilters.genres.includes(genre.id)}
                  />
                </label>
                {genre.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeFilters: state.activeFilters,
    genreMovie: state.dataApi.genreMovie,
    allMovies: state.dataApi.allMovies,
  };
};
export default connect(mapStateToProps, { fetchGenreMovie, toggleGenreFilter })(
  SideBarFilters
);
