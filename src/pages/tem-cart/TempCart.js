import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import axios from "axios";

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

    const result = await axios.post("http://localhost:5001/api/v1/payment", data, {
      headers: {
        "Content-Type ": "application/json",
      },
    });

    console.log(result);
  };

  return (
    <div>
      Name : Anup total item : 10 total amount: 1500
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
    </div>
  );
};

export default TempCart;
