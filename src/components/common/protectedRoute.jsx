import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const user = auth.getCurrentUser();
  return (
    <Route
      {...rest}
      render={props => {
        if (!user)
          return (
            <Redirect
              to={{
                pathname: "/home"
              }}
            />
          );
        return Component ? <Component {...props} user={user} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
