import { z } from "zod";

// import.meta.env

const importMetaSchema = z.strictObject({
  DATABASE_URL: z.string().url().optional(),
  VITE_TRPC_DEV_URL: z.string().url().optional(),
  VITE_TRPC_PROD_URL: z.string().url().optional(),
  SITE: z.string().url(),
  BASE_URL: z.string(),
  MODE: z.string(),
  DEV: z.boolean(),
  PROD: z.boolean(),
  SSR: z.boolean(),
});

export type ImportMetaSchema = z.infer<typeof importMetaSchema>;

const importMeta = importMetaSchema.parse(import.meta.env);

// process.env

const processEnvSchema = z.object({
  VERCEL_URL: z.string().url().optional(),
});

export type ProcessEnvSchema = z.infer<typeof processEnvSchema>;

const processEnv = processEnvSchema.parse(process.env);

export const environment = { importMeta, processEnv };
