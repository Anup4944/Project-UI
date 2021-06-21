import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { getProducts } from "../../pages/product/ProductAction";
import { Image, Row, Col, Container } from "react-bootstrap";
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
        <Container>
          <h1
            className="jumbotron jumbotron-fluid d-flex justify-content-center"
            style={{ color: "green", fontSize: "3rem" }}
          >
            Todays deal
          </h1>
          {productList?.map((item, i) => {
            return (
              <div className="container" style={{ maxWidth: 550 }}>
                <Row>
                  <Col>
                    Product Name :{" "}
                    <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    <br />
                    <Link to={`/product/${item.slug}`}>
                      <a className="btn btn-info">View more</a>
                    </Link>
                    <Image src={item.images[0]} style={{ maxHeight: 250 }} />
                    <br />{" "}
                  </Col>
                </Row>
              </div>
            );
          })}
        </Container>
      </DefaultLayout>
    </div>
  );
};

export default Dashboard;
