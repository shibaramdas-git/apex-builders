import { defineType, defineField } from "sanity";
import { FcAbout } from "react-icons/fc";

export default defineType({
  name: "about-1",
  title: "About Section 1",
  type: "object",
  icon: FcAbout,
  fields: [
    defineField({
      name: "sectionHeading",
      title: "Section Heading",
      type: "string",
      validation: (Rule) =>
        Rule.required().warning("Section heading is required."),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [
        defineField({
          name: "point",
          title: "Point",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) =>
                Rule.required().warning("Icon is required."),
            }),
            defineField({
              name: "text",
              title: "Point Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "statsData",
      title: "Stats Data",
      type: "array",
      of: [
        defineField({
          name: "stat",
          title: "Stat",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) =>
                Rule.required().warning("Icon is required."),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: "About Section",
        subtitle: title,
      };
    },
  },
});
