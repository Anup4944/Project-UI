import React, { useEffect } from "react";
import { Navbar, Nav, Form, Card, Dropdown,Image } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
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
      <Navbar className="navbar navbar-expand-lg bg-dark navbar-dark">
        <Navbar.Brand className="navbar-brand text-white nav-items ">
        LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Link className="nav-link text-white" to="/">
          <FaHome/>
        </Link>

        <Link className="nav-link text-white">
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
        <Link className="nav-link text-white" to="/checkout">
          <FaCartPlus />
        </Link>

        <Form className="form-inline" style={{maxWidth: "400px"}}>
          {" "}
          <Form.Control
            className="mr-15"
            type="text"
            placeholder="Search products..."
          />
        </Form>

        {isAuth ? (
          <Link className="nav-link text-white" onClick={handleOnLogout}>
            <FiLogOut />
            Logout
          </Link>
        ) : (
          <Link className="nav-link text-white" to="/login">
            SignIn / SignUp
          </Link>
        )}
      </Navbar>
    </>
  );
};

export default Header;
