import React from "react";

const ItemCarrito = (props) => {
  const { data, deleteFromCart } = props;

  return (
    <div>
      <h4>{data.name}</h4>
      <h5>$ {data.price}</h5>
      <h5>{data.cantidad}</h5>
      <h5>
        Subtotal: $ {data.price} * {data.cantidad}
      </h5>
      <button
        onClick={() => deleteFromCart(id, false)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Eliminar uno
      </button>
      <button
        onClick={() => deleteFromCart(id, true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Eliminar todos
      </button>
    </div>
  );
};

export default ItemCarrito;
