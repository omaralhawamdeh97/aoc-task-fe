import * as actionTypes from "../actions/types";

const initialState = { cart: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADD_ITEM_TO_CART:
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
      break;
    case actionTypes.INCREASE_ITEM_IN_CART:
      console.log(action.payload, "reducer");
      const foundItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      foundItem.quantity++;
      console.log(foundItem, "reducer");

      return {
        ...state,
        cart: state.cart.map((item) => item),
      };

    case actionTypes.CLEAR_CART:
      console.log("reducer");
      return {
        ...state,
        cart: [],
      };
    case actionTypes.DECREASE_ITEM_IN_CART:
      console.log(action.payload, "reducer");
      const xx = state.cart.find((item) => item.id === action.payload.id);
      xx.quantity--;
      console.log(xx, "reducer");

      return {
        ...state,
        cart: state.cart.map((item) => item),
      };

    case actionTypes.CHECK_OUT:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
export default reducer;
