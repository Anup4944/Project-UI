import React from "react";
import { Form } from "react-bootstrap";
import DefaultLayout from "../layout/DefaultLayout";

const ProductSearch = () => {
  return (
    <div>
      <DefaultLayout>
        <Form.Control type="text" placeholder="Search your  products here..." />
      </DefaultLayout>
    </div>
  );
};

export default ProductSearch;
