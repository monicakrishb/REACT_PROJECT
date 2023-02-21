import { render, screen } from "@testing-library/react";
import Cards from "../Cards";
import Home from "../Home";
describe("Register component", () => {
  it("should render Home component correctly", () => {
    render(<Home />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
  // it('should create', () => {
  //     expect(component).toBeTruthy();
  // });
});
