import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Table,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  removeFromCart,
  addingItemsInsideCart,
  subsItemsInsideCart,
} from "../../pages/check-out-page/CheckOutAction";
import { FaPlusCircle } from "react-icons/fa";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const CheckOut = () => {
  const dispatch = useDispatch();
  
  const { cart } = useSelector((state) => state.checkOut);
 
  const [num, setNum] = useState(0)

  const incNum =() =>{
    setNum(num+1)
  }
  const decNum =() =>{
    setNum(num-1)
  }

  return (
    <Container>
      <h1>Your cart summary :</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product</th>

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

                  <td className="d-flex centre centre">
                    <Button onClick={incNum}>
                      <FaPlusCircle />
                    </Button>
                    {/* <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select number of item 
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}
                    {num}

                    <Button onClick={decNum}>
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
