import { defineType, defineField, defineArrayMember } from "sanity";

export const heroBlock = defineType({
  title: "Test data",
  name: "testData name",
  type: "document",
  fields: [
    defineField({
      title: "String array",
      name: "strings",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
