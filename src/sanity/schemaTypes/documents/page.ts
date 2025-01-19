import { defineType, defineField, defineArrayMember } from "sanity";
import { IoHome } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
export default defineType({
  name: "page",
  title: "Pages",
  type: "document",
  icon: IoHome,
  groups: [
    { name: "content", title: "Content" },
    { name: "seo", title: "Seo", icon: TbSeo },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "blocks",
      type: "array",
      group: "content",
      title: "Page Blocks",
      of: [
        { type: "hero-1" },
        { type: "richText" },
        { type: "gallery" },
        { type: "cta-1" },
        { type: "faqsSection" },
        { type: "heroSlider" },
      ],
    }),
    defineField({
      name: "meta_title",
      type: "string",
      title: "Meta title",
      group: "seo",
    }),
    defineField({
      name: "meta_description",
      type: "string",
      title: "Meta description",
      group: "seo",
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      group: "seo",
      title: "Open graph image - [1200x630]",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "ogImage",
    },
  },
});
