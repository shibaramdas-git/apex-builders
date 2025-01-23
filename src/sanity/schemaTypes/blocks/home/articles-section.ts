import { defineField, defineType } from "sanity";
import { RiArticleFill } from "react-icons/ri";

export default defineType({
  name: "articlesSection",
  type: "object",
  title: "Top Articles Section",
  icon: RiArticleFill,
  fields: [
    defineField({
      name: "sectionPreheading",
      type: "string",
      title: "Section Pre-heading",
      description:
        "Short pre-heading for the articles section (e.g., 'Articles').",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Section Heading",
      description:
        "Main heading for the service section (e.g., 'Latest Articles').",
      validation: (Rule) => Rule.required().warning("Heading is required"),
    }),
    defineField({
      name: "articles",
      type: "array",
      title: "Top Articles",
      of: [{ type: "reference", to: [{ type: "article" }] }],
    }),
    defineField({
      name: "design",
      type: "string",
      title: "Design Style",
      options: {
        list: [
          {
            title: "Design One Default",
            value: "designOne",
          },
          {
            title: "Design Two Work in progress",
            value: "designTwo",
          },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "sectionPreheading",
    },
    prepare({ title }) {
      return {
        title: "Articles Section",
        subtitle: title,
      };
    },
  },
});
