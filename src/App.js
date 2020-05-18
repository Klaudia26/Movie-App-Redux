import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar';
import SideBarFilters from './components/SideBarFilters/SideBarFilters';
import Main from './components/Main/Main';
import SideBarNews from './components/SideBarNews/SideBarNews';
import './MainStyle.scss';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SideBarFilters />
        <Main />
        <SideBarNews />
      </div>
    );
  }
}

export default App;
