import { render, screen } from "@testing-library/react";
import StrengthMeter from "../pages/StrengthMeter";
describe("strength component", () => {
    it("should render strength component correctly", () => {
      render(<StrengthMeter/>);
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });