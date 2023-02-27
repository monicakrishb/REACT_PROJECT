import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCount } from "../../Redux/Reduce/Cartcount";
export const Placeorder = () => {
  const getdata = useSelector((state) => state.cart.count);

  const [data, setData] = useState([]);
  const getData = async () => {
    setData(getdata);
  };

  const store = sessionStorage.getItem("useremail");
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);
  const deletedata = async () => {
    const response = await axios.get("http://localhost:8000/cartDetails");
    console.log("value", response.data);
    dispatch(setCount(response.data));
  };

  const arraycd = data
    .filter((e) => {
      if (e.useremail == store) {
        return e;
      }
    })
    .map((e) => e.id);
  console.log(arraycd);
  const navigate = useNavigate();

  const Delete = () => {
    arraycd.forEach((id) =>
      axios.delete("http://localhost:8000/cartdetails/" + id)
    );
    deletedata();
    navigate("/");
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <img
        src={require("./../assert/correcttick.gif")}
        style={{ width: "400px", height: "400px", marginLeft: "35%" }}
      />
      <h6 style={{ marginLeft: "43%" }}>Order is confirmed </h6>
      <button onClick={Delete} style={{ marginLeft: "47%" }}>
        confirm order
      </button>
    </div>
  );
};
