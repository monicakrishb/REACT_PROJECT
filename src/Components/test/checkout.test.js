import { render } from "@testing-library/react";
import Checkout from "../Order/Checkout";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<checkout/>", () => {
  test("render name input", () => {
    render(<Checkout />);
    const item = screen.getByTestId("add-test");
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute("type", "text");
  });
});
describe("<checkout/>", () => {
  test("render country input", () => {
    render(<Checkout />);
    const item = screen.getByTestId("country-test");
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute("type", "text");
  });
});
describe("<checkout/>", () => {
  test("render phone input", () => {
    render(<Checkout />);
    const item = screen.getByTestId("ph-test");
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute("type", "text");
  });
});
describe("<checkout/>", () => {
  test("render address label", () => {
    render(<Checkout />);
    const inputNode = screen.getByLabelText("Address");
    expect(inputNode).toBeInTheDocument();
  });
});
