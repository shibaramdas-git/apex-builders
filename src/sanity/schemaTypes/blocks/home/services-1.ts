import { defineField, defineType } from "sanity";
import { RiCustomerService2Line } from "react-icons/ri";

export default defineType({
  name: "servicesSection",
  type: "object",
  title: "Service Section",
  icon: RiCustomerService2Line,
  fields: [
    defineField({
      name: "sectionPreheading",
      type: "string",
      title: "Section Preheading",
      description:
        "Short preheading for the service section (e.g., 'What We Do', 'Our Services').",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Section Heading",
      description:
        "Main heading for the service section (e.g., 'Services We Offer').",
      validation: (Rule) => Rule.required().warning("Heading is required"),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Section Image",
      options: {
        hotspot: true,
      },
      description: "Background or feature image for the section.",
    }),
    defineField({
      name: "services",
      type: "array",
      title: "Services",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "design",
      type: "string",
      title: "Design Style",
      options: {
        list: [
          {
            title: "Design One (Service list with an image)",
            value: "designOne",
          },
          {
            title: "Design Two (Service list with curved sides)",
            value: "designTwo",
          },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: "Service Section",
        subtitle: title,
      };
    },
  },
});
