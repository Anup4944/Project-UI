import React from "react";
import AddCategoryForm from "../../components/add-category-form/AddCategoryForm";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { ListGroup } from "react-bootstrap";
import "./Category.css";

const Category = () => {
  return (
    <div className="dash" id="dashboard">
      <DefaultLayout>
        <AddCategoryForm />
        <hr />
        <div className="display-cat">
          <ListGroup className="listgroup">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Category;
