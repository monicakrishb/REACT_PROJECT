import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../pages/Profile";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Profile/>", () => {
  test("render username input", () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
    const test = screen.getByTestId("instanceuser");
    expect(test).toBeInTheDocument();
    expect(test).toHaveAttribute("type", "text");
  });
});
describe("<Profile/>", () => {
  test("render username input", () => {
    render(<Profile />);
    const test = screen.getByTestId("instancephone");
    expect(test).toBeInTheDocument();
    expect(test).toHaveAttribute("type", "text");
  });
});
describe("<Profile/>", () => {
  test("render username input", () => {
    render(<Profile />);
    const test = screen.getByTestId("instanceemail");
    expect(test).toBeInTheDocument();
    expect(test).toHaveAttribute("type", "text");
  });
});
describe("<Profile/>", () => {
  test("render username input", () => {
    render(<Profile />);
    const test = screen.getByTestId("instanceaddress");
    expect(test).toBeInTheDocument();
    expect(test).toHaveAttribute("type", "text");
  });
});
