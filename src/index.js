import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter 
    future={{
      v7_startTransition: true, 
      v7_relativeSplatPath: true
    }}
  >
    <App />
  </BrowserRouter>
);



