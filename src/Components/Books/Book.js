import { Item } from "../../styles";
import DeleteButton from "../Buttons/DeleteButton";
import { Link } from "react-router-dom";
import { deleteBook } from "../../store/actions/bookActions";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  increaseItemInCart,
} from "../../store/actions/cartActions";

const Book = (props) => {
  const book = props.product;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart, "cart");
  return (
    <Item>
      {cart.find((item) => item.id === book.id) ? (
        <button onClick={() => dispatch(increaseItemInCart(book))}>
          increase
        </button>
      ) : (
        <button onClick={() => dispatch(addItemToCart(book))}>
          add to cart
        </button>
      )}
      <Link to={`/books/${book.slug}`}>
        <img src={book.img} alt="books" />
      </Link>
      <h3>{book.name}</h3>
      <p>{book.price} JD</p>
      <DeleteButton deleteBook={() => dispatch(deleteBook(book.id))} />
    </Item>
  );
};

export default Book;
