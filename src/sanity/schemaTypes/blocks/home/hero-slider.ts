import { defineType, defineField } from "sanity";
import { TfiLayoutSlider } from "react-icons/tfi";

export default defineType({
  name: "heroSlider",
  type: "object",
  title: "Hero Slider",
  icon: TfiLayoutSlider,
  fields: [
    defineField({
      name: "slides",
      type: "array",
      title: "Slides",
      of: [
        defineField({
          name: "slide",
          type: "object",
          title: "Slide",
          fields: [
            defineField({
              name: "preheading",
              type: "string",
              title: "Preheading",
            }),
            defineField({
              name: "heading",
              type: "string",
              title: "Heading",
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
            }),
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "button1",
              type: "object",
              title: "Button 1",
              fields: [
                defineField({
                  name: "label",
                  type: "string",
                  title: "Label",
                }),
                defineField({
                  name: "href",
                  type: "string",
                  title: "Link",
                }),
              ],
            }),
            defineField({
              name: "button2",
              type: "object",
              title: "Button 2",
              fields: [
                defineField({
                  name: "label",
                  type: "string",
                  title: "Label",
                }),
                defineField({
                  name: "href",
                  type: "string",
                  title: "Link",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "autoplay",
      type: "boolean",
      title: "Autoplay",
    }),
    defineField({
      name: "interval",
      type: "number",
      title: "Interval (ms)",
      description: "Time in milliseconds between slide transitions.",
    }),
    defineField({
      name: "cta",
      type: "object",
      title: "Call to Action",
      fields: [
        defineField({
          name: "text",
          type: "string",
          title: "Text",
        }),
        defineField({
          name: "button",
          type: "object",
          title: "Button",
          fields: [
            defineField({
              name: "href",
              type: "string",
              title: "Button Link",
            }),
            defineField({
              name: "label",
              type: "string",
              title: "Button Label",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "slides.0.heading", // Selecting the heading of the first slide
    },
    prepare({ title }) {
      return {
        title: "Hero Slider",
        subtitle: title,
      };
    },
  },
});
