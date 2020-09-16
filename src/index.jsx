import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './container/Home/Home';
import * as serviceWorker from './serviceWorker';

const globalState = {
  totalOrder: 0,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case 'PLUS_ORDER':
      return {
        ...state,
        totalOrder: state.totalOrder + 1,
      };
    case 'MINUS_ORDER':
      if (state.totalOrder > 0) {
        return {
          ...state,
          totalOrder: state.totalOrder - 1,
        };
      }
      return state;
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
