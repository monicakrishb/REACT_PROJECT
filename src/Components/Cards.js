import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "./actions/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setCount } from "../Redux/Reduce/Cartcount";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/bookDetails");
      setData(res.data);
      setLoading(true);
    } catch (err) {
      alert("no action");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const send = (e) => {
    dispatch(ADD(e));
  };
  const storeemail = sessionStorage.getItem("useremail");

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
      qnty: 1 + element.qnty,
      useremail: storeemail,
    });
  };
  const navigate = useNavigate();
  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/cartDetails");
    console.log("value", response.data);
    dispatch(setCount(response.data));
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {loading &&
          data.map((element, id) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={element.imgdata}
                    onClick={() => navigate(`/cart/${element.id}`)}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>Price : ₹ {element.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center text-center">
                      <Button
                        variant="primary"
                        onClick={() => send(element)}
                        className="col-lg-12"
                      >
                        <p
                          id="center"
                          onClick={() => {
                            Add(element);
                            loadData();
                          }}
                        >
                          Add to Cart
                        </p>{" "}
                      </Button>{" "}
                    </div>{" "}
                  </Card.Body>{" "}
                </Card>{" "}
              </>
            );
          })}
      </div>
    </div>
  );
};
export default Cards;
