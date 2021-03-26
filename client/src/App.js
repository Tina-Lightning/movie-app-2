import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ShowsList from "./components/shows-list.component";
import EditShow from "./components/edit-show.component";
import CreateShow from "./components/create-show.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path="/" exact component={ShowsList} />
        <Route path="/edit/:id" component={EditShow} />
        <Route path="/create" component={CreateShow} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
