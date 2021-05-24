import React, { useEffect } from "react";
import { Navbar, Nav, Form, Card } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../../pages/login/LoginAction";
import "./Header.css";
import { useDispatch } from "react-redux";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);



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
            Shop by Category
          </Nav.Link>

          <Nav.Link className="text-white" href="/checkout">
            <FaCartPlus />
          </Nav.Link>

          {isAuth ? (
            <Nav.Link className="text-white" href="/checkout">
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link className="text-white" href="/login">
              SignIn / SignUp
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </Card>
  );
};

export default Header;
