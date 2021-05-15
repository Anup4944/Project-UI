import "./App.css";
import React from "react";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import Footer from "./components/partials/Footer";
// import DefaultLayout from "./components/layout/DefaultLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PasswordReset from "./pages/password-reset/PasswordReset";
import CreateUser from "./pages/create-user/CreateUser";
// import Route from "./components/private-route/PrivateRoute";
// import { Provider } from "react-redux";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/category">
              <Category />
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
