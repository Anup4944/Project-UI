import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table } from "react-bootstrap";
import { addToCart } from "../../pages/check-out-page/CheckOutAction";

export const CheckOut = () => {
  const dispatch = useDispatch();
  // const { cart } = useSelector((state) => state.checkOut);

  useEffect(() => {
    dispatch(addToCart());
  }, [dispatch]);

  return (
    <Container>
      <h1>Your cart summary :</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th> Product </th>
            <th>Qty</th>
            <th>Remove</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default CheckOut;
