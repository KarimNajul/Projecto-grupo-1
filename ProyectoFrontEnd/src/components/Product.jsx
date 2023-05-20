import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  return (
    <div className='flex flex-col border border-black bg-green-500'>
      <div>
        <div id='image' className='w-full h-64 object-cover'>
          <img  src={product.image} alt={product.name} />
        </div>
      </div>
      <div>
        <h1 className='text-red-600 p-4 font-bold'>{product.name}</h1>
        <h2 className='text-red-500 p-4 underline'>{product.description}</h2>
      </div>
      <div className='text-center text-blue-400'>
        <h3>${product.price}</h3>
      </div>
      <div className='text-white text-center drop-shadow-2xl	 
      border border-white m-3.5 bg-yellow-500 hover:bg-black active:bg-green-800'>
        <button>Compra gil</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
