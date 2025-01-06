import { defineType } from "sanity";

export default defineType({
  title: "Block Content",
  name: "block-content",
  type: "array",
  of: [
    {
      type: "block",
    },
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
  ],
});
