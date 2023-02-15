import { render, screen } from "@testing-library/react";

import Home from "./Components/Home";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useNavigate: jest.fn(() => "bar"),
  };
});
test("renders react component", async () => {
  render();
});

test("Password field should have label", () => {});
test("Email field should have label", () => {});
test("validate function should fail in the incorrect input", () => {
  const text = "text";
});
test("should render Home component", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Trending Books");
});
