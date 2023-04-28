/* eslint-disable spaced-comment */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { ImportMetaSchema } from "./lib/env";

interface ImportMetaEnv extends ImportMetaSchema {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
