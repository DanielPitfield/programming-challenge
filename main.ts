import { findTermInstances } from "./utils/findTermInstances";

// ["Customer"]
console.log(findTermInstances("The Customer is always right", "Customer, you"));
// ["Customer", "our"]
console.log(findTermInstances("The Customer is not our client", "Customer, us"));
// ["My", "myself", "Client"]
console.log(findTermInstances("My rights cannot be abridged by myself, only the Client", "I, Client"));
// ["my"]
console.log(findTermInstances("i) In this clause my documents are read", "Me"));