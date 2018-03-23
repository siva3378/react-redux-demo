import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import calculatorReducer from './Calculator/redux';

const rootReducer = combineReducers({ calculator: calculatorReducer });
const store = createStore(rootReducer);

const Root = () => <Provider store={store}><App /></Provider>;

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
