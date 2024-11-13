import React from 'react';
import ReactDOM from 'react-dom';
import './css/inicio.css'; // Aquí puedes incluir los estilos globales
import App from './App'; // Importamos el componente principal
import { BrowserRouter as Router } from 'react-router-dom'; // Asegúrate de envolver la app en Router

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

