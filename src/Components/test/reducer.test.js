import { render, screen } from "@testing-library/react";
import { Cartreducer } from "../reducers/reducer";
describe("reducer component", () => {
 
    it("should re nder Home component correctly", () => {
      render(<Cartreducer/>);
    });
})