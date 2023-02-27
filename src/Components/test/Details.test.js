import { render } from "@testing-library/react";
import { DLT, REMOVE } from "../actions/action";
import CardsDetails from "../CardsDetails";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test("test", () => {
  render(<CardsDetails />);
});
test("test", () => {
  render(<DLT />);
});
test("test", () => {
  render(<REMOVE />);
});
