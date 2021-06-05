import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCat } from "../../pages/product/ProductAction";
import  "./ListCategory.css"

const ListCategory = () => {
  const dispatch = useDispatch();
  let { slug } = useParams();

  const { categoryList } = useSelector((state) => state.category);
  const { currentViewList } = useSelector((state) => state.product);

  const selectedCat = categoryList.filter((cat) => cat.slug === slug);
  const catId = selectedCat[0]?._id;

  useEffect(() => {
    catId && dispatch(getProductsByCat(catId));
  }, [dispatch, catId]);

  return (
    <div className="container">
      <h1 className="main">
        {" "}
        Here are the products that fall under this category.
      </h1>
      {currentViewList?.map((item, i) => {
        return (
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href={`/product/${item.slug}`}>{item.name}</a>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ListCategory;
