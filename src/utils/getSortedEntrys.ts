import type { CollectionEntry } from "astro:content";

const getSortedEntry = (posts: (CollectionEntry<"blog"> | CollectionEntry<"faction">)[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );

export default getSortedEntry;
