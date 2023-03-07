import { render } from "@testing-library/react";
import Loginprotect from "../protectRoute/Loginprotect";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("test", () => {
  render(<Loginprotect />);
});
