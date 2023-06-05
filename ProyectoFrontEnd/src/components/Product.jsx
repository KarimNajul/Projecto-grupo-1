import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import CartContext from "../context/CartContext";

Modal.setAppElement('#root');


const Product = ({ product }) => {
  const { addToCart } = useContext (CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalStyle = {
    content: {
      width: "50%",
      height: "",
      margin: "auto",
    },
  };

  return (
    <div className="flex flex-col rounded-lg border-solid border-2 border-white bg-gray-400 relative">
      <div>
        <div id="image" className="w-full mb-4 border rounded-lg">
          <img
            className="object-cover h-64 w-full"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      <div>
        <h1 className="text-black italic p-4 font-bold">{product.name}</h1>
      </div>
      <div className="text-center text-black italic ">
        <h3>${product.price}</h3>
      </div>
      <div
        className="text-white text-center italic drop-shadow-2xl	 
      border-solid border-2 border-white rounded-md m-3.5 bg-gray-700 hover:bg-black active:bg-green-800"
      >
        <button onClick={openModal}>Ver descripción</button>
      </div>
      <div
        className="text-white text-center italic drop-shadow-2xl	 
      border-solid border-2 border-white rounded-md m-3.5 bg-gray-700 hover:bg-black active:bg-green-800"
      >
        <button onClick={() => addToCart(product.id)}>
          Agregar al carrito
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Descripción del producto"
        style={modalStyle}
        className={
          "bg-gray-400 md:container md:mx-auto rounded-lg border-solid border-2 border-white h-auto"
        }
      >
        <div className="text-right w-full justify-end">
          <button
            className="text-white italic text-2xl drop-shadow-xl inline-block p-2 border-solid border-2 border-white rounded-md m-3.5 bg-gray-700 hover:bg-black"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div>
          <h1 className="text-black italic text-center text-xl font-bold">
            {product.name}
          </h1>
          <div className="flex justify-center items-center">
            <img className="h-64 w-64" src={product.image} alt={product.name} />
          </div>
          <h2 className="text-black italic text-center text-lg underline underline-offset-2">
            Descripción
          </h2>
          <p className="text-black italic text-base text-center">
            {product.description}
          </p>
        </div>
        <div
          className="text-white italic text-center drop-shadow-2xl	 
             border-solid border-2 border-white rounded-md m-3.5 bg-gray-700 hover:bg-black active:bg-green-800"
        >
          <button onClick={() => addToCart(product.id)}>
            Agregar al carrito
          </button>
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
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
