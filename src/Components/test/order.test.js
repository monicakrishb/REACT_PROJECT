import { render } from "@testing-library/react";
import Orders from "../Order/Order";

test("test", () => {
  render(<Orders/>);
}); 
test('there is no I in team', () => {
  render(<Orders/>)
  expect('Cancel Order').not.toMatch(/I/);
});
test('there is a in team', () => {
  render(<Orders/>)
  expect('Quantity').toMatch(/a/);
});
test('there is no U in team', () => {
  render(<Orders/>)
  expect('Price').not.toMatch(/U/);
}); 