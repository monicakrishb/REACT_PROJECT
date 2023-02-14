import Login, { validate } from "../pages/Login";
import { fireEvent, render } from "@testing-library/react";
import { screen, configure } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Password } from "@mui/icons-material";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// test("renders correctly", () => {
//   render(<Login />);
//   const nameElement = screen.queryByText("Password");
//   expect(nameElement).toBeInTheDocument();
// });
// test("should pass on email validation",()=>{
// const testEmail="Hamsa@gmail.com";
// expect(validateEmail(testEmail)).toBe(true);
// });

test("email input field should accept email", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  // ... your tests here
  const password = screen.getByPlaceholderText("Enter Password");
  expect(password).toHaveAttribute("type", "password");
});
// test("should be able to reset the form",()=>{
//   const{getByLabelText,getByTestId}=render(<Login/>)
// })
// test("should be able to reset the form",()=>{
//   const{getByTestId}=render(<Login/>);
//   const resetBtn=getByTestId("reset");
//   const emailInputNode=screen.getByPlaceholderText("Enter email");
//   const passwordInputNode=screen.getByPlaceholderText("Enter Password");

//   fireEvent.click(resetBtn);
//   expect(emailInputNode.value).toMatch("");
//   expect(passwordInputNode.value).toMatch("");
// });
