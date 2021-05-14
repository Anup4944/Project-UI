import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./AddCategoryForm.css";

export const AddCategoryForm = () => {
  return (
    <div className="add-cat-form">
      <Form className="form">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <br />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddCategoryForm;
