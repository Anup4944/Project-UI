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
    <>
      <Navbar className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Navbar.Brand className="text-white nav-items ">Logo</Navbar.Brand>
        <Nav className="ml">
          <Link className="nav-items text-white" to="/">
            Home
          </Link>

          <Link className="nav-items text-white">
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
          <Link className="nav-items text-white" to="/checkout">
            <FaCartPlus />
          </Link>

          <Form className="nav-items " inline>
            {" "}
            <Form.Control
              className="mr-15"
              type="text"
              placeholder="Search products here..."
            />
          </Form>

          {isAuth ? (
            <Link
              className=" nav-items text-white"
              onClick={handleOnLogout}
              
            >
              <FiLogOut />
              Logout
            </Link>
          ) : (
            <Link className=" nav-items text-white" to="/login">
              SignIn / SignUp
            </Link>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
