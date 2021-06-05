import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { getProducts } from "../../pages/product/ProductAction";
import { Image, Button, Card } from "react-bootstrap";
import "./Dashboard.css";
import { Link, useHistory } from "react-router-dom";

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
        <h1 className="jumbotron jumbotron-fluid d-flex justify-content-center" >Todays deal</h1>
        {productList?.map((item, i) => {
          return (
            <div className="container " style={{ maxWidth: "350px" }}>
              <br />
              Product Name : <a href={`/product/${item.slug}`}>{item.name}</a>
              <br />
              <Link to={`/product/${item.slug}`}>
                <a className="btn btn-info">View more</a>
              </Link>
              <Image src={item.images[0]} />
              <br />
            </div>
          );
        })}
      </DefaultLayout>
    </div>
  );
};

export default Dashboard;
