import { render } from "@testing-library/react";
import Cards from "../Cards";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

test("test", () => {
  render(<Cards />);
});
