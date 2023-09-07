import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueBlogTags = (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  const tags: string[] = filteredPosts
    .flatMap(post => post.data.tags)
    .map(tag => slugifyStr(tag))
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index
    )
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
};

const getUniqueFactionTags = (factions: CollectionEntry<"faction">[]) => {
  const filteredPosts = factions.filter(({ data }) => !data.draft);
  const tags: string[] = filteredPosts
    .flatMap(faction => faction.data.tags)
    .map(tag => slugifyStr(tag))
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index
    )
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
};

export default {
  getUniqueBlogTags: getUniqueBlogTags,
  getUniqueFactionTags: getUniqueFactionTags
};
