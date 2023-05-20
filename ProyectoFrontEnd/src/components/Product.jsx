import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  return (
    <div>
      <div>
        <div id="foto">
          <img className='w-50 ' src={product.image} alt={product.name} />
        </div>
      </div>
      <div>
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
