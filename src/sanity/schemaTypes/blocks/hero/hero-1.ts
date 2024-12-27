import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero-1",
  title: "Hero (default)",
  description: "Default design-01 with bg image , title ,subtitle with a link",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "subtitle", type: "string", title: "Sub title" }),
    defineField({
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
    }),
    defineField({
      name: "slug",
      type: "string",
      title: "link to contact or other page",
      placeholder: "Enter the title here...",
    }),
  ],
});
