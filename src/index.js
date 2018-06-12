import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import store from './store';

const withProvider = (children) => (
  <Provider store={store}>
    {children}
  </Provider>
);

render(withProvider(
  <App/>
), document.getElementById('root'));