import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './public/base'
import './style/base.scss'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);