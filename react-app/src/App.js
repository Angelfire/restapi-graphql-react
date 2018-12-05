import React, { Component } from 'react';
import RestApi from './RestApi';
import GraphQLApi from './GraphQLApi';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <RestApi />
        <GraphQLApi />
      </div>
    );
  }
}

export default App;
