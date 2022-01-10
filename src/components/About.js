import React from "react";
import reader from "../images/reader.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1>ABOUT BOOKLIST</h1>
        <p>
          Booklisted is a humble book catalog project.<br></br>I used the{" "}
          <a
            href="https://openlibrary.org/developers/api"
            target="_blank"
            rel="noreferrer"
          >
            Open Library
          </a>{" "}
          suite of APIs to demonstrate how to use Routers and APIs in React
        </p>
      </div>
      <div>
        <img alt="watercolor of a person reading a book" src={reader} />
      </div>
    </div>
  );
};

export default About;
