// import { render } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import Profile from "../pages/Profile";

// const userUrl=`http://localhost:8000/user?email=`;
// const mockedUsedNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }));

// describe("<Profile/>", () => {
//   test("render username input", () => {
//     render(
//       <MemoryRouter>
//         <Profile />
//       </MemoryRouter>
//     );
//     const test = screen.getByTestId("instanceuser");
//     expect(test).toBeInTheDocument();
//     expect(test).toHaveAttribute("type", "text");
//   }); 
// }); 
// describe("<Profile/>", () => {
//   test("render username input", () => {
//     render(<Profile />);
//     const test = screen.getByTestId("instancephone");
//     expect(test).toBeInTheDocument();
//     expect(test).toHaveAttribute("type", "text");
//   });
// });
// describe("<Profile/>", () => {
//   test("render username input", () => {
//     render(<Profile />);
//     const test = screen.getByTestId("instanceemail");
//     expect(test).toBeInTheDocument();
//     expect(test).toHaveAttribute("type", "text");
//   });
// });
// describe("<Profile/>", () => {
//   test("render username input", () => {
//     render(<Profile />);
//     const test = screen.getByTestId("instanceaddress");
//     expect(test).toBeInTheDocument();
//     expect(test).toHaveAttribute("type", "text");
//   });
// });
// describe("<Profile/>", () => {
//   test("render username input", () => {
//     render(<Profile />); 
//     fetch(userUrl+'monica@gmail.com')
//     .then((res) => {
//       const test = res.json();
//     expect(test).toBe(
//       {
//         "id": "monica",
//         "name": "monicakrish",
//         "password": "monica",
//         "email": "monica@gmail.com",
//         "phone": "9003759065",
//         "country": "",
//         "address": "2nd street",
//         "gender": "female"
//       },
//     );
//   });
// });

// })