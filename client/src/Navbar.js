import React, { useState, useEffect } from "react";
import { FaTv } from "react-icons/fa";
//import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  console.log(user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    //const token = user?.token;

    // if (token) {
    //   const decodedToken = decode(token);

    //   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
          {user ? (
            <>
              <Nav.Link eventKey="disabled" disabled>
                {user.result.name}
              </Nav.Link>
              <Nav.Link href="/" onClick={logout}>
                Logout
              </Nav.Link>
            </>
          ) : (
            <Nav.Link href="/auth">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
