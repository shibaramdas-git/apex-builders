import { type SchemaTypeDefinition } from "sanity";
import hero1 from "./blocks/hero/hero-1";
import richText from "./blocks/richText";
import page from "./documents/page";
import gallery from "./blocks/gallery";
import faqs from "./documents/faqs";
import cta1 from "./blocks/cta/cta-1";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, hero1, richText, gallery, faqs, cta1],
};
