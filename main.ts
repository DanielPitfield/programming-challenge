import { findTermInstances } from "./utils/findTermInstances";

// There are also test suites with these examples, but still log them to more easily see the output!

// ["You", "your"]
console.log(findTermInstances("You must ensure that your fees are not high", "you"));

// ["Customer"]
console.log(findTermInstances("The Customer is always right", "Customer, you"));

// ["Customer", "our"]
console.log(findTermInstances("The Customer is not our client", "Customer, us"));

// ["My", "myself", "Client"]
console.log(findTermInstances("My rights cannot be abridged by myself, only the Client", "I, Client"));

// ["my"]
console.log(findTermInstances("i) In this clause my documents are read", "Me"));

// []
console.log(findTermInstances("The customer is always right", "Customer"));

// ["Customer", "Customer"]
console.log(findTermInstances("The Customer is always the Customer", "Customer"));

// ["Customer-client"]
console.log(findTermInstances("The Customer-client", "Customer-client"));