import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeFromCart } from "../../pages/check-out-page/CheckOutAction";
import { FaPlusCircle } from "react-icons/fa";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const CheckOut = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.checkOut);

  return (
    <Container>
      <h1>Your cart summary :</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product</th>
            <th>Available Quantity</th>
            <th>How much do you want?</th>
            <th>Remove</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.length &&
            cart.map((item, i) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>
                    <Button onClick>
                      <FaPlusCircle />{" "}
                    </Button>{" "}
                    {" "}
                    <Button onClick>
                      <AiOutlineMinusCircle />
                    </Button>
                  </td>
                  <td>
                    {" "}
                    <Button onClick={() => dispatch(removeFromCart(item._id))}>
                      <RiDeleteBinLine />
                    </Button>
                  </td>
                  <td>{item.salePrice}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default CheckOut;
