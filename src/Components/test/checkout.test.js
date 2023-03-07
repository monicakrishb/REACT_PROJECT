import { render } from "@testing-library/react";
import Checkout from "../Order/Checkout";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<checkout/>", () => {
  test("render the component", () => {
    render(<Checkout />);
  });
});
