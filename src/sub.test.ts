import { expect, test } from "bun:test";
import { sub } from "./sub.ts";

test("sub", () => {
  expect(sub(5, 3)).toBe(2);
});
