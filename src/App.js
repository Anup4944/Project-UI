import "./App.css";
import React from "react";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

import Footer from "./components/partials/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PasswordReset from "./pages/password-reset/PasswordReset";
import CreateUser from "./pages/create-user/CreateUser";
import Product from "./pages/product/Product";
import CheckOutPage from "./pages/check-out-page/CheckOutPage";
import Category from "./pages/category/Category";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { SingleProd } from "./pages/single-product-page/SingleProd";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/product">
              <Product />
            </Route>

            <Route exact path="/category">
              <Category />
            </Route>

            <Route exact path="/category/:slug">
              <Category/>
            </Route>

            <Route exact path="/product/:slug">
              <SingleProd/>
            </Route>



            {/* <Route exact path="/checkout">
              <CheckOutPage />
            </Route> */}

            <PrivateRoute exact path="/checkout">
              <CheckOutPage />
            </PrivateRoute>

            <Route exact path="/reset-password">
              <PasswordReset />
            </Route>

            <Route exact path="/create-user">
              <CreateUser />
            </Route>

            <Route exact path="/">
              <Dashboard />
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
