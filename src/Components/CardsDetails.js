import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "./actions/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((element) => {
              return (
                <>
                  <div className="items_img">
                    <img src={element.imgdata} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            {" "}
                            <strong>Book</strong> : {element.rname}
                          </p>
                          <p>
                            {" "}
                            <strong>Price</strong> : ₹{element.price}
                          </p>
                          <p>
                            {" "}
                            <strong>Author</strong> : {element.address}
                          </p>
                          <p>
                            {" "}
                            <strong>Total</strong> :₹{" "}
                            {element.price * element.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                element.qnty <= 1
                                  ? () => dlt(element.id)
                                  : () => remove(element)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{element.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(element)}
                            >
                              +
                            </span>
                          </div>
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
                              {element.rating} ★{" "}
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{element.somedata} </span>
                          </p>
                          <p>
                            <strong>Remove :</strong>
                      
                            <span
                              class="material-symbols-outlined"
                              onClick={() => dlt(element.id)}
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                              <span class="material-symbols-outlined">
                                delete
                              </span>
                            </span>{" "}
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                  <NavLink to="/productpage" id="back">
                    <span class="material-symbols-outlined">
                      arrow_back_ios
                    </span>
                    Back to all products
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
