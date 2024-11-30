import React, { createContext, useContext, useState } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// El proveedor de contexto que envuelve la aplicación
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado para los productos en el carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      // Si ya existe, puedes actualizar la cantidad o evitar agregarlo nuevamente
      // Ejemplo: si solo quieres permitir un único producto por ID, no hagas nada
      return;
    }

    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  // Obtener el número total de productos en el carrito
  const getCartItemCount = () => cart.length;

  // Función para calcular el total del carrito (precio total)
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '').replace(',', '')), 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemCount, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acceder al carrito
export const useCart = () => useContext(CartContext);

