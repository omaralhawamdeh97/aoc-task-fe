import instance from "./instance";
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

export const decreaseItemInCart = (foundItem) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.DECREASE_ITEM_IN_CART,
        payload: foundItem,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletetemFromCart = (item) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.DELETE_ITEM_FROM_CART,
        payload: item,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearCart = () => {
  return async (dispatch) => {
    try {
      console.log("actions");
      dispatch({
        type: actionTypes.CLEAR_CART,
        payload: "messi",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkOut = (cart) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const res = instance.post("/checkout", cart);
      dispatch({
        type: actionTypes.CHECK_OUT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
