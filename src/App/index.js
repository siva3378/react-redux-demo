import React, { Component } from 'react';
import Calculator from '../Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
