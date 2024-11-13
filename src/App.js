import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Productos from './componentes/Productos';
import CrearCuenta from './componentes/CrearCuenta';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
      </Routes>
    </div>
  );
}

export default App;






