import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Order.css";

function Orders() {
  const [orderdata, setOrderdata] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/orderDetails");
      setOrderdata(res.data);
    } catch (err) {
      console.log("No action");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const store = sessionStorage.getItem("useremail");

  function Deleteorder(id) {
    axios.delete("http://localhost:8000/orderDetails/" + id);
    setTimeout(() => {
      getData();
    }, 300);
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row ">
        <>
          {orderdata
            .filter((e) => {
              if (e.useremail === store) {
                return e;
              }
            })
            .map((e) => (
              <div id="flex">
                <div>
                  <img src={e.imgdata} id="orderimg"></img>
                </div>
                <div id="line"></div>
                <div className="order">
                  <strong>Ordered on</strong> <br />
                  <strong>{e.Date}</strong>
                </div>
                <div className="order">
                  <strong>Quantity</strong>
                  <br />
                  <strong>{e.qnty}</strong>
                </div>
                <div className="order">
                  <strong>Product name</strong> <br />
                  <strong>{e.productname}</strong>
                </div>
                <div className="order">
                  <strong>Price</strong>
                  <br />
                  <strong>{e.price}</strong>
                </div>

                <div id="cancel">
                  <button
                    className="btn btn-danger"
                    onClick={() => Deleteorder(e.id)}
                  >
                    <h5>Cancel Order</h5>
                  </button>
                </div>
              </div>
            ))}
        </>
      </div>
    </div>
  );
}
export default Orders;
