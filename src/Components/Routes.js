import React from "react";
import { Route, Switch } from "react-router";
import AddBook from "./Books/AddBook";
import BooksList from "./Books/BooksList";
import BookDetails from "./Books/BookDetails";
import Home from "./Home";
import SignUp from "../Components/authScreens/SignUp";
import SignIn from "../Components/authScreens/SignIn";
import Cart from "./Cart";

function Routes({ books }) {
  return (
    <Switch>
      <Route path={["/books/new", "/books/:bookSlug/edit"]}>
        <AddBook />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/books/:bookSlug">
        <BookDetails />
      </Route>
      <Route path="/books" exact>
        <BooksList books={books} />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
