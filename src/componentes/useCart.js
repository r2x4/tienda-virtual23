// En 'texto/cartTexto.js'

import { createContext, useContext, useState } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// El proveedor de contexto que envuelve la aplicación
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  // Estado para los productos en el carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  // Obtener el número total de productos en el carrito
  const getCartItemCount = () => cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acceder al carrito
export const useCart = () => useContext(CartContext);
