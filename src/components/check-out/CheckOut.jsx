import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeFromCart } from "../../pages/check-out-page/CheckOutAction";

export const CheckOut = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.checkOut);

  return (
    <Container>
      <h1>Your cart summary :</h1>
      {cart.length &&
        cart.map((item, i) => {
          return (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Remove</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td></td>
                  <td>
                    {" "}
                    <Button onClick={() => dispatch(removeFromCart(item._id))}>
                      <RiDeleteBinLine />
                    </Button>
                  </td>
                  <td>{item.salePrice}</td>
                </tr>

                <Button variant="danger">Proceed to Payment</Button>
              </tbody>
            </Table>
          );
        })}
    </Container>
  );
};

export default CheckOut;
