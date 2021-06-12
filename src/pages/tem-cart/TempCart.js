import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { newUserInfo } from "./TempCart.Action";

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

const initialState = {
  country: "",
  fName: "",
  lName: "",
  streetAddress: "",
  streetAddress2: "",
  suburb: "",
  state: "",
  postCode: "",
  email: "",
  confEmail: "",
  countryCode: "",
  phoneNumber: "",
};

export const TempCart = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(">>>>>>>>>", userInfo);
    const { ...userObj } = userInfo;
    dispatch(newUserInfo(userObj));
  };

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

  return (
    <div>
      <DefaultLayout>
        <Form onSubmit={handleOnSubmit}>
          <h1>Please enter your shipping address</h1>
          <Form.Group className="container mb-3">
            <Form.Label>Country or Region</Form.Label>
            <Form.Control
              name="country"
              type="country"
              value={userInfo.country}
              onChange={handleOnChange}
              placeholder="Enter your country or region"
              style={{ maxWidth: 500 }}
            />

            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="fName"
              type="fName"
              value={userInfo.fName}
              onChange={handleOnChange}
              placeholder="John"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lName"
              type="lName"
              value={userInfo.lName}
              onChange={handleOnChange}
              placeholder="Smith"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              name="streetAddress"
              type="streetAddress"
              value={userInfo.streetAddress}
              onChange={handleOnChange}
              placeholder="Enter your street"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Street Address 2</Form.Label>
            <Form.Control
              name="streetAddress2"
              type="streetAddress2"
              value={userInfo.streetAddress2}
              onChange={handleOnChange}
              placeholder="Enter your street"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Suburb</Form.Label>
            <Form.Control
              name="suburb"
              type="suburb"
              value={userInfo.suburb}
              onChange={handleOnChange}
              placeholder="Enter your suburb"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>State/Province/Region</Form.Label>
            <Form.Control
              name="state"
              type="state"
              value={userInfo.state}
              onChange={handleOnChange}
              placeholder="Enter your State/Province/Region"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              name="postCode"
              type="postCode"
              value={userInfo.postCode}
              onChange={handleOnChange}
              placeholder="Enter your Postcode"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={userInfo.email}
              onChange={handleOnChange}
              placeholder="Enter your Email"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Confirm Email</Form.Label>
            <Form.Control
              name="confEmail"
              type="confEmail"
              value={userInfo.confEmail}
              onChange={handleOnChange}
              placeholder="Enter your Confirm Email"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Country Code</Form.Label>
            <Form.Control
              name="countryCode"
              type="countryCode"
              value={userInfo.countryCode}
              onChange={handleOnChange}
              placeholder="Enter your country"
              style={{ maxWidth: 500 }}
            />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNumber"
              type="phoneNumber"
              value={userInfo.phoneNumber}
              onChange={handleOnChange}
              placeholder="Enter your Phone Number"
              style={{ maxWidth: 500 }}
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
        <div className="container">
          {/* <StripeCheckout
            token={handleOnPayment}
            stripeKey={process.env.REACT_APP_STRIP_KEY}
            name="Pay by card "
            amount={product.total}
          > */}

          {/* </StripeCheckout> */}
        </div>
      </DefaultLayout>
    </div>
  );
};

export default TempCart;
