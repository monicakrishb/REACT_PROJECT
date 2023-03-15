import { render, screen } from "@testing-library/react";
import Order from "../Orders/Order";
import { act } from "react-test-renderer";
import * as Router from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Provider } from "react-redux";
import Store from "../../Redux/Store";

test("test", () => {
  render(<Order />);
});
const order = "order"[
  ({
    rname: "React and Native",
    imgdata:
      "https://m.media-amazon.com/images/I/61acdiPRZQL._AC_SR405,405_.jpg",
    address: "Adam Boduch",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: " 1175 + order placed from here recently",
    price: 350,
    rating: "3.8",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 1,
    useremail: "kural@gmail.com",
    pid: 1,
    id: 2,
  },
  {
    rname: 3,
    imgdata:
      "https://m.media-amazon.com/images/I/61acdiPRZQL._AC_SR405,405_.jpg",
    address: "Adam Boduch",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: " 1175 + order placed from here recently",
    price: 350,
    rating: "3.8",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 2,
    useremail: "pooja@gmail.com",
    username: null,
    productname: "React and Native",
    Date: "13/03/2023",
    id: 3,
  })
];

test("orderid check", async () => {
  const mock = new MockAdapter(axios);
  mock.onGet("http://localhost:8000/orderDetails/" + id).reply(200, order);

  render(
    <Router.MemoryRouter>
      <Provider store={Store}>
        <Order />
      </Provider>
    </Router.MemoryRouter>
  );
  await act(() => {});
  screen.getAllByTestId("del")[0].click();
  await act(() => {});
});
