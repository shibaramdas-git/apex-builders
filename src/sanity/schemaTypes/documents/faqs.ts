import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqsSection",
  type: "object",
  title: "FAQs section",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Section Title",
      description: "Title for the FAQ section",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "array",
      name: "faqs",
      title: "Faqs",
      of: [
        {
          type: "object",
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
        },
      ],
    }),
  ],
});
