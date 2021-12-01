import React from "react";
import watercolorread from "../images/watercolorreader.jpeg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1>ABOUT BOOKLIST</h1>
        <p>Booklisted is a humble book catalog project.</p>
        <p>
          I used the
          <a
            href="https://openlibrary.org/developers/api"
            alt="OpenLibrary.org free library API"
          >
            Open Library
          </a>
          suite of APIs to demonstrate how to use Routers and APIs in React
        </p>
      </div>
      <div>
        <img src={watercolorread} />
      </div>
    </div>
  );
};

export default About;
