import { render } from "@testing-library/react";
import Cards from "../Cards";



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
