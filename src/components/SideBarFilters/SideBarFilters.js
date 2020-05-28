import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenreMovie, fetchLanguages } from '../../actions/APIActions';
import {
  toggleGenreFilter,
  toggleLanguagesFilter,
} from '../../actions/FiltersActions';
import './SideBarFilters.scss';

class SideBarFilters extends Component {
  componentDidMount() {
    this.props.fetchGenreMovie();
    this.props.fetchLanguages();
  }
  render() {
    return (
      <>
        <div className="sideBarFilters">
          <div className="filters-list">
            <h2 className="heading">Genre</h2>
            <div className="scroll-wrapper">
              <ul className="list">
                {this.props.genreMovie.map((genre) => {
                  return (
                    <li key={genre.id} className="list__item">
                      <label className="label">
                        <input
                          type="checkbox"
                          onChange={() =>
                            this.props.toggleGenreFilter(genre.id)
                          }
                          value={this.props.activeFilters.genres.includes(
                            genre.id
                          )}
                          className="input"
                        />
                        <span className="checkmark" />
                        {genre.name}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="filters-list">
            <h2 className="heading">Languages</h2>
            <div className="scroll-wrapper">
              <ul className="list">
                {this.props.languagesMovie.map((language) => {
                  return (
                    <li key={language.id} className="list__item">
                      <label className="label">
                        <input
                          type="checkbox"
                          onChange={() =>
                            this.props.toggleLanguagesFilter(language.iso_639_1)
                          }
                          value={this.props.activeFilters.languages.includes(
                            language.id
                          )}
                          className="input"
                        />
                        <span className="checkmark" />
                        {language.english_name}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
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
