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
  ],
});
