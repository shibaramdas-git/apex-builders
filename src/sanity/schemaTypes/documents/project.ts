import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the project.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      rows: 2,
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      description: "The thumbnail image of the project.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Description of the image for accessibility.",
            },
          ],
        },
      ],
      description: "Upload project-related images.",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "block-content",
      description: "A detailed description of the project.",
      validation: (Rule) => Rule.required().max(1000),
    }),
    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "Ongoing", value: "ongoing" },
          { title: "Planned", value: "planned" },
        ],
        layout: "radio",
      },
      description: "The current status of the project.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "status",
      media: "thumbnailImage",
    },
  },
});
