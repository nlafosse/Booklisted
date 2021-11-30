import React, { useState } from "react";
import axios from "axios";

const Author = (props) => {
  const [author, setAuthor] = useState([]);
  const [authorCatalog, setAuthorCatalog] = useState([]);
  console.log(props);

  React.useEffect(() => {
    axios
      .get(
        `https://openlibrary.org/authors/${props.match.params.person}/works.json`
      )
      .then((info) => {
        console.log("info: ", info);
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
    <div className="authorPage">
      <div>Books</div>

      <div>Author info</div>

      {/* {author.map((authorname) => {
        return <h2>Books by {authorname.name} </h2>;
      })}

      {authorCatalog[0].entries.map((detail) => {
        console.log(detail);
        return (
          <div>
            <p>{detail.title}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Author;
