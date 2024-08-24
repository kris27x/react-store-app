import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * @description The root of the application, responsible for rendering the App component into the DOM.
 * @function createRoot
 * @param {HTMLElement} rootElement - The DOM element with id 'root' where the React application is mounted.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * @description Function to measure and report web vitals for performance monitoring.
 * @param {Function} reportFunction - A function to log results or send to an analytics endpoint.
 */
reportWebVitals();

/**
 * To start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */