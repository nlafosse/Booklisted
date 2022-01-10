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
};

export default Main;
