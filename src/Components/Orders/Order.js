import React, { useState } from "react";
import { useEffect } from "react";
import "./Order.css";
import register from "../../services/API";

function Orders() {
  const [orderdata, setOrderdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await register.order();
      setOrderdata(res.data);
    } catch (err) {
      console.log("No action");
    }
  };
  
  const store = sessionStorage.getItem("useremail");

  async function Deleteorder(id) {
    await register.orderid(id);
    getData();
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
                <div className="orderimg">
                  <img src={e.imgdata} id="orderimg"></img>
                </div>
                <div id="line"></div>

                <div className="order">
                  <strong>Ordered on</strong> <br />
                  <p>{e.Date}</p>
                </div>
                <div className="order">
                  <strong>Quantity</strong>
                  <br />
                  <p>{e.qnty}</p>
                </div>
                <div className="order " id="pname">
                  <strong>Product name</strong> <br />
                  <p>{e.productname}</p>
                </div>
                <div className="order">
                  <strong>Price</strong>
                  <br />
                  <p>{e.price}</p>
                </div>

                <div id="cancel">
                  <button
                    className="btn btn-danger"
                    onClick={() => Deleteorder(e.id)}
                  >
                    <h6 id="cancelorder">Cancel Order</h6>
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
