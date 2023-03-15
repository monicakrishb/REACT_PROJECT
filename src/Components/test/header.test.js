import { render } from "@testing-library/react";
import Header from "../Header";
import * as Router from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-test-renderer";
import axios from "axios";
import { Provider } from "react-redux";
import Store from "../../Redux/Store";

test("test", () => {
  render(<Header />);
});
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
const cart = "cartDetails"[
  {
    rname: 4,
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
    useremail: "vittal@gmail.com",
    username: "Vittal",
    productname: "React and Native",
    Date: "24/02/2023",
    id: 1,
  }
];

test("Header cart", async () => {
  const mock = new MockAdapter(axios);
  mock.onGet("http://localhost:8000/cartDetails").reply(200, cart);
  mock.onDelete("http://localhost:8000/cartDetails").reply(200, cart);

  mock.onPut("http://localhost:8000/cartDetails").reply(200, cart);
  mock.onPut("http://localhost:8000/cartDetails").reply(200, cart);

  render(
    <Router.MemoryRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </Router.MemoryRouter>
  );
  await act(() => {}); 
});
