import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Subject from "./Subject";
import SingleSubject from "./SingleSubject";
import About from "./About";
import Books from "./Books";
import SingleBook from "./SingleBook";
import Author from "./Author";
import { Route, Switch } from "react-router";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          exact
          path="/subjects"
          component={(props) => <Subject {...props} />}
        />
        <Route
          path="/subject/:genre"
          component={(props) => <SingleSubject {...props} />}
        />
        <Route
          exact
          path="/about"
          component={(props) => <About {...props} />}
        />
        <Route
          exact
          path="/books/:searchText"
          component={(props) => <Books {...props} />}
        />
        <Route
          path="/books/works/:bookkey"
          component={(props) => <SingleBook {...props} />}
        />
        <Route
          path="/author/:person"
          component={(props) => <Author {...props} />}
        />
      </Switch>
    </div>
  );

  // const [searchText, setSearchText] = React.useState('');
  // const [redirect, setRedirect] = React.useState(false);

  // const handleSearch = () => {
  //         let searchTextMinusSpaces = searchText.split(' ').join('_');
  //         setSearchText(searchTextMinusSpaces);
  //         setRedirect(true);
  // }
  // return (
  //     <div>
  //         <Navbar />
  //         <div className="searchBox">
  //             <input
  //                 type='text'
  //                 value={searchText}
  //                 placeholder={"search books, author, isbn"}
  //                 onChange={(e) => {
  //                     setSearchText(e.target.value);
  //                 }}
  //                 />
  //             <button onClick={handleSearch}>Search</button>
  //         </div>
  //         <div>

  //             <Route exact path='/books' component={() => <Books searchText={searchText} setRedirect={setRedirect} setSearchText={setSearchText}/>} />
  //             {redirect && <Redirect to={`/books/${searchText}`} />}
  //         </div>
  //     </div>
  // )
};

export default Main;
