import { findTermInstances } from "../utils/findTermInstances";

describe("Non-pronoun term casing", () => {
  test("A term which is not a pronoun should be case sensitive for finding a match", () => {
    expect(findTermInstances("The customer is always right", "Customer")).toStrictEqual([]);
  });
});

describe("Multiple instances of term", () => {
  test("Find multiple/all instances of a term within the text", () => {
    expect(findTermInstances("The Customer is always the Customer", "Customer")).toStrictEqual([
      "Customer",
      "Customer",
    ]);
  });
});
