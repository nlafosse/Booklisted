import React, { useState } from "react";
import axios from "axios";

const Author = (props) => {
  const [author, setAuthor] = useState([]);
  const [authorCatalog, setAuthorCatalog] = useState([]);

  React.useEffect(() => {
    console.log(props);
    axios
      .get(
        `https://openlibrary.org/authors/${props.match.params.person}/works.json`
      )
      .then((info) => {
        setAuthorCatalog([info.data]);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
    axios
      .get(`https://openlibrary.org/authors/${props.match.params.person}.json`)
      .then((info) => {
        setAuthor([info.data]);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, []);

  console.log("author variable: ", author);
  console.log("author catalog: ", authorCatalog);

  //COMBINE HOOKS
  const combinedArrays = author.concat(authorCatalog);
  console.log("combined: ", combinedArrays);

  return (
    <div>
      <div>
        {author.map((name) => {
          return <h2>Books by {name.name} </h2>;
        })}

        {combinedArrays.map((detail) => {
          return <div>{/* <p>{detail.entries.title}</p> */}</div>;
        })}
      </div>
      {/* <div> */}
      {/* REMOVE OBJECTS THAT DO NOT INCLUDE A TITLE */}
      {/* {authorCatalog
          .filter((book) => !!book.entries.title)
          .map((book) => {
            return (
              <div>
                <p>{book.entries.title}</p>
              </div>
            );
          })}
      </div> */}
    </div>
  );
};

export default Author;
