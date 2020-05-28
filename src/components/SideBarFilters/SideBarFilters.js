import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenreMovie, fetchLanguages } from '../../actions/APIActions';
import {
  toggleGenreFilter,
  toggleLanguagesFilter,
} from '../../actions/FiltersActions';
import './SideBarFilters.scss';
import FilterList from './FilterList';

class SideBarFilters extends Component {
  componentDidMount() {
    this.props.fetchGenreMovie();
    this.props.fetchLanguages();
  }
  render() {
    return (
      <div className="sideBarFilters">
        <FilterList
          heading={'Genre'}
          filters={this.props.genreMovie}
          toggleFilter={this.props.toggleGenreFilter}
          activeFilters={this.props.activeFilters.genres}
        />

        <FilterList
          heading={'Languages'}
          filters={this.props.languagesMovie}
          toggleFilter={this.props.toggleLanguagesFilter}
          activeFilters={this.props.activeFilters.languages}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeFilters: state.activeFilters,
    genreMovie: state.dataApi.genreMovie,
    allMovies: state.dataApi.allMovies,
    languagesMovie: state.dataApi.languagesMovie,
  };
};
export default connect(mapStateToProps, {
  fetchGenreMovie,
  fetchLanguages,
  toggleGenreFilter,
  toggleLanguagesFilter,
})(SideBarFilters);
