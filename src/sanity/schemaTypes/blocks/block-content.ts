import { defineField, defineType } from "sanity";

export default defineType({
  title: "Block Content",
  name: "block-content",
  type: "array",
  of: [
    defineField({
      type: "block",
      name: "block",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
        }),
      ],
    }),
  ],
});
