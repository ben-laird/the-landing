import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

const site = process.env.VERCEL_URL
  ? process.env.VERCEL_URL
  : "http://localhost:3000";

// console.log(`site: ${site}`);

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [solidJs(), tailwind()],
  adapter: vercel(),
  site,
});
