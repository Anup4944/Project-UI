import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


const ListCategory = () => {
  let { slug } = useParams();
  

  return (
    <div className="container">
      Here are category
    </div>
  );
};

export default ListCategory;
