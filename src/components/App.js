import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./sections/Profile";
import Header from "./Header";
import history from "../history";
import Home from "./sections/Home";
import YouTube from "./sections/YouTube";
import Instagram from "./sections/Instagram";
import Twitter from "./sections/Twitter";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/youtube" exact component={YouTube} />
            <Route path="/instagram" exact component={Instagram} />
            <Route path="/twitter" exact component={Twitter} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
