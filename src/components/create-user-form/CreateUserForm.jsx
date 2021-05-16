import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./CreateUserForm.css";
import { useHistory } from "react-router-dom";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

const passVerificationError = {
  isLengthy: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasOneNumber: false,
  hasSpecialChar: false,
  confirmpassword: false,
};

const CreateUserForm = () => {
  const history = useHistory();

  const [user, setUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    if (name === "password") {
      const isLengthy = value.length > 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasOneNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[@ ,#, $ ,%]/.test(value);

      setPasswordError({
        ...passwordError,
        isLengthy,
        hasUpperCase,
        hasLowerCase,
        hasOneNumber,
        hasSpecialChar,
      });
    }

    if (name === "confirmpassword") {
      setPasswordError({
        passwordError,
        confirmpassword: user.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    history.push("/");
  };

  return (
    <div>
      <Form className="main-form " onSubmit={handleOnSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="fname"
              type="fname"
              value={user.fname}
              onChange={handleOnChange}
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lname"
              type="lname"
              value={user.lname}
              onChange={handleOnChange}
              placeholder="Enter your last name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={user.email}
              type="email"
              onChange={handleOnChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={user.password}
              onChange={handleOnChange}
              placeholder="Create A Password"
            />
            <br />

            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confpass"
              value={user.confPass}
              onChange={handleOnChange}
              placeholder="Confirm Password"
            />
            <br />
            <Form.Text>
              {passwordError.confirmpassword && (
                <div className="text-danger mb-3">Password doesnt match </div>
              )}{" "}
            </Form.Text>

            <ul className="m-1.5">
              <li
                className={
                  passwordError.isLengthy ? "text-success" : "text-danger"
                }
              >
                Min 8 characters
              </li>
              <li
                className={
                  passwordError.hasUpperCase ? "text-success" : "text-danger"
                }
              >
                {" "}
                At least one uppercase
              </li>
              <li
                className={
                  passwordError.hasLowerCase ? "text-success" : "text-danger"
                }
              >
                At least one lowercase
              </li>
              <li
                className={
                  passwordError.hasOneNumber ? "text-success" : "text-danger"
                }
              >
                At least one number
              </li>
              <li
                className={
                  passwordError.hasSpecialChar ? "text-success" : "text-danger"
                }
              >
                At least one special character i.e @ # $ %
              </li>
            </ul>

            <Button
              variant="primary"
              type="submit"
              // disabled={Object.values(passwordError).includes(true)}
            >
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default CreateUserForm;
