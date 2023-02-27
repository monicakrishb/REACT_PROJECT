import Login from "../pages/Login";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { BrowserRouter as MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from '../../App'


const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("email input field should accept email", async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // ... your tests here
  const password = screen.getByPlaceholderText("Enter Password");
  expect(password).toHaveAttribute("type", "password");
});

test("renders two buttons", async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const items = await screen.findAllByRole("button");
  expect(items).toHaveLength(1);
});
test("email input field should accept email", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const email = screen.getByPlaceholderText("Enter email");
  userEvent.type(email, "dhanush");
  expect(email.value).not.toMatch("dhanush@gmail.com");
});
test("password input should have type password", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const password = screen.getByPlaceholderText("Enter Password");
  expect(password).toHaveAttribute("type", "password");
});
test("test username input is valid", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const inputElement = screen.getByTestId("username-test");
  fireEvent.change(inputElement, { target: { value: "Dhanush" } });
  expect(screen.getByTestId("username-test")).toHaveValue("Dhanush");
});
