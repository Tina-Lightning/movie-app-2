import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import Auth from "./Auth";
import SingleShow from "./SingleShow";
import SavedShows from "./SavedShows";
import Navbar from "./Navbar";
import Error from "./Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/myshows">
          <SavedShows />
        </Route>
        <Route path="/shows/:id" children={<SingleShow />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
