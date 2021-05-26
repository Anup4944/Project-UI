import React, { useEffect } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../pages/product/ProductAction";
import { Image, Button } from "react-bootstrap";
import { getSingleProd } from "../../pages/single-product-page/SingleProdAction";

export const SingleProduct = () => {
  const dispatch = useDispatch();

  const { isLoading, productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <DefaultLayout>
        {productList?.map((item, i) => {
          return (
            <div className="container">
              <br />
              Product Name : {item.name} <br />
              Product Price : {item.price} <br />
              Product Sale End Date : {item.saleEndDate} <br />
              Product Qty : {item.qty} <br />
              Product Description : {item.description} <br />
              Product Category : {item.categories}
              <br />
              <Image src={item.images[0]} />
              <br />
              <Button>Add to cart </Button>
            </div>
          );
        })}
      </DefaultLayout>
    </div>
  );
};
