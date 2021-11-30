import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import nocover from "../images/nocover.jpg";

const Books = (props) => {
  const [books, setBooks] = useState([]);

  React.useEffect(() => {
    console.log(props);
    // props.setRedirect(false)
    axios
      .get(
        `http://openlibrary.org/search.json?q=${props.match.params.searchText}`
      )
      .then((info) => {
        setBooks(info.data.docs.slice(0, 9));
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
            <span className="publishDate">({book.publish_year[0]})</span>
            <p>
              by{" "}
              <Link to={`/author/${book.author_key[0]}`}>
                {book.author_name}
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
