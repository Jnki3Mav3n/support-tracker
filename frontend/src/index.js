import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore,combineReducers} from '@reduxjs/toolkit'

// How to use WebVitals?
// import reportWebVitals from './reportWebVitals';

// Reducers
import authReducer from './controllers/redux/authSlice'
import bugReducer from './controllers/redux/bugSlice'
import userReducer from './controllers/redux/userSlice'

// Redux configure
const reducer = combineReducers({
  auth:authReducer,
  bug:bugReducer,
  user:userReducer,
})

const store = configureStore({
  reducer
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//  reportWebVitals();
