import Protect from "../protectRoute/Protect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("ToggleComponent", () => {
  it("Should be true", () => {
    render(
      <MemoryRouter>
        <Protect />
     </MemoryRouter>
    );
    const user = true;
    if (login === true) {
      expect(user).toBe(true);
    } else {
      expect(user).toBe(false);
    }
  });
});
