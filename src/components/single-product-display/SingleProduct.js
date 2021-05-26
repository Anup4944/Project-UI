import React, { useEffect } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProducts } from "../../pages/product/ProductAction";
import { Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const dispatch = useDispatch();
  
  let { slug } = useParams();

  const { productList } = useSelector((state) => state.product);
  const { currentViewList } = useSelector((state) => state.product);


  const selectedProd = productList.filter((prod) => prod.slug === slug);
  const prodId = selectedProd[0]?._id;

  useEffect(() => {
    dispatch(getSingleProducts(prodId));
  }, [dispatch, prodId]);

  

  return (
    <div>
      <DefaultLayout>
        {currentViewList?.map((item, i) => {
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
