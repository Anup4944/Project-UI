import React from "react";
import { Navbar, Nav, Form, Card } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <Card>
      <Navbar className="nav mr-auto" bg="dark" variant="light" expand="lg">
        <Navbar.Brand className="text-white ">E-Commerce</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="text-white" href="dashboard">
            Home
          </Nav.Link>

          <Form inline>
            {" "}
            <Form.Control
              className="mr"
              type="text"
              placeholder="Search products here..."
            />
          </Form>
          <Nav.Link className="text-white" href="/category">
            Category
          </Nav.Link>

          <Nav.Link className="text-white" href="/checkout">
            <FaCartPlus />
          </Nav.Link>
          {/* <Nav.Link className="text-white mr-sm-2" href="/logout">
            Logout
          </Nav.Link> */}

          <Nav.Link className="text-white" href="/login">
            SignIn / SignUp
          </Nav.Link>
        </Nav>
      </Navbar>
    </Card>
  );
};

export default Header;
