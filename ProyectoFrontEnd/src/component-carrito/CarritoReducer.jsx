import { TYPES } from "./Action";


export const carritoInitialState = {
  products: [],
  cart: [],
};

export function carritoReducer(state, action) {
  
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let nuevoItem = state.products.find(
        (producto) => producto.id === action.payload
      );

      let itemEnCarrito = state.cart.find(
        (item) => item.id === nuevoItem.id
      );

      return itemEnCarrito
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemEnCarrito.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...nuevoItem, quantity: 1 }],
          };
    }

    case TYPES.ADD_ONE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.map (item => item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 } : item),
      };
    }

    case TYPES.REMOVE_ITEM: {
      let itemAEliminar = state.cart.find(
        (item) => item.id === action.payload
      );

      return itemAEliminar.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter(
              (item) => item.id !== action.payload)
          };
    }

    case TYPES.REMOVE_ALL_ITEMS: {
      
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART: {
      return carritoInitialState;
    }

    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload [0],
        cart: action.payload [1]
      }
    }

    default:
      return state;
  }
}
