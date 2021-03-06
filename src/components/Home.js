import React from "react";
import Books from "./Books";
import { Route, Redirect } from "react-router-dom";

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const handleSearch = () => {
    let searchTextMinusSpaces = searchText.split(" ").join("_");
    setSearchText(searchTextMinusSpaces);
    setRedirect(true);
  };

  return (
    <div>
      <div className="searchBox">
        <input
          type="text"
          value={searchText}
          placeholder={"search books, author, isbn"}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="gatorGif">
        <img
          alt="Gator surrounded by books"
          src="https://media0.giphy.com/media/9Dk2vkAmYs5dsSRu3B/giphy.gif"
        />
      </div>
      <div>
        <Route
          path="/books"
          component={() => <Books searchText={searchText} />}
        />
        {redirect && <Redirect to={`/books/${searchText}`} />}
      </div>
    </div>
  );
};

export default Home;
