import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateKeyword } from '../actions';
import { NavLink } from 'react-router-dom';
import { GoDeviceCameraVideo } from 'react-icons/go';
import './TopBar.scss';

class TopBar extends Component {
  handleChange = (e) => {
    this.props.updateKeyword(e.target.value);
  };
  render() {
    return (
      <div className="topBar">
        <div className="container">
          <NavLink to="/">
            <div className="logo">
              <GoDeviceCameraVideo />
            </div>
          </NavLink>
          <div>
            <input
              type="text"
              value={this.props.keyword}
              onChange={this.handleChange}
              placeholder="Search any movies or tv shows"
              className="search"
            />
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/movies" activeClassName="active">
                  Movies
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/tvshows">TV Shows</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/watchlist">Watchlist</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    keyword: state.keyword,
  };
};

export default connect(mapStateToProps, { updateKeyword })(TopBar);
