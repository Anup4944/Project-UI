import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./PasswordResetForm.css";

export const PasswordResetForm = () => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;

    setEmail({
      ...email,
      [email]: value,
    });
  };
  const hanndleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <section className="container">
      <div className="password-form">
        <Form onSubmit={hanndleOnSubmit} className="form-main">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleOnChange}
              value={email}
              required
            />
          </Form.Group>
          <br />

          <br />
          <Button variant="danger" type="submit">
            Submit
          </Button>
          <a href="/">Login Now</a>
          <br />
        </Form>
      </div>
    </section>
  );
};

export default PasswordResetForm;
