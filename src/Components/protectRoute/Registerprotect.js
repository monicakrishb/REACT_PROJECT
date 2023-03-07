import React from "react";
import { Navigate } from "react-router-dom";

const Registerprotect = ({ children }) => {
  const isAuth = sessionStorage.getItem("useremail");
  console.log(isAuth);
  if (!isAuth) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
};
export default Registerprotect;
