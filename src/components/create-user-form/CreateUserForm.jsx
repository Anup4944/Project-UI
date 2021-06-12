import React, { useState, useEffect } from "react";
import { Form, Col, Button,Alert, Spinner, Container } from "react-bootstrap";
import "./CreateUserForm.css";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { newUser } from "../../pages/create-user/CreateUserAction";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  confPass: "",
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
  const dispatch = useDispatch();
  const { isLoading, userList ,status, message} = useSelector((state) => state.createUser);

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
    const {confPass, ...userObj} = user;

    dispatch(newUser(userObj));
  };

  return (
    <div className="user">
      <div > {isLoading && <Spinner variant="primary" animation="border" />}
          {message && (
            <Alert
              variant={
                status === "success" ? "success" : "danger"
              }
            >
              {" "}
              {message}{" "}
            </Alert>
          )}</div>
     <div>
      <Form className="main-form " onSubmit={handleOnSubmit}>

     
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="fName"
              type="fName"
              value={user.fName}
              onChange={handleOnChange}
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lName"
              type="lName"
              value={user.lName}
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
              name="confPass"
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
            <a href="/login"> Login</a>
          </Form.Group>
        </Form.Row>
      </Form>
      </div>
    </div>
  );
};

export default CreateUserForm;
