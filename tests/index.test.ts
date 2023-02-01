import { findTermInstances } from "../utils/findTermInstances";

test("Non-pronoun term casing", () => {
  expect(findTermInstances("The customer is always right", "Customer")).toStrictEqual([]);
});

test("Multiple instances of term", () => {
  expect(findTermInstances("The Customer is always the Customer", "Customer")).toStrictEqual(["Customer", "Customer"]);
});

test("Hyphenated words", () => {
  expect(findTermInstances("The Customer-client", "Customer-client")).toStrictEqual(["Customer-client"]);
});
