import React, { Component } from 'react';
import Sidebar from './sidebar'
import Main from './main'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
