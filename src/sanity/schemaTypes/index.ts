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
import heroSlider from "./blocks/home/hero-slider";
import { seoSchema } from "./blocks/seo";
import about1 from "./blocks/home/about-1";
import serviceSection from "./blocks/home/services-1";
import service from "./documents/service";
import testimonialsClients from "./blocks/testimonial-clients";
import projectsSection from "./blocks/home/projects-section";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    article,
    project,
    category,
    author,
    service,
    // Blocks
    blockContent,
    richText,
    testimonialsClients,
    // Home page specific blocks
    heroSlider,
    about1,
    hero1,
    serviceSection,
    projectsSection,
    gallery,
    faqs,
    cta1,
    // Objects
    seoSchema,
  ],
};
