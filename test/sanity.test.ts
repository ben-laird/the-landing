import { describe } from "vitest";
import { fc as c, it as ch } from "@fast-check/vitest";

/* I generally keep this sanity test file around just to integrate-test Vitest.
That way I know it's me that messed up tests lol */

describe("Passing sanity test", (it) => {
  it("Should just pass", ({ expect }) => {
    expect(1).toEqual(1);
  });

  ch.prop([c.string()])("Should also pass", (str) => {
    return str === str;
  });
});
