/* eslint-disable no-unused-vars */
// react and react-dom
import React from 'react'
import ReactDOM from 'react-dom/client'

// pages of contents
import App from './pages/App'

// style
import './index.css';

// report web vitals
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
