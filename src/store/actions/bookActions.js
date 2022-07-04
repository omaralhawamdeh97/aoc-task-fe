import instance from "./instance";
import * as actionTypes from "./types";

export const deleteBook = (bookId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      await instance.delete(`/items/${bookId}/delete`);
      dispatch({
        type: actionTypes.DELETE_BOOK,
        payload: { bookId: bookId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addBook = (newBook, history) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const formData = new FormData();
      for (const key in newBook) formData.append(key, newBook[key]);
      const res = await instance.post(`/items/new`, formData);
      console.log(res.data);
      dispatch({
        type: actionTypes.ADD_BOOK,
        payload: { newBook: res.data },
      });
      history.push("/books");
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateBook = (updatedBook, history) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const formData = new FormData();
      for (const key in updatedBook) formData.append(key, updatedBook[key]);
      const res = await instance.put(`/items/${updatedBook.id}`, formData);
      dispatch({
        type: actionTypes.UPDATE_BOOK,
        payload: { updatedBook: res.data },
      });
      history.goBack();
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/items");
      dispatch({
        type: actionTypes.FETCH_BOOKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
