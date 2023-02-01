import { findTermInstances } from "../utils/findTermInstances";

describe("Test 1", () => {
  test("1", () => {
    expect(findTermInstances("You must ensure that your fees are not high", "you")).toStrictEqual(["You, your"]);
  });
});

describe("Test 2", () => {
  test("2", () => {
    expect(findTermInstances("The Customer is always right", "Customer, you")).toStrictEqual(["Customer"]);
  });
});

describe("Test 3", () => {
  test("3", () => {
    expect(findTermInstances("The Customer is not our client", "Customer, us")).toStrictEqual(["Customer", "our"]);
  });
});

describe("Test 4", () => {
  test("4", () => {
    expect(findTermInstances("My rights cannot be abridged by myself, only the Client", "I, Client")).toStrictEqual([
      "My",
      "myself",
      "Client",
    ]);
  });
});

describe("Test 5", () => {
  test("5", () => {
    expect(findTermInstances("i) In this clause my documents are read", "Me")).toStrictEqual(["my"]);
  });
});

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
