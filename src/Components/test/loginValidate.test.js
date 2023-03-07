import { validate } from "../pages/loginValidate";

test("testing validate", () => {
  expect(validate("", "")).toBe(false);
  expect(validate("moni", "")).toBe(false);
  expect(validate("moni", "Mpnijl#232")).toBe(true);
}); 
