import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  user: authReducer,
  cart: cartReducer,
});

export default rootReducer;
