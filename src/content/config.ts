import { defineCollection, z } from "astro:content";

const meetings = defineCollection({ schema: z.object({ date: z.date() }) });

const resources = defineCollection({
  schema: z.object({ name: z.string().min(1) }),
});

export const collections = { meetings, resources };
