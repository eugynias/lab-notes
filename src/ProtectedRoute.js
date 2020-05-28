import React from "react";
import { Route, Redirect } from "react-router-dom";
//import Auth from "./Auth";
import Router from "./Router";

export const ProtectedRoute = ({
  component: Component,user,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {//Propiedad de react router
        if (user){
        return (<Component {...props} user={user} />)
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
