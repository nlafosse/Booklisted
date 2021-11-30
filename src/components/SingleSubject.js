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
        setGenre([info.data]);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  console.log("genre variable: ", genre);

  return (
    <div>
      {genre.map((book) => {
        console.log("book: ", book.works);
        return (
          <div>
            <h3>books by genre</h3>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
            />
            <p>{book.works.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleSubject;
