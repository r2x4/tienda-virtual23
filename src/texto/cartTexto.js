import React, { createContext, useContext, useState } from 'react';

<<<<<<< HEAD
// Crear el contexto
const CartContext = createContext();

// El proveedor de contexto que envuelve la aplicación
=======
// Crear el contexto del carrito
const CartContext = createContext();

// El proveedor de contexto que envuelve toda la aplicación
>>>>>>> master
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
<<<<<<< HEAD
    setCart(prevCart => [...prevCart, product]);
=======
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // Si el producto ya existe, incrementamos la cantidad
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }  
            : item
        );
      } else {
        // Si no existe, agregamos el producto con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
>>>>>>> master
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
<<<<<<< HEAD
    setCart(cart.filter(product => product.id !== id));
  };

  // Obtener el número total de productos en el carrito
  const getCartItemCount = () => cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemCount }}>
=======
    setCart(cart.filter(product => product.id !== id)); // Filtramos el carrito
  };

  // Función para obtener el total de productos en el carrito
  const getCartItemCount = () => cart.reduce((total, product) => total + product.quantity, 0);

  // Función para calcular el precio total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + (parseFloat(product.price.replace(/[^\d.-]/g, '')) * product.quantity), 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemCount, getTotalPrice }}>
>>>>>>> master
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto en cualquier componente
export const useCart = () => useContext(CartContext);



<<<<<<< HEAD
=======


>>>>>>> master
