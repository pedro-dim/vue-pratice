import { describe, it, expect, test } from "vitest";

import { evenOdd } from "../functions/functions.js";

const user = {
  name: "Pedro",
  age: 36,
};

// test("Pedro is 36", () => {
//   expect(user.name).toBe("Pedro");
//   expect(user.age).toBe(36);
// });

// describe("basic test", () => {
//   it("two numbers", () => {
//     expect(2 + 2).toBe(4);
//   });
// });

describe("new test function", () => {
  it("This should return a positive number", () => {
    expect(evenOdd(2, 4)).toBe("even");
  });
});
