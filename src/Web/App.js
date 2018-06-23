import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pipeline from './Components/Organisms/Pipeline'

import PinelineFactory from '../Domain/Entities/Pipeline/pipeline.fixture'

//  In a real app would come from the server
const pipeline = PinelineFactory.OfEmployees()

class App extends Component {
  render() {
    return (
      <div className="app">
        <Pipeline model={pipeline} />
      </div>
    );
  }
}

export default App;
