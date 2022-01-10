import React, { useEffect, useState } from "react";
import axios from "axios";
import nocover from "../images/nocover.jpg";

const SingleBook = (props) => {
  const [singleBook, setSingleBook] = useState({});
  const [moreInfo, setMoreInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${props.match.params.bookkey}.json`)
      .then((info) => {
        setSingleBook(info.data);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
    axios
      .get(
        `https://openlibrary.org/search.json?q=${props.match.params.bookkey}`
      )
      .then((info) => {
        setMoreInfo(info.data.docs);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, [props.match.params.bookkey]);

  console.log("moreinfo", moreInfo);
  console.log("singlebook:", singleBook);

  return (
    <div className="bookContainer">
      <div className="individualBook">
        <img
          alt="book cover"
          src={
            singleBook.covers
              ? `https://covers.openlibrary.org/b/id/${singleBook.covers[0]}-M.jpg`
              : nocover
          }
        />
        {moreInfo.map((book) => {
          return (
            <div>
              <h2>
                {singleBook.title} ({book.first_publish_year})
              </h2>
              <p>by {book.author_name[0]}</p>
              <p>genre: {book.subject[0]}</p>
              <p>{singleBook.description?.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleBook;
