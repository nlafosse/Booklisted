import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleSubject = (props) => {
  console.log(props);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    console.log(props);
    axios
      .get(`http://openlibrary.org/subjects/${props.match.params.genre}.json`)
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
      <h3>{props.match.params.genre} books</h3>
      {genre.map((book) => {
        console.log("book: ", book.works);
        return (
          <div>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
            />
            <p>{book.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleSubject;
