import { render } from "@testing-library/react";
import Header from '../Header'
import register from "../../services/API";

test("test", () => {
  render(<Header/>); 
}); 
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(), 
}));
test('the data is res',async() => {
  render(<Header/>);
  const res = (await register.cart());
  console.log("Data: ",res);
  expect(res).toBe(res);
});
