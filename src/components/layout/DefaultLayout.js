import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

import "./DefaultLayout.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="dlayout">
      <Header />

      {children}
    </div>
  );
};

export default DefaultLayout;
