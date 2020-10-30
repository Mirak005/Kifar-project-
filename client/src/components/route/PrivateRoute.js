import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const state = useSelector((state) => state.authReducer);
  if (state.isLoading) {
    return <h1>Loaaading</h1>;
  } else if (!state.isAuth) {
    return <Redirect to="/" />;
  } else {
    return <Route component={Component} {...rest} />;
  }
};

export default PrivateRoute;
