import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// El proveedor de contexto que envuelve la aplicación
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  // Obtener el número total de productos en el carrito
  const getCartItemCount = () => cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto en cualquier componente
export const useCart = () => useContext(CartContext);



