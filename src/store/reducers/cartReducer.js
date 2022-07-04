import * as actionTypes from "../actions/types";

const initialState = { cart: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload.bookId),
      };

    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case actionTypes.INCREASE_ITEM_IN_CART:
      console.log(action.payload, "reducer");
      const foundItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      foundItem.quantity += 1;
      console.log(foundItem, "reducer");

      return {
        ...state,
        cart: state.cart.map((item) => item),
      };

    default:
      return state;
  }
};
export default reducer;
