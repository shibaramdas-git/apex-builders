import { defineType, defineField } from "sanity";

export default defineType({
  name: "cta",
  title: "Call to action",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "description", type: "string", title: "Description" }),
    defineField({ name: "image", type: "image", title: "Image" }),
  ],
});
