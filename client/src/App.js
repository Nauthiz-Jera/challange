import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/state/configure-store';
import Home from './app/modules/home/home';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
