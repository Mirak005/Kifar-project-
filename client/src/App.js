import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppNavbar from "./components/AppNavbar";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Propos from "./components/pages/Propos";
import ProposUser from "./components/pages/ProposUser";

import PrivateRoute from "./components/route/PrivateRoute";
import { getAuthUser } from "./js/actions/authActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);
  if (isLoading) {
    return <h1>Spinner....</h1>;
  }
  return (
    <BrowserRouter>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/propos" component={Propos} />
        <PrivateRoute path="/proposuser/:id" component={ProposUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
