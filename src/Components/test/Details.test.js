import { render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-test-renderer";
import CardsDetails from "../CardsDetails";
import * as Router from "react-router-dom";

const book = [
  {
    id: 1,
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
    qnty: 0,
  },
  {
    id: 2,
    rname: "Node.js ",
    imgdata:
      "https://images-eu.ssl-images-amazon.com/images/I/61cVyOcKJ7L._AC_UL320_SR320,320_.jpg",
    address: "David Herron",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "2525+order placed from here recently",
    price: 75,
    rating: "3.9",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
  {
    id: 3,
    rname: "Start Living",
    imgdata:
      "https://m.media-amazon.com/images/I/81zz6LqCreS._AC_UY436_QL65_.jpg",
    address: "Dale Carnegie",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: " 650 + order placed from here recently",
    price: 470,
    rating: "4.2", 
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
  {
    id: 4,
    rname: "Coding Interview",
    imgdata:
      "https://images-eu.ssl-images-amazon.com/images/I/61oRH4y27jL._AC_UL320_SR320,320_.jpg",
    address: "Gayle Laakmann",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: " 300 + order placed from here recently",
    price: 380,
    rating: "3.8",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
  {
    id: 5,
    rname: "Science and Technology",
    imgdata:
      "https://m.media-amazon.com/images/I/91NMKdqMaWL._AC_UY436_FMwebp_QL65_.jpg",
    address: "Angel Jessy",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1050 + order placed from here recently",
    price: 210,
    rating: "4.0",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
  {
    id: 6,
    rname: "Breakout Trading",
    imgdata:
      "https://m.media-amazon.com/images/I/71iQY6pCktL._AC_UY436_FMwebp_QL65_.jpg",
    address: "Indrazith Shantharaj",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: " 1100 + order placed from here recently",
    price: 699,
    rating: "3.8",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
  {
    id: 7,
    rname: "Javascript",
    imgdata:
      "https://m.media-amazon.com/images/I/41RlTlmal9L._AC_SR405,405_.jpg",
    address: "Ockert Preez",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "500 + order placed from here recently",
    price: 300,
    rating: "3.8",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 1,
  },
  {
    id: 8,
    rname: "Web Design",
    imgdata:
      "https://m.media-amazon.com/images/I/61h2OIQCu6L._AC_SR405,405_.jpg",
    address: "Philippe Hong",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "500 + order placed from here recently",
    price: 720,
    rating: "3.2",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
  {
    id: 9,
    rname: "System Design",
    imgdata:
      "https://m.media-amazon.com/images/I/4129HxbBnOL._AC_SF480,480_.jpg",
    address: "Alex Xu",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "2525 + order placed from here recently",
    price: 590,
    rating: "3.8",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
];
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: 8 }),
}));
test("api check", async () => {
  jest.spyOn(Router, "useParams").mockReturnValue({ id: 8 });
  const mock = new MockAdapter(axios);
  mock.onGet("http://localhost:8000/bookDetails").reply(200, book);
  render(
    <Router.MemoryRouter>
      <CardsDetails />
    </Router.MemoryRouter>
  );
  await act(() => {});
});
test("api check", async () => {
  const mock = new MockAdapter(axios);
  mock.onGet("http://localhost:8000/bookDetails").networkError();
  render(<CardsDetails />);
  await act(() => {});
});
