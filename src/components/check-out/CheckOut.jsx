import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeFromCart } from "../../pages/check-out-page/CheckOutAction";
import "./CheckOut.css";

export const CheckOut = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.checkOut);

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
                  <td>{finalPrice}</td>
                </tr>
              );
            })}
             
        </tbody>
       
      </Table>
      <Button variant="success"> Proceed to check out</Button>
    </Container>
    
  );
};

export default CheckOut;
