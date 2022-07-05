import { useState } from "react";
import Book from "./Book";
import { Button, List } from "../../styles";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const BooksList = (props) => {
  const [query, setQuery] = useState("");
  const books = props.books;

  let arrayOfBooks = books
    ?.filter((book) => book.name?.toLowerCase().includes(query?.toLowerCase()))
    .map((book) => (
      <Book
        key={book.id}
        product={book}
        setCurrentBook={props.setCurrentBook}
      />
    ));

  console.log("hello BOOKS LIST");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SearchBar setQuery={setQuery} />
      <List
        style={{
          WebkitOverflowScrolling: "auto",
          whiteSpace: "-moz-initial",
          width: "100%",
        }}
      >
        {arrayOfBooks}
      </List>
      <Link to={"/books/new"} style={{ alignSelf: "center" }}>
        <Button>New Item</Button>
      </Link>
    </div>
  );
};

export default BooksList;
