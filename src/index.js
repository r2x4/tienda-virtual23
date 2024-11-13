import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // Aquí agregamos BrowserRouter

ReactDOM.render(
  <BrowserRouter> {/* Un único BrowserRouter aquí */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

