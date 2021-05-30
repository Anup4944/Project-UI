import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCat } from "../../pages/product/ProductAction";

const ListCategory = () => {
  const dispatch = useDispatch();
  let { slug } = useParams();

  const { categoryList } = useSelector((state) => state.category);
  const { currentViewList } = useSelector((state) => state.product);

  const selectedCat = categoryList.filter((cat) => cat.slug === slug);
  const catId = selectedCat[0]?._id;
  console.log(currentViewList);

  useEffect(() => {
    catId && dispatch(getProductsByCat(catId));
  }, [dispatch, catId]);

  return (
    <div className="container">
      {currentViewList?.map((item,i) =>{
        <div>
          Here are the products that fall under this category
      <ul>
        <li>{currentViewList.item}</li>
      </ul>
        </div>
      })}
      
    </div>
  );
};

export default ListCategory;
