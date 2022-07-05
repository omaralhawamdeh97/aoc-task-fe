import { Button, Item } from "../../styles";
import DeleteButton from "../Buttons/DeleteButton";
import { Link } from "react-router-dom";
import { deleteBook } from "../../store/actions/bookActions";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  decreaseItemInCart,
  deletetemFromCart,
  increaseItemInCart,
} from "../../store/actions/cartActions";

const Book = (props) => {
  const book = props.product;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  let messi = cart.find((item) => item.id === book.id);

  const user = useSelector((state) => state.user.user);
  const checkId = user.id !== book.customerId;
  return (
    <Item>
      <Link to={`/books/${book.slug}`}>
        <img src={book.img} alt="books" />
      </Link>
      <h3>{book.name}</h3>
      <p>{book.price} JD</p>
      {messi ? (
        <div
          style={{
            display: "flex",
          }}
        >
          <Button
            onClick={() => dispatch(decreaseItemInCart(book))}
            disabled={messi.quantity <= 1}
            style={{ width: 22, margin: 7 }}
          >
            -
          </Button>
          <p style={{ paddingTop: 12 }}>{messi.quantity}</p>

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
      <DeleteButton
        deleteBook={() => dispatch(deleteBook(book.id))}
        disabled={checkId}
      />
    </Item>
  );
};

export default Book;
