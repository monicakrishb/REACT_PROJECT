import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
const CardsDetails = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cart.count);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/bookDetails");
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      alert("no action");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const storeemail = sessionStorage.getItem("useremail");
  const storeuser = sessionStorage.getItem("username");
  const Add = (element) => {
    axios.post("http://localhost:8000/cartDetails", {
      rname: element.rname,
      imgdata: element.imgdata,
      address: element.address,
      delimg: element.delimg,
      somedata: element.somedata,
      price: element.price,
      rating: element.rating,
      arrimg: element.arrimg,
      qnty: 1,
      useremail: storeemail,
      username: storeuser,
    });
  };

  return (
    <>
    <h4 id="detail">Book Details page</h4>
      <div className="container mt-2">
        <section className="container mt-3">
          <div className="iteamsdetails">
            {data
              .filter((e) => {
                if (e.id == id) {
                  return e;
                }
              })
              .map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.imgdata} alt="" />
                    </div>

                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p>
                              {" "}
                              <strong>Book</strong> : {ele.rname}
                            </p>
                            <p>
                              {" "}
                              <strong>Price</strong> : ₹{ele.price}
                            </p>
                            <p>
                              {" "}
                              <strong>Author</strong> : {ele.address}
                            </p>

                            <div
                              className="mt-5 d-flex justify-content-between align-items-center"
                              style={{
                                width: 100,
                                cursor: "pointer",
                                background: "#ddd",
                                color: "#111",
                              }}
                            ></div>
                          </td>
                          <td>
                            <p>
                              <strong>Rating :</strong>{" "}
                              <span
                                style={{
                                  background: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "5px",
                                }}
                              >
                                {ele.rating} ★{" "}
                              </span>
                            </p>
                            <p>
                              <strong>Order Review :</strong>{" "}
                              <span>{ele.somedata} </span>
                            </p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                    <NavLink to="/productpage" id="back">
                      <span className="material-symbols-outlined">
                        {" "}
                        arrow_back_ios{" "}
                      </span>{" "}
                      Back to cart{" "}
                    </NavLink>
                  </>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
