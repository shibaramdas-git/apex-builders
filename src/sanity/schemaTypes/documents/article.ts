import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Articles",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "A short and concise title of the article.",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      type: "text",
      title: "Short Description",
      description: "This description will be displayed on every article card.",
      rows: 2,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
      group: "settings",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readingTime",
      title: "Reading Time",
      type: "number",
      group: "settings",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      group: "settings",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      group: "settings",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      group: "settings",
      to: { type: "category" },
    }),
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
      name: "seo",
      type: "seo",
      group: "seo",
      title: "SEO Data",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "thumbnailImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
