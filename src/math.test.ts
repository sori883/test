import { expect, test } from "bun:test";
import { add, mul } from "./math.ts";

test("add", () => {
  expect(add(2, 3)).toBe(5);
});

test("mul", () => {
  expect(mul(2, 3)).toBe(6);
});
