import React, { useState, useEffect } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../pages/login/LoginAction";

const initialState = {
  email: "cat@gmail",
  password: "ab1234",
};
export const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, loginResponse,isAuth } = useSelector((state) => state.login);

  const [login, setLogin] = useState(initialState);

  const token = sessionStorage.getItem("accessJWT");

  useEffect(() => {
    
    isAuth && history.push("/dashboard");
   
  }, [loginResponse,isAuth]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const hanndleOnSubmit = (e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      return alert("Please fill up all the given fields");
    }

    dispatch(getLogin(login));
  };

  return (
    <section className="container">
      <div className="login-form">
        <Form onSubmit={hanndleOnSubmit} className="form-main">
          {isLoading && <Spinner variant="primary" animation="border" />}
          {loginResponse?.message && (
            <Alert
              variant={
                loginResponse?.status === "success" ? "success" : "danger"
              }
            >
              {" "}
              {loginResponse?.message}{" "}
            </Alert>
          )}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleOnChange}
              value={login.email}
              required
            />
          </Form.Group>
          <br />

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={login.password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <br />
          <Button variant="danger" type="submit">
            Submit
          </Button>
          <a href="/reset-password">Forgot Password</a>
          <br />

          <a href="/create-user"> New here? Create account</a>
        </Form>
      </div>
    </section>
  );
};

export default LoginForm;
