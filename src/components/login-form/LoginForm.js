import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

const initialState = {
  email: "",
  password: "",
};
export const LoginForm = () => {
  const history = useHistory();
  const [login, setLogin] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };
  const hanndleOnSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    history.push("/dashboard");
  };

  return (
    <section className="container">
      <div className="login-form">
        <Form onSubmit={hanndleOnSubmit} className="form-main">
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
