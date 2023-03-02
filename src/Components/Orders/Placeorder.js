import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCount } from "../../Redux/Reduce/Cartcount";
import register from "../../services/API";
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
    const response = (await register.placeorder()).data;
    console.log("value", response);
    dispatch(setCount(response));
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

  const Delete = async () => {
    arraycd.forEach(async (id) => await register.placedelete(id));
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
      <h6 style={{ marginLeft: "53%" }}>Order is confirmed </h6>
      <button
        className="btn btn-primary"
        onClick={Delete}
        style={{ marginLeft: "42%" }}
        id="confirmorder"
      >
        confirm order
      </button>
    </div>
  );
};
