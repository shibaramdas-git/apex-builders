import { defineType, defineField } from "sanity";

export default defineType({
  name: "richText",
  title: "Rich Text",
  type: "object",
  fields: [
    defineField({
      name: "content",
      type: "array",
      title: "Content",
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
    }),
  ],
});
