import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createDebounce from 'redux-debounced';

// App reducers
import calculatorReducer from './Calculator/redux';


// create a store that has redux-debounced middleware enabled 
const createStoreWithMiddleware = applyMiddleware(
    createDebounce()
  )(createStore);

const rootReducer = combineReducers({ calculator: calculatorReducer });
const store = createStoreWithMiddleware(rootReducer);

const Root = () => <Provider store={store}><App /></Provider>;

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
