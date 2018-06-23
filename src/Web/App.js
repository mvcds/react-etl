import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pipeline from './Components/Organisms/Pipeline'

import StepFactory from '../Domain/Entities/Step/step.fixture'
import PinelineFactory from '../Domain/Entities/Pipeline/pipeline.fixture'

//  In a real app would come from the server
const pipeline = PinelineFactory.OfEmployees()
  .addStep(StepFactory.SumValue({ column: 'income', value: 5 }))
  .addStep(StepFactory.SumValue({ column: 'income', value: -3 }))

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
