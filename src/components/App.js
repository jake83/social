import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import Home from "./sections/Home";
import YouTube from "./sections/YouTube";
import Instagram from "./sections/Instagram";
import Twitter from "./sections/Twitter";
import ProfileEdit from "./profiles/ProfileEdit";

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
            <Route path="/profile" exact component={ProfileEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
