import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import CardsDetails from "./Components/CardsDetails";
import Cards from "./Components/Cards";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import Protect from "./Components/protectRoute/Protect";
import { ToastContainer } from "react-toastify";
import { Errorpage } from "./Components/Errorpage/ErrorPage";
import Profile from "./Components/pages/Profile";
import Orders from "./Components/Orders/Order";
import Checkout from "./Components/Orders/Checkout";
import { Edit } from "@mui/icons-material";
import { Placeorder } from "./Components/Orders/Placeorder";

function App() {
  return (
    <>
      <Header />
      <ToastContainer theme="colored"></ToastContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/productpage"
          element={
            <Protect>
              <Cards />
            </Protect>
          }
        />
        <Route
          path="/cart/:id"
          element={
            <Protect>
              <CardsDetails />
            </Protect>
          }
        />
        <Route
          path="/orders"
          element={
            <Protect>
              <Orders />
            </Protect>
          }
        />
        <Route
          path="/checkout"
          element={
            <Protect>
              <Checkout />
            </Protect>
          }
        />
        <Route
          path="/placeorder"
          element={
            <Protect>
              <Placeorder />
            </Protect>
          }
        />

        <Route
          path="/profile"
          element={
            <Protect>
              <Profile />
            </Protect>
          }
        />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
