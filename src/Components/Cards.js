import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../Redux/Reduce/Cartcount";
import register from "../services/API";
import "./style.css";

const Cards = () => {
  const [data, setData] = useState([]);
  const getdatas = useSelector((state) => state.cart.count);
  const [loading, setLoading] = useState(false);
  const store = sessionStorage.getItem("useremail");
  const dispatch = useDispatch();
  const getData = async () => {
    const res = (await register.cardsget()).data;
    const getdata = (await register.getdata()).data;
    res &&
      res.forEach((i, index) => {
        getdata.forEach((j) => {
          if (i.id === j.pid && j.useremail === store) {
            res[index].added = true;
          }
        });
      });
    setData(res);
    setLoading(true);
  };

  useEffect(() => {
    getData();
  }, [getdatas]);

  const storeemail = sessionStorage.getItem("useremail");

  const Add = async (element) => {
    await register.cardadd({
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
      pid: element.id,
    });
    loadData();
    toast.success("Added to cart");
  };
  const navigate = useNavigate();
  const loadData = async () => {
    const response = (await register.cardload()).data;
    dispatch(setCount(response));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {loading &&
          data &&
          data.map((element, id) => {
            return (
              <>
                <Card
                  key={id}
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
                        data-testid={"addme"}
                        variant="primary"
                        onClick={() => {
                          getData();
                          Add(element);
                        }}
                        className="col-lg-12"
                        disabled={element.added}
                      >
                        <p id="center">Add to Cart</p>{" "}
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
