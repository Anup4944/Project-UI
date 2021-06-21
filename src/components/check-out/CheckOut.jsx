import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeFromCart } from "../../pages/check-out-page/CheckOutAction";
import { useHistory } from "react-router-dom";
import "./CheckOut.css";

export const CheckOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { cart } = useSelector((state) => state.checkOut);


  const cartTotal = cart.reduce((iniVal, row) => {
    return iniVal + (row.buyinggQty * row.currentViewList.salePrice);
  }, 0);

  return (
    <Container>
      <h1 className="main-div">Your cart summary :</h1>
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
          {cart.length &&
            cart.map((item, i) => {
              const finalPrice =
                item.currentViewList.salePrice * item.buyinggQty;
              return (
                <tr>
                  <td>{item.currentViewList.name}</td>

                  <td>{item.buyinggQty}</td>
                  <td>
                    {" "}
                    <Button
                      onClick={() =>
                        dispatch(removeFromCart(item.currentViewList._id))
                      }
                    >
                      <RiDeleteBinLine />
                    </Button>
                  </td>
                  <td> $ {finalPrice}</td>
                </tr>
              );
            })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Final Price : $ {cartTotal}</td>
          </tr>
        </tbody>
      </Table>
      <Button
        variant="success"
        style={{ maxWidth: 300 }}
        onClick={() => {
          history.push("/temp-checkout");
        }}
      >
        {" "}
        Proceed to check out
      </Button>
    </Container>
  );
};

export default CheckOut;
