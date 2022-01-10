import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Author = (props) => {
  const [author, setAuthor] = useState([]);
  const [authorCatalog, setAuthorCatalog] = useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://openlibrary.org/authors/${props.match.params.person}/works.json`
      )
      .then((info) => {
        setAuthorCatalog(info.data.entries);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
    axios
      .get(`https://openlibrary.org/authors/${props.match.params.person}.json`)
      .then((info) => {
        setAuthor(info.data);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, [props.match.params.person]);

  console.log("PROBLEM author variable: ", author);
  console.log("author catalog: ", authorCatalog);

  return (
    <div className="authorContainer">
      <div className="authorBooks">
        {authorCatalog.map((detail) => {
          return (
            <div>
              <ul>
                <li>
                  <Link to={`/books${detail.key}`}>{detail.title}</Link>
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      <div className="authorBox">
        <h2>{author.name} </h2>
        <img
          alt="book cover"
          src={`https://covers.openlibrary.org/a/olid/${props.match.params.person}-M.jpg`}
        />
        <p>Born {author.birth_date}</p>
        <p>Died {author.death_date ? author.death_date : null}</p>
        <p>{author.bio ? author.bio.value : ""}</p>
        <p>Further Resources: </p>
        <p>
          {author.links ? (
            <div>
              {author.links.map((link) => {
                return (
                  <p>
                    <a href={link.url}>{link.title}</a>
                  </p>
                );
              })}
            </div>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default Author;
