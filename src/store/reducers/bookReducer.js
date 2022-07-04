import * as actionTypes from "../actions/types";
const initialState = { books: [], loading: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case actionTypes.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.bookId),
      };
    case actionTypes.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload.newBook],
      };
    case actionTypes.UPDATE_BOOK:
      const { updatedBook } = action.payload;
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        ),
      };

    default:
      return state;
  }
};
export default reducer;
