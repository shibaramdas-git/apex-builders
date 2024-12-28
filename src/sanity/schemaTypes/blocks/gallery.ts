import { defineType, defineField } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery of images",
  type: "object",
  fields: [
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    }),
  ],
});
