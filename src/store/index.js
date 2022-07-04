import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { fetchBooks } from "./actions/bookActions";
import rootReducer from "./reducers/rootReducer";
import { checkForToken } from "./actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchBooks());
store.dispatch(checkForToken());
export default store;
