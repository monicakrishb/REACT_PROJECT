import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import Table from "react-bootstrap/esm/Table";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { setCount } from "../Redux/Reduce/Cartcount";

const Header = () => {
  const [productdata, setProductdata] = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  const dispatch = useDispatch();

  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/cartDetails");
    setProductdata(response.data);
    console.log("value", response.data);
    dispatch(setCount(response.data));
  };

  const store = sessionStorage.getItem("useremail");
  const [cartlength, setCartlength] = useState("");

  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cart.count);
  // console.log(getdata);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    axios.delete("http://localhost:8000/cartDetails/" + id);
    setTimeout(() => {
      loadData();
    }, 500);
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  const navigate = useNavigate();
  const value = sessionStorage.getItem("useremail");

  const handleClickss = () => {
    sessionStorage.clear();
    getdata = [];
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const session = sessionStorage.getItem("useremail");

  const Total_Price = productdata
    .filter((e) => {
      if (e.useremail === store) {
        return e;
      }
    })
    .reduce((a, b) => a + b.price * b.qnty, 0);
  const storeemail = sessionStorage.getItem("useremail");
  const storeuser = sessionStorage.getItem("username");
  function Addqty(element) {
    axios.put("http://localhost:8000/cartDetails/" + element.id, {
      id: element.id,
      rname: element.rname,
      imgdata: element.imgdata,
      address: element.address,
      delimg: element.delimg,
      somedata: element.somedata,
      price: element.price,
      rating: element.rating,
      arrimg: element.arrimg,
      qnty: 1 + element.qnty,
      useremail: storeemail,
      username: storeuser,
    });
    setTimeout(() => {
      loadData();
    }, 400);
  }
 

  function Subqty(element) {
    axios.put("http://localhost:8000/cartDetails/" + element.id, {
      id: element.id,
      rname: element.rname,
      imgdata: element.imgdata,
      address: element.address,
      delimg: element.delimg,
      somedata: element.somedata,
      price: element.price,
      rating: element.rating,
      arrimg: element.arrimg,
      qnty: element.qnty - 1,
      useremail: storeemail,
      username: storeuser,
    }); // dispatch(DLT(id));
    setTimeout(() => {
      loadData();
    }, 400);
  }

  const bag = getdata.filter((e) => {
    if (store == e.useremail) {
      return e;
    }
  });
  

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
            {value === null ? (
              <Link to="/login" className="Navlink">
                Login
              </Link>
            ) : (
              <Link onClick={handleClickss} id="log">
                Logout{" "}
              </Link>
            )}
            {value === null ? (
              <Link to="/signup" className="Navlink">
                Signup
              </Link>
            ) : (
              ""
            )}
            <Badge
              className="cart"
              badgeContent={bag.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i
                className="fa fa-shopping-cart "
                style={{ fontSize: 25, cursor: "pointer" }}
              ></i>
            </Badge>
            <Link
              to="/orders"
              className="text-decoration-none text-dark"
              id="order"
            >
              Orders
            </Link>
            {/* {value === null ? "":(
            <Link 
              to="/profile"
              className="text-decoration-none text-dark"
              id="profile"
            >
              <span  class="material-symbols-outlined">account_circle</span>
            </Link>)} */}
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
              <Table id="carttab">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Book Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata
                    .filter((e) => {
                      if (store === e.useremail) {
                        return e;
                      }
                    })
                    .map((e) => (
                      <>
                        <tr>
                          <td key={e.id}>
                            <NavLink onClick={handleClose}>
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
                            <button
                              onClick={e.qnty == 1 ? 1 : () => Subqty(e)}
                              className="btn"
                            >
                              -
                            </button>
                            <span>Quantity : {e.qnty}</span>
                            <button
                              onClick={() => {
                                Addqty(e);
                              }}
                              className="btn"
                            >
                              +
                            </button>
                            <p
                              style={{
                                color: "blue",
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
                              color: "blue",
                              fontSize: 18,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          </td>
                        </tr>
                      </>
                    ))}
                  <p className="text-center" id="total">
                    Total :₹ {Total_Price}
                  </p>
                </tbody>
                <div>
                  {" "}
                  {bag.length > 0 ? (
                    <a href="/checkout">
                      <button id="checkout">Proceed to Buy</button>
                    </a>
                  ) : (
                    " "
                  )}
                </div>
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
              <p style={{ fontSize: 18 }}></p>
              <h6>Your carts is empty</h6>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
