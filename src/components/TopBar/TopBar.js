import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchMovies } from '../actions';
import './TopBar.scss';

class TopBar extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    if (e.target.value) {
      this.props.fetchSearchMovies(e.target.value);
    }
  };
  render() {
    return (
      <div className="topBar">
        <div className="container">
          <div>logo</div>
          <div className="serach">
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div>navigation</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.movies);
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { fetchSearchMovies })(TopBar);
