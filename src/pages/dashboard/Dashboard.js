import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { getProducts } from "../../pages/product/ProductAction";
import { Image, Button } from "react-bootstrap";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../pages/check-out-page/CheckOutAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <DefaultLayout>
        <h1 className="deal">Todays deal</h1>
        {productList?.map((item, i) => {
          return (
            <div className="container">
              <br />
              Product Name : <a href={`/product/${item.slug}`}>
                {" "}
                {item.name}{" "}
              </a>{" "}
              <br />
              <Image src={item.images[0]} />
              <br />
              <Button onClick={() => dispatch(addToCart(item))}>
                Add to cart{" "}
              </Button>
            </div>
          );
        })}
      </DefaultLayout>
    </div>
  );
};

export default Dashboard;
