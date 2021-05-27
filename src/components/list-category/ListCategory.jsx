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

  console.log(slug);

  useEffect(() => {
    catId && dispatch(getProductsByCat(catId));
  }, [dispatch, catId]);

  return (
    <div className="container">
      {currentViewList?.map((row, i) => {
        return <div>{row.name}</div>;
      })}
    </div>
  );
};

export default ListCategory;
