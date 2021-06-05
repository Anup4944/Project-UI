import React from "react";
import { Jumbotron } from "react-bootstrap";
import Header from "../partials/Header";

import "./DefaultLayout.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="dlayout">
      <Header />
      <Jumbotron>{children}</Jumbotron>
    </div>
  );
};

export default DefaultLayout;
