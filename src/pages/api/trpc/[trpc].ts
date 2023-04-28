import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { APIRoute } from "astro";
import { createContext } from "~/trpc/initTRPC";
import { appRouter as router } from "~/trpc/server";

export const all: APIRoute = async ({ request: req }) => {
  return fetchRequestHandler({
    req,
    endpoint: "/api/trpc",
    router,
    createContext,
  });
};
