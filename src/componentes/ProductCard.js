import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ imgSrc, title, price, discount, noCartIcon }) => {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      {price && <p>{price}</p>}
      {discount && <span className="discount-badge">{discount}</span>}
      
     
      {!noCartIcon && (
        <button className="add-to-cart">
          <i className="fas fa-shopping-cart"></i> Agregar al carrito
        </button>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  discount: PropTypes.string,
  noCartIcon: PropTypes.bool
};

export default ProductCard;


