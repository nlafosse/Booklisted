import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Subject = () => {
  // const [love, setLove] = useState([]);

  // React.useEffect(() => {
  //   axios
  //     .get(`http://openlibrary.org/subjects/love.json`)
  //     .then((info) => {
  //       setLove(info.data);
  //     })
  //     .catch((err) => {
  //       console.log("Something went wrong", err);
  //     });
  // }, []);
  // console.log("subjects: ", love);

  return (
    <div>
      <h2>LIST OF BOOK SUBJECTS</h2>
      <ul>
        <li>
          <Link to={`/subject/love`}>Romance</Link>
        </li>
        <li>
          <Link to={`/subject/science_fiction`}>Science Fiction</Link>
        </li>
        <li>
          <Link to={`/subject/fantasy`}>Fantasy</Link>
        </li>
        <li>
          <Link to={`/subject/dystopian`}>Dystopian</Link>
        </li>
        <li>
          <Link to={`/subject/action_adventure`}>Action & Adventure</Link>
        </li>
        <li>
          <Link to={`/subject/mystery`}>Mystery</Link>
        </li>
        <li>
          <Link to={`/subject/horror`}>Horror</Link>
        </li>
        <li>
          <Link to={`/subject/classics`}>Classics</Link>
        </li>
        <li>
          <Link to={`/subject/poetry`}>Poetry</Link>
        </li>
        <li>
          <Link to={`/subject/philosophy`}>Philosophy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Subject;
