import type { inferProcedureInput as inferPI } from "@trpc/server";
import { beforeEach, describe } from "vitest";
import { trpcClientSide } from "~/trpc/client";
import { trpcServerSide, type AppRouter } from "~/trpc/server";

interface Ctx {
  tRPCTest: ReturnType<typeof trpcServerSide>;
}

describe<Ctx>("tRPC server-side tests", (it) => {
  beforeEach<Ctx>((ctx) => {
    ctx.tRPCTest = trpcServerSide({
      request: new Request("https://example.com"),
      response: { headers: new Headers() },
    });
  });

  it("Should greet correctly", async ({ expect, tRPCTest }) => {
    type Input = inferPI<AppRouter["sanity"]["greet"]>;
    const input: Input = "Jenny";

    const result = await tRPCTest.sanity.greet(input);

    expect(result).toMatch("Hello there, Jenny");
  });

  it("Should wish happy birthday correctly", async ({ expect, tRPCTest }) => {
    type Input = inferPI<AppRouter["sanity"]["wishBirthday"]>;
    const input: Input = { name: "John", age: 35 };

    const result = await tRPCTest.sanity.wishBirthday(input);

    expect(result).toMatch("Happy 35th birthday, John!");
  });

  // it("Should display debug info", async ({ expect, tRPCTest }) => {
  //   await tRPCTest.sanity.debug();

  //   expect(1).toEqual(1);
  // });
});

describe("tRPC client-side tests", (it) => {
  it("Should greet correctly", async ({ expect }) => {
    type Input = inferPI<AppRouter["sanity"]["greet"]>;
    const input: Input = "Jenny";

    const result = await trpcClientSide.sanity.greet.query(input);

    expect(result).toMatch("Hello there, Jenny");
  });

  it("Should wish happy birthday correctly", async ({ expect }) => {
    type Input = inferPI<AppRouter["sanity"]["wishBirthday"]>;
    const input: Input = { name: "John", age: 35 };

    const result = await trpcClientSide.sanity.wishBirthday.query(input);

    expect(result).toMatch("Happy 35th birthday, John!");
  });
});
