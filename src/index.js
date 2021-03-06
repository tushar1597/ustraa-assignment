import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'; 

import App from './App'
import * as serviceWorker from './serviceWorker';

import configureStore from './store';

const initialState = global.window && global.window.__INITIAL_STATE__ 
const store = configureStore(initialState);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
