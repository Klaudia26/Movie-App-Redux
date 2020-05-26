import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from './components/TopBar/TopBar';
import SideBarFilters from './components/SideBarFilters/SideBarFilters';
import MainPage from './components/MovieViews/MainPage';
import SideBarNews from './components/SideBarNews/SideBarNews';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MoviesPage from './components/MovieViews/MoviesPage';
import TvShowsPage from './components/MovieViews/TvShowsPage';
import WatchListPage from './components/MovieViews/WatchListPage';
import MovieModal from './components/Modal/MovieModal';
import UserForm from './components/UserForm/UserForm';
import SignUpForm from './components/SignupForm/SignupForm';
import requireAuth from './Hoc/requireAuth';
import './MainStyle.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <TopBar />
          <SideBarFilters />
          <Route exact path="/" component={MainPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/tvshows" component={TvShowsPage} />
          <Route path="/watchlist" component={WatchListPage} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/account" component={requireAuth(UserForm)} />
          <SideBarNews />
          {this.props.isModal ? <MovieModal /> : null}
        </>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModal: state.isModal,
  };
};

export default connect(mapStateToProps)(App);
