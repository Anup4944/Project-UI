import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ListCategory from "../../components/list-category/ListCategory";
import "./Category.css";

const Category = () => {
  return (
    <div className="dash" id="dashboard">
      <DefaultLayout>
        {" "}
        <ListCategory />
      </DefaultLayout>
    </div>
  );
};

export default Category;
