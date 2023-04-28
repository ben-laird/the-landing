import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

const debugBuild = (
  opts?: Partial<{ importMeta: boolean; processEnv: boolean }>
) => {
  const filteredOpts = opts || { importMeta: false, processEnv: false };
  const { importMeta, processEnv } = filteredOpts;

  if (importMeta) console.log("importMeta: ", import.meta.env);
  if (processEnv) console.log("processEnv: ", process.env);
};

debugBuild({ importMeta: true });

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [solidJs(), tailwind()],
  adapter: vercel(),
  site: "https://the-landing.vercel.app",
});
