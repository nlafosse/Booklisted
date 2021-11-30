import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        console.log(book.key);

        return (
          <div className="individualBook">
            <Link to={`/books${book.key}`}>
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
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
