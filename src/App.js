import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PuffinTodoPage from './puffinTodoModule/puffinTodoPage/puffinTodoPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PuffinTodoPage />
      </div>
    );
  }
}

export default App;
