import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./CreateUserForm.css";

const CreateUserForm = () => {
  return (
    <div>
      <Form className="main-form ">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="Enter your first name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="email" placeholder="Enter your last name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default CreateUserForm;
