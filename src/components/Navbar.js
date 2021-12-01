import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <p className="logo">
          <Link to="/">BookListed</Link>
        </p>
      </div>
      <div className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/subjects">Genres</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
