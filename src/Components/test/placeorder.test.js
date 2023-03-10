import { render } from "@testing-library/react";
import { Placeorder } from "../Order/Placeorder";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Placeorder component", () => {
  it("should render component correctly", () => {
    render(<Placeorder />);
  }); 
});  
