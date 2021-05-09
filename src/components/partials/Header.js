import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  return (
    <div className="main-nav">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="text-white" to="/home">
          E-Commerce
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link className="text-white" href="dashboard">
            Dashboard
          </Nav.Link>

          <Nav.Link className="text-white" href="/category">
            Category
          </Nav.Link>
          <Nav.Link className="text-white" href="/logout">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
