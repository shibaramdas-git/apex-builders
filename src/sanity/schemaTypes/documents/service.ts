import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  type: "document",
  title: "Services",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Service Title",
    }),
    defineField({
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      rows: 2,
    }),
    defineField({
      name: "icon",
      type: "image",
      title: "Service Icon",
      options: { hotspot: true },
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "detailedDescription",
      type: "array",
      title: "Detailed Description",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "shortDescription",
      media: "icon",
    },
  },
});
