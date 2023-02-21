import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Register from "../pages/Register";
import { fireEvent } from "@testing-library/react";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Register />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument ();
  });
});
describe("<Register/>", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const inputElementEmail = screen.getByTestId("email-test");
    expect(inputElementEmail).toBeInTheDocument();
    expect(inputElementEmail).toHaveAttribute("type", "text");
  });
});
describe("<Register/>", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const inputElementPassword = screen.getByTestId("password-test");
    expect(inputElementPassword).toBeInTheDocument();
    expect(inputElementPassword).toHaveAttribute("type", "password");
  });
});
it("should correctly set default option", () => {
  render(<Register />);
  expect(screen.getByRole("option", { name: "India" }).selected).toBe(true);
});

describe("<Register/>", () => {
  test("render name input", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const inputElement = screen.getByTestId("name-test");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });
});
test("test name input is valid", () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );
  const inputElement = screen.getByTestId("name-test");
  fireEvent.change(inputElement, { target: { value: "Dhanush" } });
  expect(screen.getByTestId("name-test")).toHaveValue("Dhanush");
});
// describe("<Register/>", () => {
//   test("render username input", () => {
//     render(
//       <MemoryRouter>
//         <Register />
//       </MemoryRouter>
//     );
//     const inputElement = screen.getByTestId("username-test");
//     expect(inputElement).toBeInTheDocument();
//     expect(inputElement).toHaveAttribute("type", "text");
//   });
// });
test("test username input is valid", () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );
  const inputElement = screen.getByTestId("username-test");
  fireEvent.change(inputElement, { target: { value: "Dhanush" } });
  expect(screen.getByTestId("username-test")).toHaveValue("Dhanush");
});
{
  /* <div className="whole">
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <img
          id="png"
          src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
        />
      </div> */
}
test("test phone input is valid", () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );
  const inputElement = screen.getByTestId("phone-test");
  fireEvent.change(inputElement, { target: { value: "phone" } });
  expect(screen.getByTestId("phone-test")).toHaveValue("phone");
});
it("should correctly set default option", () => {
  render(<Register />);
  expect(screen.getByRole("option", { name: "USA" }).selected).not.toBe(true);
});

test("Register renders correctly", () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );
});
