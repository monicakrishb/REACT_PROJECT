import React, { useState, useEffect } from "react";
import "./Checkout.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [data, setData] = useState([]);
  const session = sessionStorage.getItem("useremail");

  const [logindata, setLogindata] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/cartDetails");
      const response = await axios.get(
        `http://localhost:8000/user?email=${session}`
      );
      setData(res.data);
      setLogindata(response.data);
      setinstanceid(response.data[0].id);
      setinstanceemail(response.data[0].email);
      setinstanceuser(response.data[0].name);

      setinstancephone(response.data[0].phone);
      setinstancepassword(response.data[0].password);
      setinstancecountry(response.data[0].country);
      setinstancegender(response.data[0].gender);

      setinstanceaddress(response.data[0].address);
    } catch (err) {
      console.log("no action");
    }
  };
  const [instancecountry, setinstancecountry] = useState("");
  const [instanceusername, setinstanceuser] = useState("");
  const [instanceid, setinstanceid] = useState("");
  const [instancephone, setinstancephone] = useState("");
  const [instanceemail, setinstanceemail] = useState("");
  const [instancepassword, setinstancepassword] = useState("");
  const [instanceaddress, setinstanceaddress] = useState("");
  const [instancegender, setinstancegender] = useState("");

  const navigate = useNavigate();
  const Update = () => {
    zero == 0 ? setZero(1) : setZero(0);
    axios
      .put(`http://localhost:8000/user/${instanceid}`, {
        id: instanceid,
        name: instanceusername,
        password: instancepassword,
        email: instanceemail,
        phone: instancephone,
        country: instancecountry,
        address: instanceaddress,
        gender: instancegender,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const Total_Price = data
    .filter((e) => {
      if (e.useremail === session) {
        return e;
      }
    })
    .reduce((a, b) => a + b.price * b.qnty, 0);

  const Orderfunct = () => {
    data
      .filter((e) => {
        if (e.useremail === session) {
          return e;
        }
      })
      .map((e) =>
        axios.post("http://localhost:8000/orderDetails", {
          rname: e.id,
          imgdata: e.imgdata,
          address: e.address,
          delimg: e.delimg,
          somedata: e.somedata,
          price: e.price,
          rating: e.rating,
          arrimg: e.arrimg,
          qnty: e.qnty,
          useremail: e.useremail,
          username: e.username,
          productname: e.rname,
          Date: new Date().toLocaleDateString(),
        })
      );

    navigate("/placeorder");
  };

  const [zero, setZero] = useState(1);
  return (
    <div>
      {zero == 0 ? (
        <div>
          <form>
            <div className="card">
              <div>
                <label>Address</label>
                <input
                  type="text"
                  data-testId="add-test"
                  value={instanceaddress}
                  onChange={(e) => {
                    setinstanceaddress(e.target.value);
                  }}
                />
              </div>

              <div>
                <label>Country</label>
                <select
                  value={instancecountry}
                  type="text"
                  data-testId="country-test"
                  onChange={(e) => {
                    setinstancecountry(e.target.value);
                  }}
                >
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="singapore">Singapore</option>
                </select>
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="text"
                  data-testId="ph-test"
                  onChange={(e) => {
                    setinstancephone(e.target.value);
                  }}
                  value={instancephone}
                />
              </div>
              <div>
                <button className="btn btn-primary" onClick={Update}>
                  Submit changes
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        " "
      )}

      <br />
      <br />

      <br />

      {zero == 1 ? (
        <div className="checkout">
          <div className="card form">
            {logindata
              .filter((e) => {
                if (e.email === session) {
                  return e;
                }
              })
              .map((val) => (
                <>
                  <strong>{val.id+" "+val.name}</strong>
                  <h6>{val.address}</h6>
                  <h6>{val.country}</h6>
                  <h6>{val.phone}</h6>
                </>
              ))}
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

                <tbody>
                  {data
                    .filter((e) => {
                      if (e.useremail === session) {
                        return e;
                      }
                    })
                    .map((e) => (
                      <>
                        <tr>
                          <td>{e.rname}</td>
                          <td>{e.price}</td>

                          <td>{e.qnty}</td>
                          <td>{e.price}</td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
              <div id="grand">
                <div>
                  <strong>Total amount to be paid :</strong>{" "}
                </div>
                <div>
                  <strong id="amount">
                    <span class="material-symbols-outlined">
                      currency_rupee
                    </span>
                    {Total_Price}
                  </strong>
                </div>
              </div>
            </div>

            <div>
              <button
                className="btn btn-primary btndeliver"
                onClick={Orderfunct}
              >
                Deliver to this address
              </button>
            </div>

            <div>
              <button
                className="btn btn-primary btndeliver"
                onClick={() => (zero == 0 ? setZero(1) : setZero(0))}
              >
                Edit Address
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Checkout;
