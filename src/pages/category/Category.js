import React from "react";
import AddCategoryForm from "../../components/add-category-form/AddCategoryForm";
import DefaultLayout from "../../components/layout/DefaultLayout";

const Category = () => {
  return (
    <div className="dash" id="dashboard">
      <DefaultLayout>
        <AddCategoryForm />
        <br />
        <div className="display-cat"></div>
      </DefaultLayout>
    </div>
  );
};

export default Category;
