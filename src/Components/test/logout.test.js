import { render } from "@testing-library/react";
import Logout from "../pages/Logout";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("test", () => {
  render(<Logout />);
});
