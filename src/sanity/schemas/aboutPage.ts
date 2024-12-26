import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
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
        { type: "hero" }, // Hero block
        { type: "richText" }, // Rich text block
        { type: "gallery" }, // Gallery block
        { type: "cta" }, // Call-to-action block
      ],
    }),
  ],
});
