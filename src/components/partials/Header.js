import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-nav">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="text-white" href="#home">
          E-Commerce
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link className="text-white" href="#home">
            Dashboard
          </Nav.Link>
          <Nav.Link className="text-white" href="#link">
            About Us
          </Nav.Link>
          <Nav.Link className="text-white" href="#home">
            Contact Us
          </Nav.Link>
          <Nav.Link className="text-white" href="#link">
            Products
          </Nav.Link>
          <Nav.Link className="text-white" href="#link">
            Category
          </Nav.Link>
          <Nav.Link className="text-white" href="#link">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
