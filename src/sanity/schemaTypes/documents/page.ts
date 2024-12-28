import { defineType, defineField } from "sanity";
export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "seo", title: "Seo" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "content",
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "blocks",
      type: "array",
      group: "content",
      of: [
        { type: "hero-1" },
        { type: "richText" },
        { type: "gallery" },
        { type: "cta-1" },
        { type: "faqsSection" },
      ],
    }),
    defineField({
      name: "meta_title",
      type: "string",
      title: "Meta title",
      group: "seo",
    }),
    defineField({
      name: "meta_description",
      type: "string",
      title: "Meta description",
      group: "seo",
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      group: "seo",
      title: "Open graph image - [1200x630]",
    }),
  ],
});
