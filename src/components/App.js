import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import Home from "./sections/Home";
import YouTube from "./sections/YouTube";
import Instagram from "./sections/Instagram";
import Twitter from "./sections/Twitter";
import Profile from "./sections/Profile";

// TODO: Currently hardcoded to a test account (jake83). Make this dynamic
const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/jake83/youtube" exact component={YouTube} />
            <Route path="/jake83/instagram" exact component={Instagram} />
            <Route path="/jake83/twitter" exact component={Twitter} />
            <Route path="/jake83/profile" exact component={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
