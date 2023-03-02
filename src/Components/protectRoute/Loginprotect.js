import React from "react";
import { Navigate } from "react-router-dom";

const Loginprotect = ({ children }) => {
  const isAuth = sessionStorage.getItem("useremail");
  console.log(isAuth);
  if (!isAuth) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
};
export default Loginprotect;
