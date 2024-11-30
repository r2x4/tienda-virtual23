import React from 'react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { CartProvider } from './texto/cartTexto';  // Asegúrate de que el CartProvider esté importado correctamente
import Inicio from './componentes/Inicio';
import Productos from './componentes/Productos';
import CrearCuenta from './componentes/CrearCuenta';
import CartPage from './componentes/CartPage';  // Página del carrito
=======
import { CartProvider } from './texto/cartTexto';  
import Inicio from './componentes/Inicio';
import Productos from './componentes/Productos';
import CrearCuenta from './componentes/CrearCuenta';
import CartPage from './componentes/CartPage';  
>>>>>>> master
import CalzadoDeportivo from './elementos-deportivos/CalzadoDeportivo';
import PrendasDeportivas from './elementos-deportivos/PrendasDeportivas';
import SuplementosDeportivos from './elementos-deportivos/SuplementosDeportivos';
import ArticulosDeportivos from './elementos-deportivos/ArticulosDeportivos';

const App = () => {
  return (
<<<<<<< HEAD
    <CartProvider>  {/* Envuelve la app con CartProvider para acceder al carrito en cualquier componente */}
=======
    <CartProvider>  
>>>>>>> master
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
<<<<<<< HEAD
          <Route path="/carrito" element={<CartPage />} /> {/* Ruta para el carrito */}
=======
          <Route path="/carrito" element={<CartPage />} /> {/*Ruta del carrito */}
>>>>>>> master
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









