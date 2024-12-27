import { defineType, defineField } from "sanity";

export default defineType({
  name: "dynamicPage",
  title: "New Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      placeholder: "Enter page name here",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Page Content",
      of: [
        { type: "hero-1" },
        { type: "richText" },
        { type: "gallery" },
        { type: "cta-1" },
        { type: "faqs" },
      ],
    }),
  ],
});
