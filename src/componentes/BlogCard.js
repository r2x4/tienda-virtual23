import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BlogCard = ({ imgSrc, title, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-card">
      <img src={imgSrc} alt={title} className="blog-img" />
      <div className="blog-info">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-date">{date}</p>
        <p className={`description ${isExpanded ? 'expanded' : ''}`}>
          {description}
        </p>
        <button className="btn-read-more" onClick={toggleDescription}>
          {isExpanded ? 'Leer menos' : 'Seguir leyendo'}
        </button>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogCard;



