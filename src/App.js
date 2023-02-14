import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import CardsDetails from "./Components/CardsDetails";
import Cards from "./Components/Cards";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
// import Footer from "./Components/footer";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import Protect from "./Components/protectRoute/Protect";
import { ToastContainer } from "react-toastify";
import Logout from "./Components/pages/Logout";

function App() {
  return (
    <>
      <Header />
      <ToastContainer theme="colored"></ToastContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route element={<Protect />}>
          <Route path="/productpage" element={<Cards />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
