import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqsSection",
  type: "object",
  title: "FAQs section",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Section Heading",
      description: "Heading for the FAQ section",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      type: "array",
      name: "faqs",
      title: "Faqs",
      validation: (rule) => rule.min(1).error("Add at least one FAQ."),
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
