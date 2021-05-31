import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import {addToCart} from "../../pages/check-out-page/CheckOutAction"



export const CheckOut = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCart());
  }, [dispatch]);
  
  return <Container>This is your check out page.</Container>;
};

export default CheckOut;
