import React, { useEffect } from "react";
import { Navbar, Nav, Form, Card, Dropdown } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logOut } from "../../pages/login/LoginAction";
import "./Header.css";
import { useDispatch } from "react-redux";
import { getCategories } from "../../pages/category/CategoryAction";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.login);

  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleOnLogout = () => {
    dispatch(logOut());
    history.push("/");
  };

  return (
    <Card>
      <Navbar className="nav ml-auto" bg="dark" variant="light" expand="lg">
        <Navbar.Brand className="text-white ">E-Commerce</Navbar.Brand>
        <Nav className="ml-auto">
          <Link className="text-white" to="/">
            Home
          </Link>

          <Form inline>
            {" "}
            <Form.Control
              className="mr"
              type="text"
              placeholder="Search products here..."
            />
          </Form>

          <Link className="text-white">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Shop by Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categoryList?.map((item, i) => {
                  return (
                    <div>
                      <Dropdown.Item>
                        <Link to={`/category/${item.slug}`}>{item.name}</Link>
                      </Dropdown.Item>
                    </div>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Link>

          <Link className="text-white" to="/checkout">
            <FaCartPlus />
          </Link>

          {isAuth ? (
            <Link
              className="text-white"
              onClick={handleOnLogout}
              style={{ cursor: "pointer" }}
            >
              <FiLogOut />
              Logout
            </Link>
          ) : (
            <Link className="text-white" to="/login">
              SignIn / SignUp
            </Link>
          )}
        </Nav>
      </Navbar>
    </Card>
  );
};

export default Header;
