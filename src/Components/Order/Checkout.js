
import React, { useState,useEffect } from "react";

import axios from "axios";
function Checkout() {

    const [data,setData]=useState([]);

    const getData = async () => {
        try {
          const res = await axios.get("http://localhost:8000/cartDetails");
          setData(res.data);
          
        } catch (err) {
          alert("no action");
        }
      };
      useEffect(() => {
        getData();
      }, []);

      const session=sessionStorage.getItem("useremail")

      const Total_Price = data.filter((e) => {
        if (e.useremail === session) {
          return e;
        }
      })
      .reduce((a, b) => a + b.price * b.qnty, 0);

        
  return (
    
    <div>
      <br />
      <br />

      <br />

      <div className="col-md-7">
        <div className="card">
          <div className="card-header">
            <h4>Basic Information</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label> First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                  />
                  <small className="text-danger"></small>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label> Last Name</label>
                  <input type="text" name="lastname" className="form-control" />
                  <small className="text-danger"></small>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label> Phone Number</label>
                  <input type="number" name="phone" className="form-control" />
                  <small className="text-danger"></small>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label> Email Address</label>
                  <input type="email" name="email" className="form-control" />
                  <small className="text-danger"></small>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-3">
                  <label> Full Address</label>
                  <textarea
                    rows="3"
                    name="address"
                    className="form-control"
                  ></textarea>
                  <small className="text-danger"></small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label>City</label>
                  <input type="text" name="city" className="form-control" />
                  <small className="text-danger"></small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label>State</label>
                  <input type="text" name="state" className="form-control" />
                  <small className="text-danger"></small>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group text-end">
                <button type="button" className="btn btn-primary mx-1">
                  Place Order
                </button>
                {/* <button type="button" className="btn btn-primary mx-1">
                  Pay by Razorpay
                </button>
                <button type="button" className="btn btn-warning mx-1">
                  Pay Online
                </button> */}
              </div>
            </div>
          </div>
                </div>
                <div className="col-md-5">
            <table className="table table-bordered">

                
              <thead>
                <tr>
                  <th width="50%">Product</th>
                  <th>Price</th>
                  <th>Qty</th>

                  <th>Total</th>
                </tr>
              </thead>
              
              <tbody >
                {data.filter((e)=>{if(e.useremail===session){return e}}).map((e)=>(
                <tr>
                    <td>{e.rname}</td>
                    <td>{e.price}</td>

                    <td>{e.qnty}</td>
                   

                </tr>
                ))}
                <td>{Total_Price}</td>
              </tbody>
            </table>
          </div>

      </div>
    </div>
  );
}

export default Checkout;
