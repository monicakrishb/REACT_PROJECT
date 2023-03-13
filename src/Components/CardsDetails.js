import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import register from "../services/API";

const CardsDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log(id, useParams());
  const getData = async () => {
    try {
      const res = (await register.details()).data;
      setData(res);
      console.log(res);
    } catch (err) {
      toast.warning("no action");
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
