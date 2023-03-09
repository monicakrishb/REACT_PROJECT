// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import Register from "../pages/Register";
// import { fireEvent } from "@testing-library/react";
// jest.mock("axios");

// const mockedUsedNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// })); 
// describe("Register component", () => {
//   it("should render Register component correctly", () => {
//     render(<Register />);
//     const element = screen.getByRole("heading");
//     expect(element).toBeInTheDocument();
//   });  
// });
// describe("<Register/>", () => {
//   test("render name input", () => {
//     render(
//       <MemoryRouter>
//         <Register />
//       </MemoryRouter>
//     );
//     const inputElementEmail1 = screen.getByTestId("email-test");
//     expect(inputElementEmail1).toBeInTheDocument();
//     expect(inputElementEmail1).toHaveAttribute("type", "text");
//   });
// });
// describe("<Register/>", () => {
//   test("render name input", () => {
//     render(
//       <MemoryRouter>
//         <Register />
//       </MemoryRouter>
//     );
//     const inputElementPassword1 = screen.getByTestId("password-test");
//     expect(inputElementPassword1).toBeInTheDocument();
//     expect(inputElementPassword1).toHaveAttribute("type", "password");
//   });
// });
// it("should correctly set default option", () => {
//   render(<Register />);
//   expect(screen.getByRole("option", { name: "India" }).selected).toBe(true);
// });

// describe("<Register/>", () => {
//   test("render name input", () => {
//     render(
//       <MemoryRouter>
//         <Register />
//       </MemoryRouter>
//     );
//     const inputElement2 = screen.getByTestId("name-test");
//     expect(inputElement2).toBeInTheDocument();
//     expect(inputElement2).toHaveAttribute("type", "text");
//   });
// });
// test("test name input is valid", () => {
//   render(
//     <MemoryRouter>
//       <Register />
//     </MemoryRouter>
//   );
//   const inputElement = screen.getByTestId("name-test");
//   fireEvent.change(inputElement, { target: { value: "Dhanush" } });
//   expect(screen.getByTestId("name-test")).toHaveValue("Dhanush");
// });
// describe("<Register/>", () => {
//   test("render username input", () => {
//     render(
//       <MemoryRouter>
//         <Register />
//       </MemoryRouter>
//     );
//     const inputElement3 = screen.getByTestId("username-test");
//     expect(inputElement3).toBeInTheDocument();
//     expect(inputElement3).toHaveAttribute("type", "text");
//   });
// });
// test("test username input is valid", () => {
//   render(
//     <MemoryRouter>
//       <Register />
//     </MemoryRouter>
//   );
//   const inputElement4 = screen.getByTestId("username-test");
//   fireEvent.change(inputElement4, { target: { value: "Dhanush" } });
//   expect(screen.getByTestId("username-test")).toHaveValue("Dhanush");
// });
// test('there is no T in team', () => {
//   render(<Register/>)
//   expect('Registered').not.toMatch(/T/);
// });
