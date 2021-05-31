import React, { useEffect } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProducts } from "../../pages/product/ProductAction";
import { Image, Button } from "react-bootstrap";
import { useParams,useHistory } from "react-router-dom";

export const SingleProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  let { slug } = useParams();
  const handleOnClick = (e) => {
    e.preventDefault();
    history.push("/checkout");
  };
  

  const { currentViewList } = useSelector((state) => state.product);

  useEffect(() => {
    slug && dispatch(getSingleProducts(slug));
  }, [dispatch, slug]);

  return (
    <DefaultLayout>
      <div>
        <div className="container">
          <br />
          Product Name : {currentViewList.name} <br />
          Product Price : {currentViewList.price} <br />
          Product Sale End Date : {currentViewList.saleEndDate} <br />
          Product Qty : {currentViewList.qty} <br />
          Product Description : {currentViewList.description} <br />
          Product Category : {currentViewList.categories}
          <br />
          <Image src={currentViewList.images} />
          <br />
          <Button onClick={handleOnClick}>Add to cart </Button>
        </div>
      </div>
    </DefaultLayout>
  );
};
