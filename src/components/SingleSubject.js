import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleSubject = (props) => {
  console.log(props);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    console.log(props);
    axios
      .get(
        `https://openlibrary.org/subjects/${props.match.params.genre}.json?details=true?`
      )
      .then((info) => {
        console.log(info);
        setGenre(info.data.works);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  console.log("genre variable: ", genre);

  return (
    <div>
      <h3 className="subjectHeading">{props.match.params.genre} books</h3>
      <div className="subjects">
        {genre.map((book) => {
          console.log("book: ", book.works);
          return (
            <div className="subjectBooks">
              <Link to={`/books${book.key}`}>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                />
                <p>{book.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleSubject;
