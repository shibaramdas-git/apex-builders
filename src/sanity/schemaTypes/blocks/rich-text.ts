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
      of: [{ type: "block" }],
    }),
  ],
});
