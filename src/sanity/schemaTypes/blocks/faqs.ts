import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqs",
  type: "object",
  title: "FAQs",
  fields: [
    defineField({
      name: "question",
      type: "string",
      title: "Question",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      type: "string",
      title: "Answer",
      validation: (rule) => rule.required().min(10).max(300),
    }),
  ],
});
