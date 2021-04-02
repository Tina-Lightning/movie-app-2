import React from "react";
import { FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        <FaTv /> TV Logging App
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Link 1
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Link 2
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Link 3
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
