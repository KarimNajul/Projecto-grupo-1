import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const Product = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='flex flex-col border border-black bg-green-500'>
      <div>
        <div id='image' className='w-full h-64 object-cover'>
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div>
        <h1 className='text-red-600 p-4 font-bold'>{product.name}</h1>
      </div>
      <div className='text-center text-blue-400'>
        <h3>${product.price}</h3>
      </div>
      <div className='text-white text-center drop-shadow-2xl	 
      border border-solid border-2 border-white rounded-md m-3.5 bg-yellow-500 hover:bg-black active:bg-green-800'>
        <button onClick={openModal}>Ver descripción</button>
      </div>
      <div className='text-white text-center drop-shadow-2xl	 
      border border-solid border-2 border-white rounded-md m-3.5 bg-yellow-500 hover:bg-black active:bg-green-800'>
        <button >Agregar al carrito</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Descripción del producto"
        className={'text-red-500 bg-black container mx-auto'}
      >
        <div className=''>
          <h1>{product.name}</h1>
          <div className='w-64 h-64 object-cover'>
          <img src={product.image} alt={product.name} />
          </div>
          <h2>Descripción</h2>
          <p>{product.description}</p>
          <button onClick={closeModal}>Cerrar</button>
          </div>
      </Modal>
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


