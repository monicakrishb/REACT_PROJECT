import { render, screen } from "@testing-library/react";

import Home from "./Components/Home";
import Login from "./Components/pages/Login";

import Header from "./Components/Header";

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
// test('btn should be enable for empty password',()=>{
//   const{getByLabelText,getByRole}=render(<Login/>);
//   const btn=getByRole('button',{name:'submit'})
//   expect(btn).toHaveAttribute('disabled')
// })
// test('renders two buttons', async () => {
//   render(<Router>(<Login />)</Router>);
//   const items = await screen.findAllByRole('button')
//   expect(items).toHaveLength(3)
// })
// test("is Your carts is empty inside the h6 tag", () => {
//   render(<Header />);
//   const titleElement = screen.getByText(/Your carts is empty/i);
//   /* I want to check titleElement as h1 tag */
//   expect(titleElement);
// });
test("should render Home component", () => {
  render(<Home />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Trending Books");
});
