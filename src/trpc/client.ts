import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";
import type { AppRouter } from "./server";

const getUrl = () => {
  const base = import.meta.env.DEV
    ? "http://localhost:3000"
    : process.env.VERCEL_URL
    ? process.env.VERCEL_URL
    : import.meta.env.SITE;

  return base + "/api/trpc";
};

export const trpcClientSide = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: getUrl() })],
  transformer: SuperJSON,
});
