// export default ProtectedRoute;
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, redirect, ...rest }) => {
  const key = sessionStorage.getItem("WT");

  return (
    <Route
      {...rest}
      render={(props) =>
        key === "null" || key === "" || key === undefined ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
