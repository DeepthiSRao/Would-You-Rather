import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./LoginPage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => ({
    isLoggedIn: state.authedUser !== null,
  }));

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <LoginPage />
        )
      }
    />
  );
};

export default PrivateRoute;
