import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial&Clients",
  type: "object",
  title: "Testimonials & clients section",
  fields: [
    defineField({
      name: "showTestimonials",
      type: "boolean",
      title: "Enable Testimonial Section",
      description: "Toggle to show or hide the testimonial section.",
    }),
    defineField({
      name: "testimonials",
      type: "object",
      title: "Testimonial Section",
      hidden: ({ parent }) => !parent?.showTestimonial,
      fields: [
        defineField({
          name: "heading",
          type: "string",
          title: "Testimonial Heading",
        }),
        defineField({
          name: "design",
          type: "string",
          title: "Design Options",
          options: {
            list: [
              {
                title: "Design 1 : Multiple Cards with star rating",
                value: "design1",
              },
              { title: "Design 2 : Single Card design", value: "design2" },
            ],
          },
          initialValue: "design1",
        }),
        defineField({
          name: "testimonials",
          type: "array",
          title: "Testimonials",
          of: [
            defineField({
              type: "object",
              name: "testimonial",
              fields: [
                defineField({
                  name: "author",
                  type: "string",
                  title: "Author",
                }),
                defineField({
                  name: "position",
                  type: "string",
                  title: "Profile",
                  description: "Position or profile of the author.",
                }),
                defineField({
                  name: "rating",
                  type: "number",
                  title: "Rating (1-5)",
                  validation: (Rule) =>
                    Rule.required()
                      .min(1)
                      .max(5)
                      .custom((value) => {
                        if (value !== undefined && !Number.isInteger(value)) {
                          return "Rating must be an integer.";
                        }
                        return true;
                      }),
                }),

                defineField({
                  name: "message",
                  type: "text",
                  title: "Review message",
                  validation: (Rule) => Rule.required().max(100).min(20),
                }),

                defineField({
                  name: "authorImage",
                  type: "image",
                  title: "Author Image",
                  options: {
                    hotspot: true,
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "showClients",
      type: "boolean",
      title: "Enable Clients Section",
      description: "Toggle to show or hide the clients section.",
    }),
    defineField({
      name: "clients",
      type: "object",
      title: "Clients Section",
      hidden: ({ parent }) => !parent?.showClients,
      fields: [
        defineField({
          name: "heading",
          type: "string",
          title: "Clients Heading",
        }),
        defineField({
          name: "designOptions",
          type: "string",
          title: "Design Options",
          options: {
            list: [
              { title: "Grid Layout", value: "grid" },
              { title: "Carousel", value: "carousel" },
            ],
          },
        }),
        defineField({
          name: "clientImages",
          type: "array",
          title: "Client Images",
          of: [
            defineField({
              name: "clientImage",
              type: "image",
              title: "Client Image",
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Testimonial & Clients",
        subtitle: "Testimonial & clients section",
      };
    },
  },
});
