import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      description: "Type of category: Article, Project, or Both.",
      options: {
        list: [
          { title: "Article", value: "article" },
          { title: "Project", value: "project" },
        ], // Dropdown selection
        layout: "dropdown", // Optional: "radio" or "dropdown"
      },
    }),
    defineField({
      name: "references",
      title: "Reference",
      type: "array",
      hidden: ({ parent }) => parent?.type === undefined,
      of: [
        {
          type: "reference",
          to: [{ type: "article" }, { type: "project" }],
          options: {
            filter: ({ parent }) => {
              if (!parent?.type)
                return {
                  filter: "",
                };
              if (!Array.isArray(parent) && parent?.type === "article") {
                return {
                  filter: '_type == "article"',
                };
              }
              if (!Array.isArray(parent) && parent?.type === "project") {
                return {
                  filter: '_type == "project"',
                };
              }
              return {}; // No filtering if no type
            },
          },
        },
      ],
    }),
  ],
});
