import React from "react";
import { Link } from "react-router-dom";

// export default class Navbar extends Component {
//   render() {
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        TV Logging App
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Add TV Show
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
