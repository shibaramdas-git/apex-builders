import { type SchemaTypeDefinition } from "sanity";
import hero1 from "./blocks/hero/hero-1";
import richText from "./blocks/richText";
import cta from "./blocks/cta/cta-1";
import aboutPage from "./documents/aboutPage";
import gallery from "./blocks/gallery";
import faqs from "./blocks/faqs";
import cta1 from "./blocks/cta/cta-1";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutPage, hero1, richText, cta, gallery, faqs, cta1],
};
