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
import Orders from "./Components/Order/Order";
import Checkout from "./Components/Order/Checkout";
import { Edit } from "@mui/icons-material";
import { Placeorder } from "./Components/Order/Placeorder";

function App() {
  return (
    <>
      <Header />
      <ToastContainer theme="colored"></ToastContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Protect />}>
          <Route path="/productpage" element={<Cards />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
