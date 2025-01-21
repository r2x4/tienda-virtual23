import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './texto/cartTexto';  
import Inicio from './componentes/Inicio';
import Productos from './componentes/Productos';
import CrearCuenta from './componentes/CrearCuenta';
import CartPage from './componentes/CartPage';  
import CalzadoDeportivo from './elementos-deportivos/CalzadoDeportivo';
import PrendasDeportivas from './elementos-deportivos/PrendasDeportivas';
import SuplementosDeportivos from './elementos-deportivos/SuplementosDeportivos';
import ArticulosDeportivos from './elementos-deportivos/ArticulosDeportivos';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/calzado-deportivo" element={<CalzadoDeportivo />} />
          <Route path="/prendas-deportivas" element={<PrendasDeportivas />} />
          <Route path="/suplementos-deportivos" element={<SuplementosDeportivos />} />
          <Route path="/articulos-deportivos" element={<ArticulosDeportivos />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
