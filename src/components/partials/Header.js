import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  return (
    <div className="main-nav">
      <Navbar className="nav" bg="dark">
        <Navbar.Brand className="text-white " to="/home">
          E-Commerce
        </Navbar.Brand>

        <Nav className=" mr-auto">
          <Nav.Link className="text-white" href="dashboard">
            Dashboard
          </Nav.Link>

          <Nav.Link className="text-white" href="/product">
            Product
          </Nav.Link>
          <Nav.Link className="text-white" href="/category">
            Category List
          </Nav.Link>
          <Nav.Link className="text-white" href="/phistory">
            Purchase History
          </Nav.Link>
          <Nav.Link className="text-white" href="/checkout">
            CheckOut
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
