import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar';
import SideBarFilters from './components/SideBarFilters/SideBarFilters';
import MainPage from './components/MovieViews/MainPage';
import SideBarNews from './components/SideBarNews/SideBarNews';
import './MainStyle.scss';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <TopBar />
        <SideBarFilters />
        <MainPage />
        <SideBarNews />
      </Router>
    );
  }
}

export default App;
