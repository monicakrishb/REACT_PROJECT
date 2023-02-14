import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const store = sessionStorage.getItem("username");
var user = " ";
if (store) {
  user = { login: true };
} else {
  user = { login: false };
}
const authuser = () => {
  return user && user.login;
};
const Protect = () => {
  const isAuth = authuser();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
export default Protect;
