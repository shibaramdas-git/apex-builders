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
      description: "A short and concise title of the project.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      description: "This description will be displayed on every project card.",
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
    // defineField({
    //   name: "images",
    //   title: "Project Images",
    //   type: "array",
    //   of: [
    //     {
    //       type: "image",
    //       options: { hotspot: true },
    //       fields: [
    //         {
    //           name: "alt",
    //           type: "string",
    //           title: "Alternative Text",
    //           description: "Description of the image for accessibility.",
    //         },
    //       ],
    //     },
    //   ],
    //   description: "Upload project-related images.",
    //   validation: (Rule) => Rule.required().min(1),
    // }),
    defineField({
      name: "blocks",
      type: "array",
      title: "Page Blocks",
      of: [
        { type: "hero-1" },
        { type: "richText" },
        { type: "gallery" },
        { type: "cta-1" },
        { type: "faqsSection" },
        { type: "heroSlider" },
        { type: "about-1" },
        { type: "servicesSection" },
        { type: "testimonial&Clients" },
        { type: "projectsSection" },
        { type: "articlesSection" },
      ],
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
    defineField({
      name: "seo",
      type: "seo",
      title: "SEO Data",
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
