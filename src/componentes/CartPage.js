import React from 'react';
import { useCart } from '../texto/cartTexto';  // Usamos el hook del carrito

const CartPage = () => {
  const { cart, removeFromCart } = useCart();  // Accedemos al carrito y la función para eliminar productos

  // Función para formatear los precios
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',  // Asegúrate de usar la moneda correcta
    }).format(price);
  };

  return (
    <div className="cart-page">
      <h1>Productos en el Carrito</h1>
      
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img 
                src={product.imgSrc} 
                alt={product.title} 
                className="cart-item-image"  // Puedes agregar clases para estilizar la imagen
              />
              <h2>{product.title}</h2>
              <p>{formatPrice(product.price)}</p> {/* Formato de precio */}
              <button onClick={() => removeFromCart(product.id)} className="remove-btn">
                Eliminar del Carrito
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;




