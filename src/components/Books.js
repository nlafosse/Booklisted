import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import nocover from "../images/nocover.jpg";

const Books = (props) => {
  const [books, setBooks] = useState([]);

  React.useEffect(() => {
    console.log(props);
    axios
      .get(
        `https://openlibrary.org/search.json?q=${props.match.params.searchText}`
      )
      .then((info) => {
        setBooks(info.data.docs.slice(0, 18));
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, []);

  console.log("books variable:", books);

  return (
    <div className="books">
      {books.map((book) => {
        return (
          <div className="booksDisplay">
            <Link to={`/books${book.key}`}>
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : nocover
                }
              />
              <h3>{book.title}</h3>
            </Link>
            <span>({book.first_publish_year})</span>
            <p>
              <Link to={`/author/${book.author_key}`}>{book.author_name}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
