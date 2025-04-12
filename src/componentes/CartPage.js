import React, { useState, useEffect } from 'react';
import { useCart } from '../texto/cartTexto';  // Usamos el hook del carrito
import '../../Carrito.css';  // Estilos del carrito

const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    setLoading(false); // Simula la carga del carrito (en un caso real, podrías esperar una respuesta de una API)
  }, [cart]);

   // Función para formatear los precios
  const formatPrice = (price) => {
    const priceNumber = parseFloat(price.replace(/[^\d.-]/g, '')); // Eliminar símbolos no numéricos
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',  // Usamos pesos colombianos
    }).format(priceNumber);
  };

  return (
    <>
      {loading ? (
        <p>Cargando carrito...</p>
      ) : (
        <div className="cart-page">
          <h1>Productos en el Carrito</h1>

          {/* Si el carrito está vacío */}
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <div className="cart-items">
              {/* Recorremos todos los productos del carrito */}
              {cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="cart-item-image"  // Estilo para la imagen del producto
                  />
                  <h2>{product.title}</h2>
                  <p>
                    Cantidad: {product.quantity}
                    <span style={{ marginLeft: '10px' }}>Precio: {formatPrice(product.price * product.quantity)}</span>
                  </p>
                  <button onClick={() => removeFromCart(product.id)} className="remove-btn">
                    Eliminar del Carrito
                  </button>
                </div>
              ))}
            </div>
          )}
          {cart.length > 0 && (<div className="cart-total"><h3>Total: {formatPrice(getTotalPrice())}</h3></div>)}
        </div>)
      )}
    </>
  );
};

export default CartPage;
