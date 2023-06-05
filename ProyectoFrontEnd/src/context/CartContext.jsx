import { createContext, useReducer, useState, useEffect } from "react";
import { TYPES } from "../component-carrito/Action";
import { carritoInitialState, carritoReducer } from "../component-carrito/CarritoReducer";
import axios from "axios";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const [isShowing, setIsShowing] = useState(false);

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    console.log (id);
  };

  const addOneFromCart = (id) => {
    dispatch({ type: TYPES.ADD_ONE_FROM_CART, payload: id });
  };

  const deleteFromCart = (id, deleteAllItems) => {
    deleteAllItems
      ? dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id })
      : dispatch({ type: TYPES.REMOVE_ITEM, payload: id }),
      cart.length === 0 ? setIsShowing((isShowing) => !isShowing) : null;
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    setIsShowing((isShowing) => !isShowing);
  };

  const updateState = async () => {
    const productsURL = "http://localhost:5000/products";
    const cartURL = "http://localhost:5000/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;

    dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] });
  };

  useEffect(() => {
    updateState();
  }, []);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        addOneFromCart,
        deleteFromCart,
        clearCart,
        products,
        cart,
        isShowing,
        setIsShowing,
        updateState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;