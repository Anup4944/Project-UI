import React, { useEffect, useRef } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProducts } from "../../pages/product/ProductAction";
import { Image, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { addToCart } from "../../pages/check-out-page/CheckOutAction";

export const SingleProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const qtyRef = useRef();
  const { currentViewList } = useSelector((state) => state.product);
  let { slug } = useParams();

  useEffect(() => {
    slug && dispatch(getSingleProducts(slug));
  }, [dispatch, slug]);

  const handleOnClick = () => {
    const buyinggQty = qtyRef.current.value;

    const itemToCart = {
      buyinggQty,
      currentViewList,
    };

    dispatch(addToCart(itemToCart))
  };

  const qtyList = new Array(currentViewList?.qty).fill("itm");

  return (
    <DefaultLayout>
      <div>
        <div className="container">
          <br />
          Product Name : {currentViewList.name} <br />
          Product Price : {currentViewList.price} <br />
          Product Sale Price : {currentViewList.salePrice} <br />
          Product Sale End Date : {currentViewList.saleEndDate} <br />
          Product Qty : {currentViewList.qty} <br />
          Product Description : {currentViewList.description} <br />
          {/* Product Category : {currentViewList.categories} */}
          
          <br />
          <Image src={currentViewList.images} style={{ maxWidth: 500 }} />
          <br />
          <select name="qty" id="" ref={qtyRef} style={{ maxWidth: "120px"}}>
            <option value="1">Select qty</option>
            {qtyList.map((item, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>{" "}
          <br /> <br />
          <Button onClick={handleOnClick} style={{ maxWidth: "200px"}}>Add to cart </Button>
        </div>
      </div>
    </DefaultLayout>
  );
};
