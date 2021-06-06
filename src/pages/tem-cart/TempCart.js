import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import DefaultLayout from "../../components/layout/DefaultLayout";

const product = {
  cart: [
    {
      name: "almond milk",
      qty: 5,
      price: 10,
    },
    {
      name: "cow milk",
      qty: 15,
      price: 20,
    },
  ],
  total: 20 * 100,
};

const TempCart = () => {
  const handleOnPayment = async (token) => {
    const data = {
      token,
      product,
    };

    const result = await axios.post(
      "http://localhost:5001/api/v1/payment",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  console.log(process.env.REACT_APP_STRIP_KEY);
  return (
    <div>
      <DefaultLayout>
        <Form>
          <h1>Please enter your shipping address</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Country or Region</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your country or region"
              style={{ maxWidth: 500 }}
            />

            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="John"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Smith"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your street"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Street Address 2</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your street"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Suburb</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your suburb"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>State/Province/Region</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your State/Province/Region"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Postcode"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Confirm Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Confirm Email"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Country Code</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your country"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Phone Number"
              style={{ maxWidth: 500 }}
            />
          </Form.Group>
          {console.log("checking", process.env.REACT_APP_STRIP_KEY)}
        </Form>
        <div>
          <StripeCheckout
            token={handleOnPayment}
            stripeKey={process.env.REACT_APP_STRIP_KEY}
            name="Pay by card "
            amount={product.total}
          >
            <Button variant="info">Pay Now</Button>
          </StripeCheckout>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default TempCart;
