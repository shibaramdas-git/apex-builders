import { defineType, defineField } from "sanity";

export const seoSchema = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "meta_title",
      type: "string",
      title: "Meta Title",
      description: "The title displayed in search engine results.",
    }),
    defineField({
      name: "meta_description",
      type: "string",
      title: "Meta Description",
      description: "A brief description displayed in search engine results.",
    }),
    defineField({
      name: "noindex",
      type: "boolean",
      title: "No Index",
      description: "Prevent search engines from indexing this page.",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      title: "Open Graph Image",
      description:
        "Image used when the page is shared on social media. [1200x630]",
      options: {
        hotspot: true,
      },
    }),
  ],
});
