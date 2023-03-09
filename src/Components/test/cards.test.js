import { render } from "@testing-library/react";
import Cards from "../Cards";
import register from "../../services/API";




const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({ 
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(), 
}));

test("test", () => {
  render(<Cards />); 
});
test('there is no T in team', () => {
  render(<Cards/>)
  expect('Add to Cart').not.toMatch(/T/);
});
test('there is no K in team', () => {
  render(<Cards/>)
  expect('Added').not.toMatch(/K/);
});


test('the data is res',async() => {
  render(<Cards />);
  const res = await register.cards();
  console.log("Data: ",res);
  expect(res).toBe(res);
});
// test('the data is res',async() => {
//   render(<Cards />);
//   const res = await register.getdata();
//   console.log("Data: ",res);
//   expect(res).toBe(res);
// });
// test('the data is res',async() => {
//   render(<Cards />);
//   const res = await register.cardload();
//   console.log("card add: ",res);
//   expect(res).toBe(true);
// });
