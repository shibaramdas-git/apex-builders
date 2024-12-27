import { defineType, defineField } from "sanity";

export default defineType({
  name: "cta-1",
  title: "CTA (default)",
  description: "Design 01",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "description", type: "string", title: "Description" }),
    defineField({ name: "image", type: "image", title: "Image" }),
    defineField({ name: "slug", type: "slug", title: "Slug" }),
  ],
});
