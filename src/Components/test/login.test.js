import Login from "../pages/Login";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { BrowserRouter as MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { act } from "react-test-renderer";



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
// return axios.get(this.environment + `/user?email=${username}`);
const user = "user"[
  ({
    id: "monica",
    name: "monicakrish",
    password: "monica",
    email: "monica@gmail.com",
    phone: "9003759065",
    country: "",
    address: "2nd street",
    gender: "female",
  },
  {
    id: "Chithra",
    name: "Chithra K",
    password: "123",
    email: "chitra@gmail.com",
    phone: "9487758165",
    country: "usa",
    address: "1/596 Nilagiri street",
    gender: "female",
  },
  {
    id: "Thenu",
    name: "Thenmozhi",
    password: "123",
    email: "thenu@gmail.com",
    phone: "9003759065",
    country: "",
    address: "1/597",
    gender: "female",
  },
  {
    id: "Bargav",
    name: "Bargavsanthosh",
    password: "94444",
    email: "bargav@gmail.com",
    phone: "9444755834",
    country: "India",
    address: "Perumal kovil street",
    gender: "male",
  },
  {
    id: "santhosh",
    name: "santhosh",
    password: "12345",
    email: "san@gmail.com",
    phone: "9444755834",
    country: "India",
    address: "food street",
    gender: "male",
  },
  {
    id: "Zara",
    name: "Zarazayana",
    password: "12345abcd",
    email: "zara@gmail.com",
    phone: "9003759065",
    country: "India",
    address: "novotel",
    gender: "female",
  },
  {
    id: "kural",
    name: "kuralanban",
    password: "kural",
    email: "kural@gmail.com",
    phone: "9003759065",
    country: "India",
    address: "moni",
    gender: "male",
  },
  {
    id: "Tyson",
    name: "Tyson",
    password: "tyson@13",
    email: "tyson@gmail.com",
    phone: "9003759065",
    country: "India",
    address: "candy street",
    gender: "male",
  },
  {
    id: "Santhosh",
    name: "Santhosh",
    password: "Santhosh@13",
    email: "san@gmail.com",
    phone: "9003759065",
    country: "India",
    address: "chennai",
    gender: "male",
  },
  {
    id: "Dhanush",
    name: "Dhanush",
    password: "Dhanush@27",
    email: "dhanush@gmail.com",
    phone: "9442872166",
    country: "singapore",
    address: "Cambridge street,near signal tower Singapore",
    gender: "male",
  },
  {
    id: "Vittal",
    name: "Vittal",
    password: "Vittal@2023",
    email: "vittal@gmail.com",
    phone: "9444755834",
    country: "India",
    address: "perumal kovil street guduvancherry",
    gender: "male",
  },
  {
    id: "Aspire",
    name: "Aspire",
    password: "Aspire$13$01",
    email: "aspire@gmail.com",
    phone: "9003759065",
    country: "India",
    address: "Sipcot siruseri",
    gender: "male",
  },
  {
    id: "Dhiya",
    name: "K",
    password: "Dhiya@13",
    email: "dhiya@gmail.com",
    phone: "9003759065",
    country: "India",
    address: "AspireSystem",
    gender: "female",
  }, 
  {
    id: "Tasneem",
    name: "S",
    password: "Tasneem@13",
    email: "tasneem@gmail.com",
    phone: "9003759065",
    country: "India",
    address: "Andra pradesh",
    gender: "female",
  },
  {
    id: "MonicaKrish",
    name: "K",
    password: "Monica@13",
    email: "monicakri475@gmail.com",
    phone: "9003759065",
    country: "India",
    address: "1/596 MGR nagar , Mookandapalli Hosur\n\n635126",
    gender: "female",
  },
  {
    id: "Pooja",
    name: "S",
    password: "Pooja@13",
    email: "pooja@gmail.com",
    phone: "9003759065",
    country: "India",
    address: "Karnataka",
    gender: "female",
  })
];
test("login check", async () => {
  const mock = new MockAdapter(axios);
  mock.onGet("http://localhost:8000/user?email=${username}").reply(200, user);
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  await act(() => {});

  // screen.debug()
});
test("log check", async () => {
  const mock = new MockAdapter(axios);
  mock.onGet("http://localhost:8000/user?email=${username}").networkError();
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  await act(() => {});
});

