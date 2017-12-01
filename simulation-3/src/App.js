import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'


import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={Login} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
