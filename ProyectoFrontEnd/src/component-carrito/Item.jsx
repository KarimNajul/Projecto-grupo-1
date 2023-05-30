import PropTypes from "prop-types";

const Item = (props) => {
  const { id, name, price, cantidad } = props.data;
  const deleteFromCart = props.deleteFromCart;

  return (
    <div className="flex flex-row justify-between">
      <h4>{name}</h4>
      <h5>
        $ {price} x {cantidad}
      </h5>
      <h5>$ {price * cantidad}</h5>
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

Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    cantidad: PropTypes.number.isRequired,
  }).isRequired,
  deleteFromCart: PropTypes.func.isRequired,
};

export default Item;
