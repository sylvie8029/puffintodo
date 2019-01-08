import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PuffinTodoPage from './puffinTodoModule/puffinTodoPage/puffinTodoPage';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PuffinTodoPage />
        </Provider>
      </div>
    );
  }
}

export default App;
