import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Root from './components/Root.jsx';
import store from './store';

const withProvider = (children) => (
  <Provider store={store}>
    {children}
  </Provider>
);

render(withProvider(
  <Root/>
), document.getElementById('root'));
