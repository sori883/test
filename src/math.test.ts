import { expect, test } from "bun:test";
import { add, mul } from "./math.ts";

test("mul", () => {
  expect(mul(2, 3)).toBe(6);
});
