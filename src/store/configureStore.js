
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer, /* preloadedState, */
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ), // when can not function as 2nd argument if you have 3 arguments, assumes initalState
);
/* eslint-enable */
export default store;
