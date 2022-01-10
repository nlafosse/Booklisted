import React, { useEffect, useState } from "react";
import axios from "axios";
import nocover from "../images/nocover.jpg";

const SingleBook = (props) => {
  console.log(props);
  const [singleBook, setSingleBook] = useState({});
  const [moreInfo, setMoreInfo] = useState([]);
  const [bookCover, setBookCover] = useState([]);

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
  }, []);
  console.log("singleBook variable: ", singleBook);
  console.log("second variable: ", moreInfo);
  console.log("covers:", singleBook.covers);
  // setBookCover(singleBook.covers);

  return (
    <div className="bookContainer">
      <div className="individualBook">
        <img
          src={
            singleBook.covers
              ? `https://covers.openlibrary.org/b/id/${singleBook.covers[0]}-M.jpg`
              : nocover
          }
        />
        <h2>{singleBook.title} </h2>
        <p>{singleBook.first_publish_date}</p>
        <p>{singleBook.description?.value}</p>
      </div>
    </div>
  );
};

export default SingleBook;
