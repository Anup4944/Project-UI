import "./App.css";
import React from "react";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

import Footer from "./components/partials/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PasswordReset from "./pages/password-reset/PasswordReset";
import CreateUser from "./pages/create-user/CreateUser";
import Product from "./pages/product/Product";
import PurchaseHistory from "./pages/purchase-history/PurchaseHistory";
import CheckOutPage from "./pages/check-out-page/CheckOutPage";
import Category from "./pages/category/Category";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/phistory">
              <PurchaseHistory />
            </Route>

            <Route path="/category">
              <Category />
            </Route>

            <Route path="/checkout">
              <CheckOutPage />
            </Route>
            <Route path="/reset-password">
              <PasswordReset />
            </Route>
            <Route path="/create-user">
              <CreateUser />
            </Route>

            <Route path="/">
              <Login />
            </Route>

            <Route path="*">
              <h1>404 Page not found</h1>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
