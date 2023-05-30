import { useReducer } from "react";
import Item from "../component-carrito/Item";
import {
  carritoInitialState,
  carritoReducer,
} from "../component-carrito/carritoreducer";
import { TYPES } from "../component-carrito/Action";

const Carrito = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const { carrito } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, removeAll) => {
    if (removeAll === true) {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <div>
      <h2>Carrito</h2>
      <div>
        {carrito.map((item) => (
          <Item key={item.id} data={item} deleteFromCart={deleteFromCart} />
        ))}

        <button
          onClick={() => clearCart()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Limpiar Carrito
        </button>
      </div>
    </div>
  );
};

export default Carrito;
