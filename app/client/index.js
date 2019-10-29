import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { initialState } from './reducers/initialState';
import history from './history';
import 'antd/dist/antd.css';
import './styles/styles.css';
import App from './Components/App.js';

const store = configureStore(initialState);

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('app')
)
