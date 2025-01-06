import { type SchemaTypeDefinition } from "sanity";
import hero1 from "./blocks/hero/hero-1";
import page from "./documents/page";
import gallery from "./blocks/gallery";
import faqs from "./documents/faqs";
import cta1 from "./blocks/cta/cta-1";
import author from "./documents/author";
import category from "./documents/category";
import article from "./documents/article";
import project from "./documents/project";
import blockContent from "./blocks/block-content";
import richText from "./blocks/rich-text";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    article,
    project,
    category,
    author,
    // Blocks
    blockContent,
    richText,
    hero1,
    gallery,
    faqs,
    cta1,
  ],
};
