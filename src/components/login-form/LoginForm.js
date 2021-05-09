import React from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <Form className="form-main">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <br />

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <br />
        <Button variant="danger" type="submit">
          Submit
        </Button>
        <br />
      </Form>
    </div>
  );
};

export default LoginForm;
