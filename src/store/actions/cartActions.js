import * as actionTypes from "./types";

export const addItemToCart = (newItem) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.ADD_ITEM_TO_CART,
        payload: newItem,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const increaseItemInCart = (foundItem) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.INCREASE_ITEM_IN_CART,
        payload: foundItem,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
