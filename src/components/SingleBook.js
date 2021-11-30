import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleBook = (props) => {
  console.log(props);
  const [singleBook, setSingleBook] = useState([]);
  const [moreInfo, setMoreInfo] = useState([]);

  useEffect(() => {
    console.log(props);
    axios
      .get(`https://openlibrary.org/works/${props.match.params.bookkey}.json`)
      .then((info) => {
        setSingleBook([info.data]);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
    axios
      .get(`https://openlibrary.org/search.json?q=dune`)
      .then((info) => {
        setMoreInfo(info.data.docs);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  console.log("singleBook variable: ", singleBook);
  console.log("second variable: ", moreInfo);

  return (
    <div>
      {singleBook.map((bookDetail) => {
        return (
          <div className="individualBook">
            <img
              src={`https://covers.openlibrary.org/b/id/${bookDetail.covers[0]}-M.jpg`}
            />
            <h2>{bookDetail.title}</h2>
            <p>First published: {bookDetail.first_publish_date}</p>
            <p>{bookDetail.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleBook;
