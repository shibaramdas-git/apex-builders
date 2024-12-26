import { type SchemaTypeDefinition } from "sanity";
import AboutPage from "../schemas/aboutPage";
import hero from "../schemas/Blocks/hero";
import cta from "../schemas/Blocks/cta";
import gallery from "../schemas/Blocks/gallery";
import richText from "../schemas/Blocks/richText";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [AboutPage, hero, cta, gallery, richText],
};
