
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
export default store;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import index from '../reducers';
//
// export default function configureStore(initialState) {
//   return createStore(
//     index,
//     initialState,
//     applyMiddleware(thunk),
//   );
// }
