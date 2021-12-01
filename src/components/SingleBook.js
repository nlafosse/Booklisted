import React, { useEffect, useState } from "react";
import axios from "axios";
import nocover from "../images/nocover.jpg";

const SingleBook = (props) => {
  console.log(props);
  const [singleBook, setSingleBook] = useState([]);
  const [moreInfo, setMoreInfo] = useState([]);

  useEffect(() => {
    console.log(props);
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

  return (
    <div className="bookContainer">
      <div className="individualBook">
        <img
          src={
            singleBook.cover
              ? `https://covers.openlibrary.org/b/id/$singleBook.covers[0]-M.jpg`
              : nocover
          }
        />
        <h2>{singleBook.title} </h2>
        <p>{singleBook.first_publish_date}</p>
        <p>{singleBook.description}</p>
        {/* <h2>{singleBook.data ? singleBook.data.title : null}</h2>
        <p>{singleBook.data ? singleBook.first_publish_date : null}</p>
        <p>{singleBook.data ? singleBook.data.description : null}</p> */}
      </div>
    </div>
  );
};

export default SingleBook;
