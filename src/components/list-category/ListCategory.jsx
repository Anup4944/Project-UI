import React, { useEffect } from "react";
import { getCategories } from "../../pages/category/CategoryAction";

import { useSelector, useDispatch } from "react-redux";

const ListCategory = () => {
  const dispatch = useDispatch();

  const { isLoading, categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="container">
      
      {categoryList?.map((item, i) => {
        return(
          <div>
          Category Name : {item.name}
          <br />
        </div>
        )
       
      })}
    </div>
  );
};

export default ListCategory;
