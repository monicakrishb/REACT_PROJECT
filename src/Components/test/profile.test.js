import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../pages/Profile";
import MockAdapter from 'axios-mock-adapter'
import axios from "axios";



const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));
test("Mocking axios get", () => {
    sessionStorage.setItem("useremail","dsads")
    var mock = new MockAdapter(axios);
    const data = { response: 200 };
     mock.onGet('http://localhost:8000/user?email=dsads').reply(200, data);
      render(<Profile />);
     });

test("renders correctly", () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );
  const nameElement = screen.queryByText("Password");
  expect(nameElement).toBeInTheDocument();
});
describe("<Register/>", () => {
    test("render user input", () => {
      render(
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      );
      const inputElement = screen.getByTestId("user-test");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "text");
    });
  });
  describe("<Register/>", () => {
    test("render pass input", () => {
      render(
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      );
      const inputElement = screen.getByTestId("pass-test");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "text");
    });
  });
  describe("<Register/>", () => {
    test("render phone input", () => {
      render(
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      );
      const inputElement = screen.getByTestId("phone-test");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "text");
    });
  });
  describe("<Register/>", () => {
    test("render country input", () => {
      render(
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      );
      const inputElement = screen.getByTestId("country-test");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "text");
    });
  });
  test("renders two buttons", async () => {
    render(
      <MemoryRouter>
        <Profile />
    </MemoryRouter>
    );
    const items = await screen.findAllByRole("button");
    expect(items).toHaveLength(2);
  });
  test("edit button",()=>{
    render(<Profile/>)
    const editbtn = screen.getByTestId('edit-btn')
    fireEvent.click(editbtn)
  })
 
  