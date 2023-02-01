import { findTermInstances } from "../utils/findTermInstances";

test("Example 1", () => {
  expect(findTermInstances("You must ensure that your fees are not high", "you")).toStrictEqual(["You, your"]);
});

test("Example 2", () => {
  expect(findTermInstances("The Customer is always right", "Customer, you")).toStrictEqual(["Customer"]);
});

test("Example 3", () => {
  expect(findTermInstances("The Customer is not our client", "Customer, us")).toStrictEqual(["Customer", "our"]);
});

test("Example 4", () => {
  expect(findTermInstances("My rights cannot be abridged by myself, only the Client", "I, Client")).toStrictEqual([
    "My",
    "myself",
    "Client",
  ]);
});

test("Example 5", () => {
  expect(findTermInstances("i) In this clause my documents are read", "Me")).toStrictEqual(["my"]);
});
