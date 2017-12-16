import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import AppRoutes from './components/App/AppRoutes';
import store from './store/configureStore';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


console.log(store.getState());
render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root'),
);
