import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar';
import SideBarFilters from './components/SideBarFilters/SideBarFilters';
import MainPage from './components/MovieViews/MainPage';
import SideBarNews from './components/SideBarNews/SideBarNews';
import './MainStyle.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MoviesPage from './components/MovieViews/MoviesPage';
import TvShowsPage from './components/MovieViews/TvShowsPage';

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
          <SideBarNews />
        </>
      </Router>
    );
  }
}

export default App;
