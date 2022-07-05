import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  checkOut,
  clearCart,
  decreaseItemInCart,
  deletetemFromCart,
  increaseItemInCart,
} from "../store/actions/cartActions";
import { Button, Item } from "../styles";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  let arrayOfBooks = cart.map((book) => (
    <Item>
      <img src={book.img} alt="books" />
      <h3>{book.name}</h3>
      <p>{book.price} JD</p>
      {book.quantity ? (
        <div
          style={{
            display: "flex",
          }}
        >
          <Button
            onClick={() => dispatch(decreaseItemInCart(book))}
            disabled={book.quantity <= 1}
            style={{ width: 22, margin: 7 }}
          >
            -
          </Button>
          <p style={{ paddingTop: 12 }}>{book.quantity}</p>

          <Button
            onClick={() => dispatch(increaseItemInCart(book))}
            style={{ width: 22, margin: 7 }}
          >
            +
          </Button>
          <Button
            onClick={() => dispatch(deletetemFromCart(book))}
            style={{ margin: 7 }}
          >
            remove from cart
          </Button>
        </div>
      ) : (
        <Button onClick={() => dispatch(addItemToCart(book))}>
          add to cart
        </Button>
      )}
    </Item>
  ));

  //clear cart
  const clearItems = () => {
    console.log("first");
    dispatch(clearCart());
  };

  //checkout
  const buy = () => {
    if (alert("are you sure to checkout ?")) dispatch(checkOut(cart));
  };

  let totalPrice = 0;
  cart.forEach((item) => (totalPrice += item.price * item.quantity));

  if (cart.length === 0)
    return <h1 className="text-center"> Your cart isEmpty </h1>;

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button style={{ alignSelf: "center" }} onClick={clearItems}>
        Clear All
      </Button>
      <div style={{ display: "flex" }}>{arrayOfBooks}</div>

      <p style={{ alignSelf: "center" }}>Total:{totalPrice} JD</p>
      <Button style={{ alignSelf: "center" }} onClick={buy}>
        Check out
      </Button>
    </div>
  );
};

export default Cart;
