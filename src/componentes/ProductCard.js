<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../texto/cartTexto';  // Importamos el hook

const ProductCard = ({ imgSrc, title, price, discount, noCartIcon, id }) => {
  const { addToCart } = useCart();  // Obtenemos la función addToCart desde el contexto

  // Función para manejar el clic y agregar el producto al carrito
  const handleAddToCart = () => {
    const product = { id, title, price, imgSrc, discount };  // Producto con todos los detalles
=======
// src/componentes/ProductCard.js

import React from 'react';
import { useCart } from '../texto/cartTexto';  // Usamos el hook del carrito

const ProductCard = ({ imgSrc, title, price, discount, noCartIcon, id }) => {
  const { addToCart } = useCart();  // Función para agregar productos al carrito

  // Función para manejar el clic y agregar el producto al carrito
  const handleAddToCart = () => {
    const product = { id, title, price, imgSrc, discount };  // Creamos un objeto con la info del producto
>>>>>>> master
    addToCart(product);  // Llamamos a la función addToCart
  };

  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
<<<<<<< HEAD
      {price && <p>{price}</p>}
      {discount && <span className="discount-badge">{discount}</span>}
      
      {/* Mostrar el botón para agregar al carrito solo si no se pasa `noCartIcon` */}
      {!noCartIcon && (
        <button className="add-to-cart" onClick={handleAddToCart}>
=======

      {/* Mostrar el precio si está disponible */}
      {price && <p>{price}</p>}

      {/* Mostrar el descuento si está disponible */}
      {discount && <span className="discount-badge">{discount}</span>}

      {/* Mostrar el botón de agregar al carrito solo si no se pasa `noCartIcon` */}
      {!noCartIcon && (
        <button 
          className="add-to-cart" 
          onClick={handleAddToCart} 
          aria-label="Agregar al carrito"
        >
>>>>>>> master
          <i className="fas fa-shopping-cart"></i> Agregar al carrito
        </button>
      )}
    </div>
  );
};

<<<<<<< HEAD
ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  discount: PropTypes.string,
  noCartIcon: PropTypes.bool,
  id: PropTypes.string.isRequired, // Aseguramos de que cada producto tenga un id único
};

=======
>>>>>>> master
export default ProductCard;









<<<<<<< HEAD
=======




>>>>>>> master
