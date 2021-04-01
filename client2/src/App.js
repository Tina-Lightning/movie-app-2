import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import SearchShows from "./components/searchshows.component";
import SingleShow from "./components/single-show.component";
import ShowsList from "./components/saved-shows.component";
import EditShow from "./components/edit-show.component";
import CreateShow from "./components/create-show.component";
import CreateUser from "./components/create-user.component";
import Error from "./components/error.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route exact path="/">
          <SearchShows />
        </Route>
        {/* <Route path="/shows/:id" children={<SingleShow />} /> */}
        <Route path="/myshows/">
          <ShowsList />
        </Route>
        <Route path="/edit/:id">
          <EditShow />
        </Route>
        <Route path="/create">
          <CreateShow />
        </Route>
        <Route path="/user">
          <CreateUser />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </div>
    </Router>

    // <Router>
    //   <Navbar />
    //   <div className="container">
    //     <br />
    //     <Route path="/" exact component={SearchShows} />
    //     <Route path="/shows/:id" children={<SingleShow />} />
    //     <Route path="/myshows/" component={SavedShows} />
    //     <Route path="/edit/:id" component={EditShow} />
    //     <Route path="/create" component={CreateShow} />
    //     <Route path="/user" component={CreateUser} />
    //   </div>
    // </Router>
  );
}

export default App;
