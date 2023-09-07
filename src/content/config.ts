import { defineCollection } from "astro:content";
import { blogSchema, factionSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});
const faction = defineCollection({
  schema: factionSchema,
});

export const collections = { blog, faction };
