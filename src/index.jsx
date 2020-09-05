import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HellComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HellComponent />
    <StateFullComponent />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
