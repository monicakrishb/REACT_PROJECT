import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import Table from "react-bootstrap/esm/Table";
import "./Header.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "./actions/action";
import { Link } from "react-router-dom";

const Header = () => {
  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  const navigate=useNavigate()
  const value=sessionStorage.getItem("username");


  const handleClickss=()=>{
    
 sessionStorage.clear()
 setTimeout(() => {
 navigate('/')  
 }, (500));
 
  };

  return (
    <>
      <Navbar
        className="nav navbar-light bg-light shadow p-3 mb-5 bg-white rounded"
        id="nav"
      >
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none text-dark">
              Home
            </Link>
          </Nav>
          <div className="Navbar">
            {value===null ? (<Link to="/login" className="Navlink">
              Login
            </Link>) : <Link onClick={handleClickss}>Logout</Link>}
             {value===null ? (
            <Link to="/signup" className="Navlink">
              Signup
            </Link>):""
}
            <Badge
              badgeContent={getdata.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i
                class="fa fa-shopping-cart"
                style={{ fontSize: 25, cursor: "pointer" }}
              ></i>
            </Badge>
          </div>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Book Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹{e.price}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 18,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>

                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 18,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <span class="material-symbols-outlined">
                              delete
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center" id="total">Total :₹ {price}</p>
                </tbody>
           <div >  <button id="checkout" >Checkout</button></div> 
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 18,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 18 }}>
                <h6>Your carts is empty</h6>
              </p>
            </div>
          )}
        </Menu>
    
      </Navbar>
      
    </>
  );
};

export default Header;
