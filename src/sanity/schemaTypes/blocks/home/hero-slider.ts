export default {
  name: "heroSlider",
  type: "object",
  title: "Hero Slider",
  fields: [
    {
      name: "slides",
      type: "array",
      title: "Slides",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "preheading",
              type: "string",
              title: "Preheading",
            },
            {
              name: "heading",
              type: "string",
              title: "Heading",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "button1",
              type: "object",
              title: "Button 1",
              fields: [
                {
                  name: "label",
                  type: "string",
                  title: "Label",
                },
                {
                  name: "href",
                  type: "string",
                  title: "href",
                },
              ],
            },
            {
              name: "button2",
              type: "object",
              title: "Button 2",
              fields: [
                {
                  name: "label",
                  type: "string",
                  title: "Label",
                },
                {
                  name: "href",
                  type: "string",
                  title: "href",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "autoplay",
      type: "boolean",
      title: "Autoplay",
    },
    {
      name: "interval",
      type: "number",
      title: "Interval (ms)",
      description: "Time in milliseconds between slide transitions.",
    },
    {
      name: "cta",
      type: "object",
      title: "Call to Action",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Text",
        },
        {
          name: "button",
          type: "object",
          title: "Button",
          fields: [
            {
              name: "href",
              type: "string",
              title: "Button Link",
            },
            {
              name: "label",
              type: "string",
              title: "Button Label",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "slides.0.heading", // Selecting the heading of the first slide
    },
    prepare({ title }: { title: string }) {
      return {
        title: "Hero Slider",
        subtitle: title,
      };
    },
  },
};
