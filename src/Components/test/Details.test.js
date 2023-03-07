import { render } from "@testing-library/react";


import CardsDetails from "../CardsDetails";
jest.mock("axios");


test("test", () => {
  render(<CardsDetails />);
});
