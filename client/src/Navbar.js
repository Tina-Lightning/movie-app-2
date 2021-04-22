import React from "react";
import { FaTv } from "react-icons/fa";
//import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <FaTv /> TV Logging App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/myshows">My Shows</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/">Login</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
