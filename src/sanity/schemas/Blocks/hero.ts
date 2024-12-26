import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Block",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "subtitle", type: "string", title: "Sub title" }),
    defineField({
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
    }),
  ],
});
