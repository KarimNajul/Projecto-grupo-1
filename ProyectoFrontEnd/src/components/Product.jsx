import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

const Product = ({ product }) => {
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

  const addToCart = (id) => {
    console.log(id)
  }

  return (
    <div className="flex flex-col rounded-lg border-solid border-2 border-white bg-amber-100 relative">
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
        <h1 className="text-black p-4 font-bold">{product.name}</h1>
      </div>
      <div className="text-center text-black italic ">
        <h3>${product.price}</h3>
      </div>
      <div
        className="text-white text-center drop-shadow-2xl	 
      border-solid border-2 border-white rounded-md m-3.5 bg-yellow-500 hover:bg-black active:bg-green-800"
      >
        <button onClick={openModal}>Ver descripción</button>
      </div>
      <div
        className="text-white text-center drop-shadow-2xl	 
      border-solid border-2 border-white rounded-md m-3.5 bg-yellow-500 hover:bg-black active:bg-green-800"
      >
        <button onClick={() => addToCart(productid)}>Agregar al carrito</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Descripción del producto"
        style={modalStyle}
        className={
          "bg-amber-200 md:container md:mx-auto rounded-lg border-solid border-2 border-white h-auto"
        }
      >
        <div className="text-right w-full justify-end">
          <button
            className="text-white text-2xl drop-shadow-xl inline-block p-2 border-solid border-2 border-white rounded-md m-3.5 bg-yellow-500 hover:bg-black"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <div>
          <h1 className="text-black text-center text-xl font-bold">
            {product.name}
          </h1>
          <div className="flex justify-center items-center">
            <img className="h-64 w-64" src={product.image} alt={product.name} />
          </div>
          <h2 className="text-black text-center text-lg underline underline-offset-2">
            Descripción
          </h2>
          <p className="text-black text-base text-center">
            {product.description}
          </p>
        </div>
        <div
          className="text-white text-center drop-shadow-2xl	 
             border-solid border-2 border-white rounded-md m-3.5 bg-yellow-500 hover:bg-black active:bg-green-800"
        >
          <button onClick={() => addToCart(product.id)}>Agregar al carrito</button>
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
