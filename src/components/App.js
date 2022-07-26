import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import Home from "./sections/Home";
import YouTube from "./sections/YouTube";
import Instagram from "./sections/Instagram";
import Twitter from "./sections/Twitter";
import Profile from "./sections/Profile";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:username/youtube" exact component={YouTube} />
            <Route path="/:username/instagram" exact component={Instagram} />
            <Route path="/:username/twitter" exact component={Twitter} />
            <Route path="/:username/profile" exact component={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
