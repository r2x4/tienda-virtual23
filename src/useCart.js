import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// El proveedor de contexto que envuelve la aplicación
export const CartProvider = ({ children }) => {
  // Estado para los productos en el carrito, inicializado de forma perezosa
  const [cart, setCart] = useState(() => {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
  });

  //Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {localStorage.setItem('cart', JSON.stringify(cart));}, [cart]);
  
  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      // Si ya existe, incrementa la cantidad
      setCart((prevCart) => prevCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      // Si no existe, agrega el producto con cantidad 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  // Obtener el número total de productos en el carrito
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

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

